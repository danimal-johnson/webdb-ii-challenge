const express = require('express');
const server = express();

// --- Middleware ---
// server.use(helmet());
server.use(express.json());


// --- Routes ---
const CarsRouter = require('./routes/cars-router.js');
server.use('/api/cars', CarsRouter);
// const SalesRouter = require ('./sales/sales-router.js');
// server.use('/api/sales', SalesRouter);

// --- Endpoints in this file ---

server.get('/', (req, res) => {
  res.send('<h3>Car Dealership API is up and running</h3>');
});

server.get('/api/sales', (req, res) => {
  res.status(501).end(); // TODO: Not implemented (stretch goal).
});

// --- Handle Errors ---

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  })
})

module.exports = server;