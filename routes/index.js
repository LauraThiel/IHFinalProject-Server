const router = require("express").Router();
const authRoutes = require("./auth");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here!");
});

router.use("/auth", authRoutes);

const InterviewRouter = require("./interview")

router.use("/interview", InterviewRouter);


module.exports = router;
