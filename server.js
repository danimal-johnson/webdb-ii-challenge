const express = require('express');
const knex = require('knex');

const knexConfiguration = {
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3',
  },
}
const db = knex(knexConfiguration);

const CarsRouter = require('./routes/cars-router.js');
// const SalesRouter = require ('./sales/sales-router.js');

// const router = express.Router(); TODO: Put this in individual route files

server.get('/', (req, res) => {
  res.send('<h3>Car Dealership API is up and running</h3>');
});

server.get('/api/cars', req, res => {
  res.status(501).end(); // TODO: Not implemented (stretch goal).
})