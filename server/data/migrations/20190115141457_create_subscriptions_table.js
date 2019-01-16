
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subscriptions', table => {
    table.increments();
    table.string('transaction_id').notNullable();
    table.timestamp('date_created').defaultTo(knex.fn.now()).notNullable();
    table.integer('duration').defaultTo(30);
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('subscriptions');
};
