const mysql = require('mysql');
const promptUser = require('../index.js');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S24$^DFGS#%GD@fddg3',
    database: 'employees'
    },
    console.log('Connected to employees database')
);

const departmentsConnect = () => { db.connect (function(err) {
    if (err) throw err;
    db.query("SELECT * FROM department", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return promptUser();
        });
    });
};

module.exports = departmentsConnect;