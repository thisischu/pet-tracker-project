const knex = require('./knex');

class Pet {
  // This is just an example query, obviously you need to change it, but it shows you how to use knex.raw and dynamic values
  static async create(pet_name, picture_url, species, is_friendly) {
    try {
      const query = `INSERT INTO pets (pet_name, picture_url, species, is_friendly ) values (?, ?, ?, ? ) returning *`;
      const res = await knex.raw(query, [pet_name, picture_url, species, is_friendly]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const query = 'SELECT * FROM pets'
      const res = await knex.raw(query)

      return res ? res.rows : [];
    } catch {
      console.error(err);
      return null
    }
  }
}




module.exports = Pet;
