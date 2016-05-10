// Dependencies
var Sequelize = require("sequelize");
var mysql = require('mysql');


var source = {
    jawsDB: {
        port: 3306,
        host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'ot3bb31ozpuh5xe3',
        password: 'd0kaqghj0ero8swn',
        database: 'tknix3ip4h0f9cdv'
    }
};

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

});

module.exports = sequelize;
