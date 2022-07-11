// require('dotenv').config();
// import 'dotenv/config';
// const path = require('path')
// require('dotenv').config({path: path.resolve(__dirname, '../../../.env')});
// console.log(process.env.MYSQL_USER);
// console.log(path.resolve(__dirname, '../../../.env'));
module.exports = {
  "development": {
    // "username": process.env.MYSQL_USER,
    // "password": process.env.MYSQL_PASSWORD,
    // "database": process.env.MYSQL_DATABASE,
    // "host": process.env.HOSTNAME,
    // "port": process.env.MYSQL_PORT,
    // "dialect": process.env.MYSQL_DIALECT,
    "username": "root",
    "password": "root",
    "database": "exemplo_24_2",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql",
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": process.env.MYSQL_DIALECT,
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": process.env.MYSQL_DIALECT,
  }
}