const express = require("express");

const router = express.Router();

const queries = require("../db/queries.js");

router.get("/", async (req, res) => {
  const marvel = await queries.getAll();
  res.json(marvel[2].images);
});

module.exports = router;
