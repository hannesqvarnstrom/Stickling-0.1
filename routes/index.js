const express = require("express");
const router = express.Router();
const Plant = require("../models/plant");
router.get("/", async (req, res) => {
  let plants;
  try {
    plants = await Plant.find().sort({ createdAt: "Asc" }).limit(10).exec();
  } catch {
    plants = [];
  }
  res.render("index", { plants: plants, isLoggedIn: req.session.userId != null });
});

module.exports = router;
