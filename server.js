if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const bcrypt = require("bcrypt"); //is needed?`
const session = require("express-session"); // is needed?

const indexRouter = require("./routes/index");
const plantRouter = require("./routes/plants");
const userRouter = require("./routes/users");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false })); //if requests via url can be other things than strings, set this to true.
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "work hard", //CHANGE THIS???
    resave: true,
    saveUninitialized: false,
  })
);

app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", indexRouter);
app.use("/plants", plantRouter);
app.use("/users", userRouter);
app.listen(process.env.PORT || 3000);
