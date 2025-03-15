const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'respect.id',
    port: '3307'
});

module.exports = db; //agar bisa pake db diluar