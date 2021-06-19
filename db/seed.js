const mongoose = require("mongoose");
require("dotenv/config")
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/finalproject";

const Interview = require("../models/Interview.model");
const QuestionAnswer = require("../models/QuestionAnswer.model");


const InterviewArr = [

  {role: "Product Manager", 
  company: "Google", 
  date: new Date(),
  description: "Customer centricity"
  },
  
  {role: "Associate Product Manager", 
  company: "Facebook", 
  date: new Date(),
  description: "Enable Collaboration between Tech, UX, and Business"
  },
  
  {role: "Senior Product Manager", 
  company: "Amazon", 
  date: new Date(),
  description: "Own the Product Roadmap"
  }
  
  ]

  const QuestionArr = [

    {category: "Introduction", 
    question: "Tell me about yourself?", 
    intention: "This question seems to be a general introduction, but here you can tell your journey towards product management.",
    answer: "I am Laura ...",
    rating: 0
    },
  
    {category: "Product", 
    question: "What is your favourite Application? And how would you improve it?", 
    intention: "The intention of this question is to learn about your approach how to develop a product?",
    answer: "My favourite App is Uber Eats",
    rating: 0
    },
  
    {category: "Product Management", 
    question: "What is the most challenging about Product Management?", 
    intention: "It is important to have a good answer to this and how to approach this challenge.",
    answer: "The balancing of needs from all the different stakeholders.",
    rating: 0
    },
  
    ]


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log("CONNECTED")
  Interview.insertMany(InterviewArr).then(() => {
    console.log("ADDED Interviews");
    mongoose.disconnect();
    console.log("DISCONNECTED")
  })
})

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log("CONNECTED")
  QuestionAnswer.insertMany(QuestionArr).then(() => {
    console.log("ADDED questions");
    mongoose.disconnect();
    console.log("DISCONNECTED")
  })
})