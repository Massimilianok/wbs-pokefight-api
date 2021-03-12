const pokeData = require('../data/data')

const pokemonController = {
  getAll: (req, res) => {
    res.status(200).json(pokeData)
  },
  getById: (req, res) => {
    const { id } = req.params
    const pokemon = pokeData.data.filter(poke => poke.id === parseInt(id))
    res.status(200).json(pokemon)
  },
}

module.exports = pokemonController
