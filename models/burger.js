// *********************************************************************************
// BURGER.JS - THIS FILE CREATES A MODE OF BURGERS IN DB
// *********************************************************************************

// Dependencies

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burger", {
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
    }
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;