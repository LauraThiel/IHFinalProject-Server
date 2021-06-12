const {Router} = require ("express");
const singleInterview = require("../models/Interview.model");

const Router = Router();

router.get("interview/:interviewId", (req, res) => {
  singleInterview.findById(req.params.interviewId)
.then((foundInterview) =>
res.json(foundInterview)
)});

module.exports = router;