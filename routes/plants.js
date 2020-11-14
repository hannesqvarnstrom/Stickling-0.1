const express = require("express");
const router = express.Router();
const Plant = require("../models/plant"); //
const Author = require("../models/author");
const imageMimeTypes = ["image/jpeg", "image/png", "image/gif"];

//all Plants route
router.get("/", async (req, res) => {
  let query = Plant.find();
  if (req.query.name != null && req.query.name != "") {
    query = query.regex("name", new RegExp(req.query.name, "i"));
  }
  if (req.query.publishedBefore != null && req.query.publishedBefore != "") {
    //REMOVE OR KEEP? I DONT KNOW!!!!!!
    query = query.lte("publishDate", req.query.publishedBefore);
  }

  if (req.query.publishedAfter != null && req.query.publishedAfter != "") {
    //REMOVE OR KEEP?! I DONT KNOW!!!!
    query = query.gte("publishDate", req.query.publishedAfter);
  }
  try {
    const plants = await query.exec();
    res.render("plants/index", {
      plants: plants,
      searchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

//new plant route
router.get("/new", async (req, res) => {
  renderNewPage(res, new Plant());
});

//create plant route
router.post("/", async (req, res) => {
  //   const fileName = req.file != null ? req.file.filename : null;
  const plant = new Plant({
    name: req.body.name,
    latinName: req.body.latinName,
    family: req.body.family,
    author: req.body.author,
    plantedDate: new Date(req.body.plantedDate),
    // coverImageName: fileName,
    description: req.body.description,
  });
  saveCover(plant, req.body.cover);
  try {
    const newPlant = await plant.save();
    res.redirect(`plants/${newPlant.id}`);
    // res.redirect("books");
  } catch {
    // if (book.coverImageName != null) {
    //   removeBookCover(book.coverImageName);
    // }
    // console.log(res.body);
    renderNewPage(res, plant, true);
  }
});
//show plant route
router.get("/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id).populate("author").exec();
    res.render("plants/show", { plant: plant });
  } catch {
    res.redirect("/");
  }
});

//edit plant route
router.get("/:id/edit", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    renderEditPage(res, plant);
  } catch {
    res.redirect("/");
  }
});

//update plant route
router.put("/:id", async (req, res) => {
  let plant;
  try {
    plant = await Plant.findById(req.params.id);
    plant.name = req.body.name;
    (plant.latinName = req.body.latinName),
      (plant.family = req.body.family),
      (plant.author = req.body.author);
    plant.plantedDate = new Date(req.body.plantedDate);
    plant.description = req.body.description;
    if (req.body.cover != null && req.body.cover !== "") {
      saveCover(plant, req.body.cover);
    }
    await plant.save();
    res.redirect(`/plants/${plant.id}`);
  } catch {
    if (plant != null) {
      renderEditPage(res, plant, true);
    } else {
      res.redirect("/");
    }
  }
});

//Delete Plant Page
router.delete("/:id", async (req, res) => {
  let plant;
  try {
    plant = await Plant.findById(req.params.id);
    await plant.remove();
    res.redirect("/plants");
  } catch {
    if (plant != null) {
      res.render("plants/show", { plant: plant, errorMessage: "Could not remove plant" });
    } else {
      res.redirect("/");
    }
  }
});

function saveCover(plant, coverEncoded) {
  if (coverEncoded == null) return;
  const cover = JSON.parse(coverEncoded);
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    plant.coverImage = new Buffer.from(cover.data, "base64");
    plant.coverImageType = cover.type;
  }
}

async function renderNewPage(res, plant, hasError = false) {
  renderFormPage(res, plant, "new", hasError);
}

async function renderEditPage(res, plant, hasError = false) {
  renderFormPage(res, plant, "edit", hasError);
}

async function renderFormPage(res, plant, form, hasError = false) {
  try {
    const authors = await Author.find({});
    const params = {
      authors: authors,
      plant: plant,
    };
    if (hasError) {
      if (form === "edit") {
        params.errorMessage = "Error updating plant";
      } else {
        params.errorMessage = "Error creating plant";
      }
    }
    res.render(`plants/${form}`, params);
  } catch (e) {
    console.log(e);
    res.redirect("/plants");
  }
}

// function removeBookCover(fileName) {
//   fs.unlink(path.join(uploadPath, fileName), (err) => {
//     if (err) console.err(err);
//   });
// }

module.exports = router;
