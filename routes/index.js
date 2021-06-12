const router = require("express").Router();
const authRoutes = require("./auth");
const InterviewRouter = require("./interview")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here!");
});

router.use("/auth", authRoutes);

router.use("/interview", InterviewRouter);


module.exports = router;
