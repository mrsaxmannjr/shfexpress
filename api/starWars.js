const express = require("express");

const router = express.Router();

const queries = require("../db/queries.js");

router.get("/", async (req, res) => {
  const starWars = await queries.getAll();
  res.json(starWars[1].images);
});

module.exports = router;
