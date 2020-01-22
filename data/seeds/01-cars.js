
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'JT2MXC87LK24525',
          make: 'Toyota',
          model: 'Camry',
          mileage: 52064,
          transmission: 'hybrid',
          title_status: ''},
        { VIN: 'KBR71587LK24523',
          make: 'Tesla',
          model: 'Roadster',
          mileage: 0,
          transmission: 'electric',
          title_status: 'new'},
        { VIN: 'JHK8LLK7LK24526',
          make: 'Dodge',
          model: 'Dart',
          mileage: 1246887,
          transmission: 'manual',
          title_status: 'missing'}
      ]);
    });
};
