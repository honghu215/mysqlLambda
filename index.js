var mysql = require('mysql');
var pool = mysql.createPool({
    host    : process.env.host,
    user    : process.env.user,
    password: process.env.password,
    database: process.env.database
});

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    pool.getConnection(function(err, connection) {
        if(err) {
            callback(err, null);
        }else {
            connection.query('select * from user', function(error, results, fields) {
                connection.release();
                if(error) {
                    //console.log('Connection failed.');
                    callback(error);
                } else {
                    console.log(results);
                    callback(null, results);
                }
            });
        }
    });
};

