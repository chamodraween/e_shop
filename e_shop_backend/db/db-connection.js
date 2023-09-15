const mysql = require('mysql2');

let connection;

function getConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Chamod@217',
            database: 'store',
          });

    }
    return connection;
}
module.exports = getConnection();