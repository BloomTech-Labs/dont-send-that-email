const faker = require('faker')

const createFakeUsers = () => {
  username: faker.name.username()



}
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      //
      return knex('users').insert([


      ]);
    });
};
