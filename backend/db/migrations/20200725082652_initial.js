const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

exports.up = async (knex) => {
  await Knex.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.text('email').notNullable().unique();
  });
};

exports.down = async (knex) => {

};
