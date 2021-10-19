const mysql = require('mysql')
const configDB = require('../Configuration/dbConfig')

const connection = mysql.createConnection({
  user: configDB.USER,
  host: configDB.HOST,
  password: configDB.PASSWORD,
  database: configDB.DATABASE,
})

connection.connect((error) => {
  if (error) throw error
  console.log(`Succesful Connection to the Database`)
})

module.exports = connection
