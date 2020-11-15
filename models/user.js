const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); //is needed?
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//authenticating input against databser
userSchema.statics.authenticate = function (email, password, callback) {
  this.findOne({ email: email }).exec(function (err, user) {
    //'this' used to be User
    if (err) {
      return callback(err);
    } else if (!user) {
      let err = new Error("User not found");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};

userSchema.pre("save", function (next) {
  // THIS SHOULD WORK?!"?!?!"
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", userSchema);
