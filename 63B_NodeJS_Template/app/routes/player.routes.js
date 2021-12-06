const controller = require("../controllers/player.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    //from unity call the following link and return all the football players
    app.get("/api/player/get-all-football-players",controller.getAllPlayers);
 };