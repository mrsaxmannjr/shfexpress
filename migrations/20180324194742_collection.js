exports.up = function (knex, Promise) {
  return knex.schema.createTable("collection", table => {
    table.increments("id");
    table.text("ASIN").notNullable();
    table.text("title").notNullable();
    table.text("image").notNullable();
    table.specificType("feature", "text[]").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("collection");
};
