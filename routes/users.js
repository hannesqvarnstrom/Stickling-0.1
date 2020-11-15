const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Author = require("../models/author");

router.get("/", async (req, res) => {
  res.render("users/index");
});

router.post("/", async (req, res) => {
  if (req.body.password !== req.body.passwordConf) {
    let err = new Error("Passwords do not match");
    err.status = 400;
    res.send("passwords don't match");
    return next(err);
  }
  if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {
    let userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    //THIS REGISTERS USER
    User.create(userData, function (error, user) {
      if (error) {
        // return next(error);
        console.log(error);
        return;
      } else {
        req.session.userId = user._id;
        return res.redirect("users/profile"); //EITHER WAY THIS WONT WORK, IF ERROR IS HERE CHANGE PATH
      }
    });
  } else if (req.body.logemail && req.body.logpassword) {
    // WHAT IS LOGEMAIL AND LOGPASSWORD?
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        let err = new Error("Wrong email or password");
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect("users/profile");
      }
    });
  } else {
    let err = new Error("All fields required");
    err.status = 400;
    return next(err);
    //   }
    //   let user = new User({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    //     _id: req.sessions.userId,
    //   });
    //   try {
    //     const newUser = await user.save();
    //     // res.redirect(`users/${newUser.id}`);
    //     res.render(`users/profile`, {
    //       user: user,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //     res.render("users/index", {
    //       user: user,
    //       errorMessage: "Error creating user", //detta kan kräva extra
    //     });
  }
});

//get route after registering
router.get("/profile", function (req, res, next) {
  //route correct?
  User.findById(req.session.userId).exec(function (error, user) {
    if (error) {
      return next(error);
    } else {
      if (user === null) {
        let err = new Error("Not authorized! Go back");
        err.status = 400;
        return next(err);
      } else {
        return res.render("users/profile", {
          user: user,
        });
      }
    }
  });
});

module.exports = router;
