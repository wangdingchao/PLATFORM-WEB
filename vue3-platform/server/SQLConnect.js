const mysql = require("mysql");
const MySqlObj = {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "platform"
}

const pool = mysql.createPool(MySqlObj);

function SQLConnect(sql, arr, callback) {
    pool.getConnection((err, connection) =>{
        if (err) {
            console.log(err);
            return;
        }
        connection.query(sql, arr, (err, result) =>{
            connection.release();
            if (err) {
                console.log(err);
                return;
            }
            callback(result)
        })
    })
}

module.exports = SQLConnect