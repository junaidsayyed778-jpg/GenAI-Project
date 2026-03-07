const mongoose = require("mongoose");

/**
 * job description
 * resume text
 * sekf descriotion
 *
 * Technical questions:[{
 * questions: "",
 * intension: "",
 * answer:""
 * }]
 * matchScore: Number
 * behavioral questions:[{
 * questions: "",
 * intension: "",
 * answer:""
 * }]
 * skills gaps:[{
 * skill: "",
 * severity: {
 * type: String,
 * enum:["low", "medium", "high"]}
 * }]
 * preparation paln : [{
 * day: Number,
 * focys: String,
 * tasks: String
 * }]
 */
const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: [true, "Technical question is required"]
    },
    intension:{
        type: String,
        required: [true, "Intension is required"]
    },
    answer:{
        type:String,
        required: [true, "Answer is required"]
    }
}, {
    _id: false
})
const behavioralQestionSchema = new mongoose.Schema({
 question:{
        type: String,
        required: [true, "Technical question is required"]
    },
    intention:{
        type: String,
        required: [true, "intention is required"]
    },
    answer:{
        type:String,
        required: [true, "Answer is required"]
    }
}, {
    _id: false
})
const skillGapsSchema = new mongoose.Schema({
  skill:{
    type:String,
    required:true
  },
  severity:{
    type:String,
    enum:["low","medium","high"],
    required:true
  }
},{
  _id:false
})
const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        required: [true, "Day is required"]
    },
    focus:{
        type: String,
        required: [true, "Focus is required"]
    },
    tasks:{
        type: String,
        required: [true, "Task is required"]
    }
})
const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type: String,
        required: true
    },
    resume:{
        type: String
    },
    selfDescription:{
        type: String
    },
    matchScore:{
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestions:[technicalQuestionSchema],
    behavioralQuestions:[behavioralQestionSchema],
    skillGaps:[skillGapsSchema],
    preparationPlan:[preparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
},{
    timestamps: true
})

const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema);
module.exports = interviewReportModel