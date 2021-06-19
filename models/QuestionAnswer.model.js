const { Schema, model } = require("mongoose");

const InterviewSchema = new Schema({
  category: { 
    type: String, 
    required: true
  },

  question: { 
    type: String, 
    required: true 
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

const Interview = model("Interview", InterviewSchema);

module.exports = Interview;