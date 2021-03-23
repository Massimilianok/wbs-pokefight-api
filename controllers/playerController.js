const Player = require('../models/playerModel')


exports.list_players = async (req, res) => {
try {
        const allPlayers = await Player.find()
        res.json(allPlayers)
} catch (e) {
        res.status(500).json(e.message)
}
}

exports.create_player = async (req, res) => {
        const { username, total_matches, won_matches, lost_matches, player_name } = req.body
        Player.create({ username, player_name, total_matches, won_matches, lost_matches })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err.message))
}

exports.find_player = async (req, res) => {
        const { id } = req.params
try {
const targetPlayer = await Player.findById(id)
if (!targetPlayer) return res.status(404).send('No such player')
res.json(targetPlayer)
} catch (e) {
res.status(500).send(e.message)
}
}

exports.delete_player = async (req, res) => {
        const { id } = req.params
        try {
        const deletedPlayer = await Player.findByIdAndDelete(id)
        if (!deletedPlayer) res.status(404).send('No such player')
        res.json(deletedPlayer)
        } catch (e) {
        res.status(500).json(e.message)
        }
}