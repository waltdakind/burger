
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Burger 	= require("../models/burger.js"); // Pulls out the Burger Model

// Routes
// =============================================================
module.exports = function(app){

    // Search for Specific Character (or all characters) then provides JSON
    app.get('/api/:burgers?', function(req, res){

        // If the user provides a specific character in the URL...
        if(req.params.burgerName){

            // Then display the JSON for ONLY that character.
            // (Note how we're using the ORM here to run our searches)
            Burger.findAll({
                where: {
                    routeName: req.params.burgerName
                }
            }).then(function(result){
                res.json(result);
            })
        }

        // Otherwise...
        else{
            // Otherwise display the data for all of the characters. 
            // (Note how we're using Sequelize here to run our searches)
            Burger.findAll({})
                .then(function(result){
                    res.json(result);
                })
        };

    });

    // If a user sends data to add a new character...
    app.post('/api/new', function(req, res){

        // Take the request...
        var Burger = req.body;

        // Create a routeName 
        var routeName = Burger.burgerName.replace(/\s+/g, '').toLowerCase();

        // Then add the character to the database using sequelize
        Burger.create({
            burgerName: Burger.burgerName,
            role: character.role,
            age: character.age,
            forcePoints: character.forcePoints
        });

    })
}