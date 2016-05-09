var connection = require('./connection.js');

var orm = {
    selectByBurger: function() {
        var burgersToEat = 'SELECT burger_name FROM burgers ORDER BY date desc;';
        connection.query(s, function(err, result) {

            console.log(result);
        });
    },
    findByName: function(burger_name) {
        var queryString = 'SELECT * FROM burgers WHERE burger_name = ?';
        connection.query(queryString, [burger_name], function(err, result) {

            console.log(result);
        });
    },
    devouredBurgers: function() {
        var eaten = 'SELECT * FROM burgers WHERE devoured = TRUE';

        connection.query(s, function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;