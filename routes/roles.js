const mysql = require('mysql');

const rolesConnect = () => { db.connect (function(err) {
    if (err) throw err;
    db.query("SELECT * FROM role", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
};

module.exports = rolesConnect;