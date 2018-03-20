const figures = require("../data/figures-seed-data");

exports.seed = async function (knex, Promise) {
  await knex("figures").del();
  await knex("figures").insert(figures);
};
