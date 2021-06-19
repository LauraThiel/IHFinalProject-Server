const router = require("express").Router();
const authRoutes = require("./auth");
const InterviewRouter = require("./interview")
const profileRouter = require("./profile")
const questionnaireRouter = require("./questionnaire")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here!");
});

router.use("/auth", authRoutes);

router.use("/interview", InterviewRouter);

router.use("/profile", profileRouter);

router.use("/questionnaire", questionnaireRouter);


module.exports = router;
