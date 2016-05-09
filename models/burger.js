// *********************************************************************************
// BURGER.JS - THIS FILE CREATES A MODELED OF INDIVIDUAL CHARACTERS IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var connection = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var burger = sequelize.define("burger", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    routeName: {
        type: Sequelize.STRING,
    },
    burgerName: {
        type: Sequelize.STRING,
    },
    devoured: {
        type: Sequelize.BOOLEAN,
    },
    date: {
        type: Sequelize.TIMESTAMP,
    },
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = burger;