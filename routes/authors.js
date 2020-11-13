const express = require("express");
const router = express.Router();
const Author = require("../models/author");

//all authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});

//new auithor route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

//create author route
router.post("/", (req, res) => {
  res.send(req.body.name); //req.body.name
});

module.exports = router;
