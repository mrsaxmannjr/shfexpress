exports.seed = function (knex, Promise) {
  return knex("collection").del().then(() => knex("collection").insert([
    {
      id: 1,
      ASIN: "B06XC8G4TJ",
      title: "Bandai Tamashii Nations S.H. Figuarts Vegeta \"DRAGON Ball Z\" Action Figure",
      image: "https://images-na.ssl-images-amazon.com/images/I/41tqQLhem7L.jpg",
      feature:
      "Re-create dramatic scenes from the anime with incredibly life-like posing",
    },
  ])).then(() => knex.raw("ALTER SEQUENCE collection_id_seq RESTART WITH 2;"));
};
