const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

// creates connection to sql database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'peanut01',
    database: 'employees_db'
})

// connects to sql server and sql database
connection.connect(function(err){
    if (err) throw err;
    options();
})