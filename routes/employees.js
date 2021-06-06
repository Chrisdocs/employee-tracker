const mysql = require('mysql');

const employeesConnect = () => { db.connect (function(err) {
    if (err) throw err;
    db.query("SELECT * FROM employee", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
};

module.exports = db;