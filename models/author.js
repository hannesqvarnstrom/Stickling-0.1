const mongoose = require("mongoose");
const Plant = require("./plant");
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

authorSchema.pre("remove", function (next) {
  Plant.find({ author: this.id }, (err, plants) => {
    if (err) {
      next(err);
    } else if (plants.length > 0) {
      next(new Error("This author has plants still!"));
    } else {
      next();
    }
  });
});

module.exports = mongoose.model("Author", authorSchema);
