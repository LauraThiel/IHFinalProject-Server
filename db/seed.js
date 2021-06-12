const mongoose = require("mongoose");

const Interview = require("../models/Interview.model");

const InterviewArr = [

  {role: "Product Manager", 
  company: "Google", 
  date: new Date(),
  },

  {role: "Associate Product Manager", 
  company: "Facebook", 
  date: new Date(),
  },

  {role: "Senior Product Manager", 
  company: "Amazon", 
  date: new Date(),
  }


  ]

mongoose.connect("mongodb://localhost/finalproject").then(() => {
  console.log("CONNECTED")
  Interview.insertMany(InterviewArr).then(() => {
    console.log("ADDED STUFF");
    mongoose.disconnect();
    console.log("DISCONNECTED")
  })
})