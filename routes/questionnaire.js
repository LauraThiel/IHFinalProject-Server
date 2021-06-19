const {Router} = require("express");
const QuestionAnswer = require("../models/QuestionAnswer.model")
const isLoggedIn = require("../middleware/isLoggedIn")

const router = Router()

router.get("/", (req, res) => {
  QuestionAnswer.find({}).then((allQuestions) => {
    res.json(allQuestions);
  });
});

router.get("/:questionId", (req, res) => {
  QuestionAnswer.findById(req.params.questionnaireId)
  .then((Question) => {
    res.json(Question);
  });
});

router.post("/add", isLoggedIn, (req, res) => {
  QuestionAnswer.findOne({
    Role: req.body.title,
  }).then((AddedQuestion) => {
    if (Question)
    return res
    .status(400)
    .json({errorMessage: "Question already exists in DB", key: "role"
  });
})

  const { category, question, intention, answer } = req.body; 

  QuestionAnswer.create({
    category,
    question,
    intention,
    answer
  })
  .then((createdQuestion) => {
    res.json({ question: createdQuestion })})
  .catch(err=>{
    res.json(500).json({ errorMessage: err.message })
  }).catch(err=>{
    res.json(500).json({ errorMessage: err.message })
})
})


module.exports = router;