const db = require("./index");

module.exports = {
  getAll() {
    return db("figures");
  },
  list() {
    return db("collection").select();
  },
  // read(id) {
  //   return db("collection").select().where("id", id).first();
  // },
  create(collection) {
    return db("collection")
      .insert(collection)
      .returning("*")
      .then(record => record[0]);
  },
  // update(id, collection) {
  //   return db("collection")
  //     .update(collection)
  //     .where("id", id)
  //     .returning("*")
  //     .then(record => record[0]);
  // },
  // delete(id) {
  //   return db("collection").delete().where("id", id);
  // },
};
