var mysql = require('mysql');

//cloud based DB through Amazon AWS
// var connection = mysql.createConnection({
//     port: 3306,
//     host: 'rcbexperimental.cpondcnopjzo.us-east-1.rds.amazonaws.com',
//     user: 'tempuser',
//     password: 'tempPassword1234!',
//     database: 'burgers_db'
// });
//localhost DB
var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'ot3bb31ozpuh5xe3',
    password: 'd0kaqghj0ero8swn',
    database: 'tknix3ip4h0f9cdv'
});



connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;