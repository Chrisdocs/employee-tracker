const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S24$^DFGS#%GD@fddg3',
    database: 'employees'
    },
    console.log('Connected to employees database')
);

const rolesConnect = () => { con.connect (function(err) {
    if (err) throw err;
    con.query("SELECT * FROM role", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
};

module.exports = rolesConnect;