const express = require("express");
const router = express.Router();
const Plant = require("../models/plant"); //
const User = require("../models/user");
const fetch = require("node-fetch");
const imageMimeTypes = ["image/jpeg", "image/png", "image/gif"];
//new plant route
router.get("/new", async (req, res) => {
  renderNewPage(res, req, new Plant());
});
//all Plants route
router.get("/", async (req, res) => {
  let query = Plant.find();
  if (req.query.name != null && req.query.name != "") {
    query = query.regex("name", new RegExp(req.query.name, "i"));
  }
  if (req.query.publishedBefore != null && req.query.publishedBefore != "") {
    query = query.lte("publishDate", req.query.publishedBefore);
  }
  if (req.query.publishedAfter != null && req.query.publishedAfter != "") {
    query = query.gte("publishDate", req.query.publishedAfter);
  }
  if (req.query.latinName != null && req.query.latinName !== "") {
    query = query.regex("latinName", new RegExp(req.query.latinName, "i"));
  }
  if (req.query.family != null && req.query.family !== " ") {
    query = query.regex("family", new RegExp(req.query.family, "i"));
  }
  try {
    const plants = await query.exec();
    res.render("plants/index", {
      plants: plants,
      searchOptions: req.query,
      // plantFamilies: plantFamilies,
      isLoggedIn: req.session.userId != null,
    });
  } catch {
    res.redirect("/");
  }
});

//get family by query route
// router.get("/:family", async (req, res) => {

// });

//create plant route
router.post("/", async (req, res) => {
  //   const fileName = req.file != null ? req.file.filename : null;
  const plant = new Plant({
    name: req.body.name,
    latinName: req.body.latinName,
    family: req.body.family,
    user: req.session.userId,
    plantedDate: new Date(req.body.plantedDate),
    // coverImageName: fileName,
    description: req.body.description,
  });
  if (req.body.family === " ") {
    renderNewPage(res, req, plant, true);
    return;
  }
  let defaultCover = ""; //set this to an encoded image to be default image
  if (req.body.cover != null && req.body.cover !== "") {
    saveCover(plant, req.body.cover);
  } else {
  }

  try {
    const newPlant = await plant.save();
    res.redirect(`plants/${newPlant.id}`);
    // res.redirect("books");
  } catch (err) {
    // if (book.coverImageName != null) {
    //   removeBookCover(book.coverImageName);
    // }
    renderNewPage(res, req, plant, true);
  }
});
router.get("/find_trefle", async (req, res) => {
  console.log(req.query.searchTerm);
  if (req.query.searchTerm != undefined) {
    const searchTerm = "&q=" + req.query.searchTerm;
    const url = "https://trefle.io/api/v1/plants/search?";
    const tokenString = "token=IydbibZ1RCNb3BFiyssTNAMnaKY1E-Po0fMXDKrF6t8";
    const results = await doQuery(res, req, url, tokenString, searchTerm);
    const isNext = results.links.next !== undefined;
    let number = 0;
    if (isNext) number = 1;
    res.render("plants/find_trefle", {
      searchTerm,
      origSearchTerm: req.query.searchTerm,
      results,
      isNext,
      number,
    });
  } else {
    console.log("query is undefined");
    res.render("plants/find_trefle");
  }
});

//after search, results are loaded and the first 3 results for each category
//are displayed in a box with a link to page one of the search result
//more than one get route?

router.get("/find_trefle/:query/:number", async (req, res) => {
  console.log("find_trefle/query/number is this one");
  const q = "&q=" + req.params.query;
  const number = req.params.number;
  console.log(number);
  const url = "https://trefle.io/api/v1/plants/search?page=" + number + "&";
  const tokenString = "token=IydbibZ1RCNb3BFiyssTNAMnaKY1E-Po0fMXDKrF6t8";
  try {
    const results = await doQuery(res, req, url, tokenString, q);
    const isNext = results.links.next !== undefined;
    console.log(results.links.next);
    res.render("plants/find_trefle", {
      number,
      origSearchTerm: req.params.query,
      results,
      isNext,
    });
  } catch (err) {
    console.log(err);
    res.render("plants/find_trefle", {
      errorMessage: "Something went wrong in your search",
    });
  }
});

function renderSearchResults(res, req, currentPage, isNext, resultsArr, url, q) {
  //token?
  res.render("plants/find_trefle", {
    resultsArr: resultsArr,
    currentPage: currentPage,
    isNext: isNext,
    q: q,
  });
}

async function doQuery(res, req, url, tokenString, q) {
  const jsonObject = await fetch(`${url}${tokenString}${q}`)
    .then((resp) => resp.json())
    .then((json) => json);
  return jsonObject;
}
async function iterateQuery(res, req, arr, url, tokenString, q) {
  let returnArr = arr;
  const promise = await fetch(`${url}${tokenString}${q}`);
  const jsonObj = await promise.json().then((json) => json);
  // console.log(jsonObj);
  // console.log(Array.isArray(jsonObj.data));
  jsonObj.data.forEach((plant) => returnArr.push(plant));
  // console.log(jsonObj.links.next);
  let pageString = jsonObj.links.next.substr();
  //WE NEED A FUNCTION THAT ASSEMBLES THE URL. WE SHOULD CALL IT ALL THE TIME, IT SHOULD TAKE A BOOLEAN WHICH CHECKS FOR NEXT PAGE.
  if (jsonObj.links.next !== undefined) {
    returnArr = iterateQuery(
      res,
      req,
      returnArr,
      `https://trefle.io${jsonObj.links.next}`,
      tokenString,
      q
    );
  } else {
    console.log("no next");
    return returnArr;
  }

  // console.log(json.data);

  // console.log(jsonData);
  // if (jsonData.next != null) {
  //   console.log("there is a next function");
  // }
  // console.log(promise);
  // const response = await promise.then((res) => res.json());
  // const jsonData = await response.then((data) => data);
  // console.log(jsonData);
  // if (response.next != null) {
  //   console.log(response.next);
  // }
  // return arr;
}
//show plant route
router.get("/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id).populate("user").exec();
    const isOwner = req.session.userId == plant.user._id;
    res.render("plants/show", {
      plant: plant,
      isOwner: isOwner,
      isLoggedIn: req.session.userId != null,
    });
  } catch {
    res.redirect("/");
  }
});

//edit plant route
router.get("/:id/edit", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    const plantUser = plant.user;
    if (plantUser._id == req.session.userId) {
      renderEditPage(res, req, plant);
    } else {
      const plants = await Plant.find({});
      res.render("plants/index", {
        errorMessage: "You do not have the authority to edit this plant.",
        plants: plants,
        searchOptions: req.query, //placeholder
        isLoggedIn: req.session.userId != null,
      });
    }
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
    plant.latinName = req.body.latinName;
    plant.family = req.body.family;
    plant.user = req.body.user;
    plant.plantedDate = new Date(req.body.plantedDate);
    plant.description = req.body.description;
    if (req.body.cover != null && req.body.cover !== "") {
      saveCover(plant, req.body.cover);
    }
    await plant.save();
    res.redirect(`/plants/${plant.id}`);
  } catch {
    if (plant != null) {
      renderEditPage(res, req, plant, true);
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
      res.render("plants/show", {
        plant: plant,
        errorMessage: "Could not remove plant",
        isLoggedIn: req.session.userId != null,
      });
    } else {
      res.redirect("/");
    }
  }
});

function saveCover(plant, coverEncoded) {
  // console.log(coverEncoded);
  if (coverEncoded == null) {
    return;
  }
  const cover = JSON.parse(coverEncoded);
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    plant.coverImage = new Buffer.from(cover.data, "base64");
    plant.coverImageType = cover.type;
  }
}

async function renderNewPage(res, req, plant, hasError = false) {
  renderFormPage(res, req, plant, "new", hasError);
}

async function renderEditPage(res, req, plant, hasError = false) {
  renderFormPage(res, req, plant, "edit", hasError);
}

async function renderFormPage(res, req, plant, form, hasError = false) {
  try {
    const users = await User.find({});
    const params = {
      users: users,
      plant: plant,
      isLoggedIn: req.session.userId != null,
    };
    if (hasError) {
      if (form === "edit") {
        params.errorMessage = "Error updating plant";
      } else {
        params.errorMessage = "Error creating plant";
      }
    }
    // if (res.session != null) {
    res.render(`plants/${form}`, params);
    // }
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
