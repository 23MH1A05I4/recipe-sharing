const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('recipe_db', 'root', 'madhu@2006', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    imagePath: DataTypes.STRING
}, {
    tableName: 'recipes'
});

sequelize.sync()  
    .then(() => console.log("Table created correctly"))
    .catch(err => console.error(err));

module.exports = { Recipe };