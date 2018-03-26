const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const figures = require("./api/figures");
const dragonBall = require("./api/dragonBall");
const starWars = require("./api/starWars");
const marvel = require("./api/marvel");
const collection = require("./api/collection");
const wishlist = require("./api/wishlist");
const achievements = require("./api/achievements");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Yo, it works bro!",
  });
});

app.use("/api/v1/figures", figures);
app.use("/api/v1/dragonBall", dragonBall);
app.use("/api/v1/starWars", starWars);
app.use("/api/v1/marvel", marvel);
app.use("/api/v1/collection", collection);
app.use("/api/v1/wishlist", wishlist);
app.use("/api/v1/achievements", achievements);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  res.status(404);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: req.app.get("env") === "development" ? err.stack : {},
  });
});

module.exports = app;
