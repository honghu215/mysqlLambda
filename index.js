var mysql = require('mysql');
var config = require('./config.json');
var pool = mysql.createPool({
    host    : config.host,
    user    : config.user,
    password: config.password,
    database: config.database
});

exports.handler = (event, context, callback) => {
    
    console.log(pool);

    context.callbackWaitsForEmptyEventLoop = false;
    pool.getConnection(function(err, connection) {
        if(err) {
            callback(err, null);
        }else {
            connection.query('select * from user', function(error, results, fields) {
                connection.release();
        
                if(error) {
                    console.log('Connection failed.');
                    callback(error);
                } else {
                    console.log(results);
                    callback(null, results);
                }
            });
        }
    });
};