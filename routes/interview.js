const {Router} = require("express");
const Interview = require("../models/Interview.model")

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



module.exports = router;