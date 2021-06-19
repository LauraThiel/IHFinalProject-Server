//something is not working here with the find method; Err 403

const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.put(`/update`, isLoggedIn, (req, res) => {
  const { username } = req.body;
  console.log(req.body);
  if (username.length < 8) {
  }

  User.find({ username }).then((allUsers) => {
    //something is not working here with the find method; Err 403
    const allNotMe = allUsers.filter(
      (eachUser) => eachUser._id.toString() != req.user._id.toString()
    );
    if (allNotMe.length) {
    }

    User.findByIdAndUpdate(req.user._id, { username }, { new: true }).then(
      (newUser) => {
        res.json({ user: newUser });
      }
    );
  });
});

module.exports = router;
