const express = require("express");

const router = express.Router();

const queries = require("../db/queries.js");

router.get("/", async (req, res) => {
  const figures = await queries.getAll();
  res.json(figures);
});

module.exports = router;
