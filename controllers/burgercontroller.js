// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Burger = require("../models/burger.js"); // Pulls out the burger Model
var path = require('path');
// Routes
// =============================================================
module.exports = function (app) {

    // Search for Specific Character (or all characters) then provides JSON
    app.get('/api/:burger?', function (req, res) {

        // If the user provides a specific character in the URL...
        if (req.params.devouredBurgers) {

            // Then display the JSON for ONLY that character.
            // (Note how we're using the ORM here to run our searches)
            burgerName.findAll({
                where: {
                    routeName: req.params.devouredeBurgers
                }
            }).then(function (result) {
                res.json(result);
            })
        }

        // Otherwise...
        else {
            // Otherwise display the data for all of the characters.
            // (Note how we're using Sequelize here to run our searches)
            Burger.findAll({})
                .then(function (result) {
                    res.json(result);
                })
        }
    });

    // If a user sends data to add a new burger...
    app.post('/api/new', function (req, res) {

        // Take the request...
        var burger = req.body;

        // Create a routeName
        var routeName = burger.name.replace(/\s+/g, '').toLowerCase();

        // Then add the burger to the database using sequelize
        newBurger.create({
            burgerName: burger.name,
            devoured: FALSE,
            date: CURRENT_TIMESTAMP
        });

    })
};

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
    //
    // app.get('/add', function(req, res){
    //     res.sendFile(path.join(__dirname + '/../public/add.html'));
    // });
    //
    // app.get('/all', function(req, res){
    //     res.sendFile(path.join(__dirname + '/../public/all.html'));
    // });

};