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



module.exports = router;