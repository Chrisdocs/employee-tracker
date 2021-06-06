const mysql = require('mysql');

function connect () { 
    let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S24$^DFGS#%GD@fddg3',
    database: 'employees'
    },
    console.log('Connected to employees database')
)}

module.exports = connect;