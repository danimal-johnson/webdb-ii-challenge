const express = require('express');
const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(await db("cars").select());
  }
  catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.json(await db.select("*")
              .from("cars")
              .where("id", req.params.id)
              .first());
  }
  catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = {
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmission: req.body.transmission,
      title_status: req.body.title_status,
    };
    const [id] = await db("cars").insert(payload);
    res.json({ id });
  }
  catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const payload = {
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmission: req.body.transmission,
      title_status: req.body.title_status,
    };
    await db("cars").where("id", req.params.id).update(payload);
    res.json(await db("cars").where("id", req.params.id).first());
  }
  catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await db("cars").where("id", req.params.id).del();
    res.status(204).end();
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;