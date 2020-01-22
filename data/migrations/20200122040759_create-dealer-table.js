
exports.up = function(knex) {
  // The change we want to make to our schema
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl.string('VIN', 255).unique();
    tbl.string('make', 128);
    tbl.string('model', 128);
    tbl.integer('mileage').nullable();
    tbl.string('transmission', 64).nullable();
    tbl.string('title_status', 64).nullable();
  })
};

exports.down = function(knex) {
  // How to undo that change
  return knex.schema.dropTableIfExists('cars');
};
