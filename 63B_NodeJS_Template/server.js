const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//sync database
//db.sequelize.sync();
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');  
  initial();
});


//add some football players to the database (table Players)
const Player = db.player; //loading the model

function initial(){
  
  Player.create({
    name:"Messi",
    image_url:"https://cdn.sofifa.net/players/158/023/22_120.png"
  });

  Player.create({
    name:"Christiano Ronaldo",
    image_url:"https://cdn.sofifa.net/players/020/801/22_120.png"
  });

  Player.create({
    name:"Neymar",
    image_url:"https://cdn.sofifa.net/players/190/871/22_120.png"
  });

  console.log("Added some players");
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});

//define other routes
require('./app/routes/auth.routes')(app);
require('./app/routes/player.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});