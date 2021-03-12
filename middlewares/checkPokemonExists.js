const pokeData = require('../data/data');

const checkPokemonExists = (req, res, next) => {
  const { id } = req.params;
  const pokemon = pokeData.data.find((poke) => poke.id === parseInt(id));
  if (pokemon) {
    next();
  } else {
    res.status(500).json('Pokemon does not exists!');
  }
};

module.exports = checkPokemonExists;
