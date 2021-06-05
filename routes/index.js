const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S24$^DFGS#%GD@fddg3',
    database: 'employees'
    },
    console.log('Connected to employees database')
);

const departmentsConnect = () => { con.connect (function(err) {
    if (err) throw err;
    con.query("SELECT * FROM department", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log(fields);
    });
});
}

module.exports = departmentsConnect;