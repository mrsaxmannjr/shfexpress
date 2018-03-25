const express = require("express");

const router = express.Router();

const queries = require("../db/queries.js");

router.get("/", (request, response, next) => {
  queries.listWishList().then(wishlist => {
    response.json({ wishlist });
  }).catch(next);
});

// router.get("/:id", (request, response, next) => {
//   queries.read(request.params.id).then(wishlist => {
//     wishlist
//       ? response.json({ wishlist })
//       : response.sendStatus(404);
//   }).catch(next);
// });

router.post("/", (request, response, next) => {
  queries.createWishList(request.body).then(wishlist => {
    response.status(201).json({ wishlist });
  }).catch(next);
});

// router.delete("/:id", (request, response, next) => {
//   queries.delete(request.params.id).then(() => {
//     response.sendStatus(204);
//   }).catch(next);
// });

// router.put("/:id", (request, response, next) => {
//   queries.update(request.params.id, request.body).then(wishlist => {
//     response.json({ wishlist: wishlist[0] });
//   }).catch(next);
// });

module.exports = router;
