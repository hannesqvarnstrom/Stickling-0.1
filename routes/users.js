const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Plant = require("../models/plant");

router.get("/profile", (req, res) => {
  //route correct?
  if (req.session.userId !== null) {
    try {
      User.findById(req.session.userId).exec(function (error, user) {
        if (error) {
          return;
        } else {
          if (user === null) {
            res.redirect("/users");
          } else {
            return res.render("users/profile", {
              isLoggedIn: req.session.userId != null,
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
router.get("/findUsers", async (req, res) => {
  let searchOptions = {};
  if (req.query.username != null && req.query.username !== "") {
    searchOptions.username = new RegExp(req.query.username, "i");
  }
  try {
    const users = await User.find(searchOptions);
    res.render("users/findUsers", {
      users: users,
      searchOptions: req.query,
      isLoggedIn: req.session.userId != null,
    });
  } catch {
    res.redirect("/");
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
  res.render("users/index", {
    isLoggedIn: req.session.userId != null,
  });
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const plants = await Plant.find({ user: user._id }).limit(12);
    const isOwnUser = req.session.userId == user._id;
    res.render("users/show", {
      user: user,
      plantsByUser: plants,
      isOwnUser: isOwnUser,
      isLoggedIn: req.session.userId != null,
    });
  } catch (err) {
    res.redirect("/");
  }
});
router.get("/:id/edit", async (req, res) => {
  if (req.session.userId == req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      res.render("users/edit", { user: user, isLoggedIn: req.session.userId != null });
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
        isLoggedIn: req.session.userId != null,
      });
    }
  }
});

router.post("/", async (req, res) => {
  if (req.body.password !== req.body.passwordConf) {
    renderUsersPage(req.session.userId != null, "Passwords do not match.", res, req);
    return;
  }
  if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {
    let userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    User.create(userData, function (error, user) {
      if (error) {
        renderUsersPage(req.session.userId != null, "Error creating user.", res, req);
        return;
      } else {
        req.session.userId = user._id;
        return res.redirect("users/profile");
      }
    });
  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        renderUsersPage(req.session.userId != null, "Wrong email or password.", res, req);
      } else {
        req.session.userId = user._id;
        return res.redirect("users/profile");
      }
    });
  } else {
    renderUsersPage(req.session.userId != null, "All fields are required", res, req);
  }
});

router.delete("/:id", async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    await user.remove();
    res.redirect("/users/logout");
  } catch {
    if (user == null) {
      res.redirect("/");
    } else {
      res.redirect(`/users/${user._id}`);
    }
  }
});
const renderUsersPage = (isLoggedIn, errorMessage, res, req) => {
  res.render("users/index", {
    isLoggedIn: isLoggedIn,
    errorMessage: errorMessage,
  });
};

module.exports = router;
