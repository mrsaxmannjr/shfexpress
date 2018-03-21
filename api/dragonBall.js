const express = require("express");

const router = express.Router();

const queries = require("../db/queries.js");

router.get("/", async (req, res) => {
  const dragonBall = await queries.getAll();
  res.json(dragonBall[0].images);
});

module.exports = router;
