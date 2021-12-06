const db = require("../models");
const Player = db.Player;

exports.getAllPlayers = (req,res) =>{
    Player.findAll()
    .then(players =>{
        res.send(players);
    })
    .catch(err=>{
        res.send(500).send({message:err.message});
    });
}
