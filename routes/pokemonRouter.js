const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const checkPokemonExists = require('../middlewares/checkPokemonExists');

const router = express.Router();

router.get('/', pokemonController.getAll);
router.get('/:id', checkPokemonExists, pokemonController.getById);

module.exports = router;
