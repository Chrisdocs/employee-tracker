const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S24$^DFGS#%GD@fddg3',
    database: 'employees'
    },
    console.log('Connected to employees database')
);

const employeesConnect = () => { db.connect (function(err) {
    if (err) throw err;
    db.query("SELECT * FROM employee", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
};

module.exports = employeesConnect;