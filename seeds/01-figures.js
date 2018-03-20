exports.seed = async function(knex, Promise) {
  await knex("figure").del();
    await knex("figure").insert(),
};

