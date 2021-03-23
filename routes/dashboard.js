const express = require('express')
const dashboardRouter = express.Router()

const { create_player,
    list_players,
    find_player,
    delete_player } = require('../controllers/playerController')

dashboardRouter.post("/", create_player);
dashboardRouter.get("/", list_players);
dashboardRouter.get("/:id", find_player);
dashboardRouter.delete("/:id", delete_player);

module.exports = dashboardRouter