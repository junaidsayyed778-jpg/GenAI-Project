const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../serivces/aiService");
const interviewReportModel = require("../models/interviewReportModel");

async function generateInterviewReportController(req, res){
    const resumeFile = req.file

    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    });

    // Normalize AI output
    const normalizeScore = (score) => {
        if (typeof score === "string") {
            return parseFloat(score.replace("%", ""));
        }
        return score;
    };

const normalizeQuestions = (field) => {
    if (!field) return [];

    if (typeof field === "string") {
        try {
            field = JSON.parse(field);
        } catch {
            return [{
                question: field,
                intension: "AI generated question",
                answer: "Candidate should explain the concept clearly"
            }];
        }
    }

    if (!Array.isArray(field)) return [];

    return field.map(q => ({
        question: q.question || q.text || "",
        intension: q.intension || q.intention || "Explain the concept",
        answer: q.answer || "Candidate should explain with example"
    }));
};

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        matchScore: normalizeScore(interviewReportByAi.matchScore),
        technicalQuestions: normalizeArray(interviewReportByAi.technicalQuestions),
        behavioralQuestions: normalizeArray(interviewReportByAi.behavioralQuestions),
        skillGaps: normalizeArray(interviewReportByAi.skillGaps || interviewReportByAi.skillsGaps),
        preparationPlan: normalizeArray(interviewReportByAi.preparationPlan || interviewReportByAi.prepaationPlan),
    });

    res.status(201).json({
        message: "Interview report generated succesfully",
        interviewReport
    });
}

module.exports = {
    generateInterviewReportController
}