const { Schema, model } = require("mongoose");

const InterviewSchema = new Schema({
  role: { 
    type: String, 
    required: true
  },

  company: { 
    type: String, 
    required: true 
  },

  date: { 
    type: Date, 
    default: Date.now()
  },
  
});

const Interview = model("Interview", InterviewSchema);

module.exports = Interview;