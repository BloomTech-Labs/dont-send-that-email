exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username', 128).notNullable().unique();
    table.boolean('subscriber');
    table.string('password', 128);
    //We may not need password. But if so, we need it in the db.
    //.notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
