const {Router} = require("express");
const Interview = require("../models/Interview.model")
const isLoggedIn = require("../middleware/isLoggedIn")

const router = Router()

router.get("/", (req, res) => {
  Interview.find({}).then((allInterviews) => {
    res.json(allInterviews);
  });
});

router.get("/:interviewId", (req, res) => {
  Interview.findById(req.params.interviewId)
  .then((SingleInterview) => {
    res.json(SingleInterview);
  });
});

router.post("/add", isLoggedIn, (req, res) => {
  Interview.findOne({
    Role: req.body.title,
  }).then((AddedInterview) => {
    if (SingleInterview)
    return res
    .status(400)
    .json({errorMessage: "Interview already exists in DB", key: "role"
  });
})

  const { role, company, date } = req.body; 

  Interview.create({
    role,
    company,
    date,
  })
  .then((createdInterview) => {
    res.json({ interview: createdInterview })})
  .catch(err=>{
    res.json(500).json({ errorMessage: err.message })
  }).catch(err=>{
    res.json(500).json({ errorMessage: err.message })
})
})


module.exports = router;