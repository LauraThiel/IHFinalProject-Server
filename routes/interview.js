const {Router} = require("express");
const Interview = require("../models/Interview.model")

const router = Router()

router.get("/", (req, res) => {
  Interview.find({}).then((allInterviews) => {
    res.json(allInterviews);
  });
});

module.exports = router;