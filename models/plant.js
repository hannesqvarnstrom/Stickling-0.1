const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latinName: {
    type: String,
  },
  family: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  plantedDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  coverImage: {
    type: Buffer,
    // required: true,
  },
  coverImageType: {
    type: String,
    // required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Author",
  },
});

plantSchema.virtual("coverImagePath").get(function () {
  if (this.coverImage != null && this.coverImageType != null) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString(
      "base64"
    )}`;
    // return path.join("/", coverImageBasePath, this.coverImageName);
  }
});

module.exports = mongoose.model("Plant", plantSchema);