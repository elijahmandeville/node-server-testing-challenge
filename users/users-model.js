const db = require("../data/config");

function get() {
  return db("users");
}

function remove(id) {
  return db("users").del().where({ id });
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return { id, ...user };
}

module.exports = {
  get,
  remove,
  add,
};
