const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

// username: { type: Schema.Types.ObjectId, ref: 'User', required: true },
const playerSchema = new Schema({
    username: { type: String, min: 2, max: 50, required: true },
    player_name: { type: String, min: 2, max: 50, required: true },
    total_matches: { type: Number, def: 0 },
    won_matches: { type: Number, def: 0 },
    lost_matches: { type: Number, def: 0 }
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player;