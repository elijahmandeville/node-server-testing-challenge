exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.text("name").notNull();
    tbl.integer("age").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
