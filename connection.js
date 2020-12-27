const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learn_node'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connection Successfully !');
});

module.exports = conn;