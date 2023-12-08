/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pets', (table) => {
        table.increments(); // this is the id
        table.string('pet_name'); // text
        table.string('picture_url'); // text
        table.string('species'); // text
        table.boolean('is_friendly').defaultTo(false); // boolean, optional default
    
        /* add a foreign key that links to a hypothetical users table */
        // You must first have created a users table with a key called id!
        // table.integer('user_id').index().references('id').inTable('users');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pets');
};
