exports.up = function (knex, Promise) {
  return knex.schema.createTable("figures", table => {
    table.increments("id");
    table.text("line").notNullable();
    table.text("name").notNullable();
    table.float("price").notNullable();
    table.text("mainImage").notNullable();
    table.specificType("images", "text[]").notNullable();
    table.specificType("description", "text[]").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("figures");
};
