exports.up = function (knex, Promise) {
  return knex.schema.createTable("achievements", table => {
    table.increments("id");
    table.text("achievement").notNullable();
    table.text("image").notNullable();
    table.text("detail").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("achievements");
};
