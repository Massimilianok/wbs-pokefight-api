var express = require('express');
var router = express.Router();

const data = require('../data/data')


// Delete one 
router.delete('/', (req, res, next) => {
  const englishName = req.body.name
  const newListofPokemon = data.module.filter((one) => one.name.english !== englishName)
  res.status(201).json(newListofPokemon)
}) 

// Create one
router.post('/', (req, res, next) => {
  const { name, type, base } = req.body;
  const newPokemon = {
    id: data.module.length + 1,
    name,
    type,
    base
  }
  data.module.push(newPokemon)
  res.status(201).json(newPokemon)
});


// GET all pokemon 
router.get('/', function(req, res, next) {
  res.status(201).json(data.module)
});


module.exports = router;
