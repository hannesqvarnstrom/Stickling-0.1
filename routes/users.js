const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Author = require("../models/author");
const Plant = require("../models/plant");

router.get("/profile", (req, res) => {
  //route correct?
  if (req.session.userId !== null) {
    try {
      User.findById(req.session.userId).exec(function (error, user) {
        // session.userId blir profile?
        if (error) {
          //   console.log("before");
          return;
          //   console.log(error);
          //   return next(error);
        } else {
          if (user === null) {
            // let err = new Error("Not authorized! Go back");
            // err.status = 400;
            // return next(err);
            res.redirect("/users");
          } else {
            // console.log("hej");
            return res.render("users/profile", {
              user: user,
            });
          }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/");
      }
    });
  }
});
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.username != null && req.query.username !== "") {
    searchOptions.username = new RegExp(req.query.username, "i");
  }
  //   console.log(searchOptions);
  try {
    const users = await User.find(searchOptions); //searchOptions
    res.render("users/index", { users: users, searchOptions: req.query }); //, searchOptions: req.query
  } catch {
    res.redirect("/");
  }
});
router.get("/:id", async (req, res) => {
  //THIS IS PROBABLY NEEDED
  try {
    const user = await User.findById(req.params.id); //maybe is params._id
    const plants = await Plant.find({ user: user._id }).limit(6).exec(); //this is one of the places where user: user._id is gonna be used i think
    const isOwnUser = req.session.userId == user._id;
    res.render("users/show", {
      user: user,
      plantsByUser: plants,
      isOwnUser: isOwnUser,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});
router.get("/:id/edit", async (req, res) => {
  if (req.session.userId == req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      res.render("users/edit", { user: user });
    } catch {
      res.redirect("/users");
    }
  } else res.redirect("/users");
});

router.put("/:id", async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
    res.redirect(`/users/${user.id}`);
  } catch {
    if (user == null) {
      res.redirect("/");
    } else {
      res.render("users/edit", {
        user: user,
        errorMessage: "Error updating User",
      });
    }
  }
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
        // return next(err);
        console.log(err);
        res.render("users", { errorMessage: err, searchOptions: req.query, users: [] }); //placeholder req
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

module.exports = router;
