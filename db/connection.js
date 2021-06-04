const mysql = require('mysql2');

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'cweflow7',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;