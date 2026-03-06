const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const interbiewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 0 to 100 indicating how well the candidate 's profile matches the job description",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("Technical question can be asked in the interview"),
        intension: z
          .string()
          .describe(
            "The intension od interviewer behind asking this question",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover , what approach to use",
          ),
      }),
    )
    .describe(
      "Technical questions that can be asked in the interview along with their intension and how to answer them",
    ),
  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("Behaioral question can be asked in the interview"),
        intension: z
          .string()
          .describe(
            "The intension od interviewer behind asking this question",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover , what approach to use",
          ),
      }),
    )
    .describe(
      "Behavioral questions that can be asked in the interview along with their intension and how to answer them",
    ),
  skillsGaps: z.array(
    z.object({
      skill: z.array().describe("The skill which the candidate is lacking"),
      severity: z
        .enum(["low", "medium", "high"])
        .describe(
          "The severity of this skill gaps, i.e. how much it can impact the candidate chances of getting hired",
        ),
    }),
  ),
  prepaationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe(
            "The day number is the preparation plan, starting from 1",
          ),
        focus: z
          .string()
          .describe("The main focus of the this day in preparing plan"),
        tasks: z
          .string()
          .describe(
            "List of tasks to be done on this day to follow the preparation plan",
          ),
      }),
    )
    .describe(
      "A day-wise preparation plan for the candidate to follow in order to fill the skill gaps and prepare for the interview",
    ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `Generate a interview report for a candidate with the following details:
    Resume: ${resume}
    Self Description: ${selfDescription}
    Job Description: ${jobDescription}`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "",
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(interbiewReportSchema),
    },
  });
  console.log((response.text));
}

module.exports = generateInterviewReport;
