var mysql = require('mysql');
var connection = mysql.createPool({


    host: 'localhost',
    user: 'root',
    password: '#Ngorui98',
    database: 'beststandard'
})
module.exports = connection;