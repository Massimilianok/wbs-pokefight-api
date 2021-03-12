const express = require('express')
const router = express.Router()

const pokemonController = require('../controllers/pokemonController')

router.get('/:id', pokemonController.getById)

module.exports = router
