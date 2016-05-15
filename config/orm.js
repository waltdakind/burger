var connection = require('./connection.js');

var orm = {
    allBurgers: function (table,callback) {
        var s = 'SELECT * FROM '+ table + 'ORDER BY date desc;';
        connection.query(s, function (err, result) {

            console.log(result);
        });
    },
    newBurger: function (name, callback) {
        var q = 'INSERT INTO burgers (burgerName, devoured) VALUES (?, FALSE)';
        connection.query(newBurger, [burger_name], function (err, result) {

            console.log(result);
        });
    },
    devouredBurgers: function (table, callback) {
        var s = 'SELECT * FROM '+ table + 'WHERE devoured = TRUE;';
        connection.query(s, function (err, result) {

            console.log(result);
        });
    },
    devourBurger: function (id,callback) {
        var q = 'UPDATE burgers SET devoured = FALSE WHERE id = ?';
        connection.query(q,[id],function(err,results){
            callback(results);
        });
    }
};

module.exports = orm;