const pokeData = require('../data/data')

const pokemonController = {
  getById: async (req, res) => {
    const { id } = req.params
    const pokemon = pokeData.filter(item => item.id === id)
    res.status(200).send(pokemon)
  },
}

module.exports = pokemonController
