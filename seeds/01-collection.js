exports.seed = function (knex, Promise) {
  return knex("collection").del().then(() => knex("collection").insert([
    {
      id: 1,
      ASIN: "B078K3YWN3",
      title: "Bandai Tamashii Nations S.H. Figuarts Son Goku (A Saiyan Raised on Earth) \"Dragon Ball Super\" Action Figure",
      image: "https://images-na.ssl-images-amazon.com/images/I/415DWFHPk7L.jpg",
      feature:
      "This is one action figure Dragon Ball fans will not want to miss! Son Goku, one of the world's post popular characters, joins the S.H.Figurarts line, perfectly replicated down to the Chinese characters on his clothing. Incorporates cutting-edge action figure technology to let you replicate Son Goku's trademark battle poses. Combine it with Frieza (sold separately) to re-create dramatic fight scenes, letting the world of Dragon Ball unfold right on your tabletop. Includes 2 left and 4 right optional hands, plus 3 optional expression parts.",
    },
  ])).then(() => knex.raw("ALTER SEQUENCE collection_id_seq RESTART WITH 2;"));
};
