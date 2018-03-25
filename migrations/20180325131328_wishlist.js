exports.up = function (knex, Promise) {
  return knex.schema.createTable("wishlist", table => {
    table.increments("id");
    table.text("ASIN").notNullable();
    table.text("title").notNullable();
    table.text("image").notNullable();
    table.text("feature").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("wishlist");
};
