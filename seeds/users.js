exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { name: "Bob", age: 50 },
        { name: "Jim", age: 26 },
        { name: "Tom", age: 75 },
      ]);
    });
};
