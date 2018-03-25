const express = require("express");

const router = express.Router();

const queries = require("../db/queries.js");

router.get("/", (request, response, next) => {
  queries.list().then(collection => {
    response.json({ collection });
  }).catch(next);
});

// router.get("/:id", (request, response, next) => {
//   queries.read(request.params.id).then(collection => {
//     collection
//       ? response.json({ collection })
//       : response.sendStatus(404);
//   }).catch(next);
// });

router.post("/", (request, response, next) => {
  queries.create(request.body).then(collection => {
    response.status(201).json({ collection });
  }).catch(next);
});

// router.delete("/:id", (request, response, next) => {
//   queries.delete(request.params.id).then(() => {
//     response.sendStatus(204);
//   }).catch(next);
// });

// router.put("/:id", (request, response, next) => {
//   queries.update(request.params.id, request.body).then(collection => {
//     response.json({ collection: collection[0] });
//   }).catch(next);
// });

module.exports = router;
