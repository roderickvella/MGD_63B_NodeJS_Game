module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("players", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },        
        image_url: {
            type: Sequelize.STRING
        }
    },{ timestamps: false });
  
    return Player;
};