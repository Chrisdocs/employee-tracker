const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S24$^DFGS#%GD@fddg3',
    database: 'employees'
    },
    console.log('Connected to employees database')
);
