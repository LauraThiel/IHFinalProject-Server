const { Schema, model } = require("mongoose");

const QuestionAnswerSchema = new Schema({
  category: { 
    type: String, 
    required: true
  },

  question: { 
    type: String, 
    required: true,
    unique: true,
  },

  intention: { 
    type: String, 
    required: false
  },

  answer: { 
    type: String, 
    required: true 
  },

  rating: { 
    type: Number, 
    required: true
  },
  
});

const QuestionAnswer = model("QuestionAnswer", QuestionAnswerSchema);

module.exports = QuestionAnswer;