const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Ksbl2002.',
  database: 'sdascension',
})

// Para obtener
app.get('/user', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    console.log(res)
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

//Para insertar usuario
app.post('/update', (req, res) => {
  // Realizar pedidos al Frontend
  const name = req.body.name
  const rol = req.body.rol
  const userState = req.body.userState
  db.query(
    // Realizar un requerimiento
    'INSERT INTO users (name, rol, userState) VALUES (?,?,?)', //Los simbolos (?,?) representa que se haran cambios en el frontend
    [name, rol, userState],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('value inserted')
      }
    }
  )
})

app.put('/modify', (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const rol = req.body.rol
  const userState = req.body.userState
  db.query(
    'UPDATE users SET name=?, rol=?, userState= ? WHERE id = ?;',
    [name, rol, userState, id],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(3012, () => {
  console.log('Your server is running')
})
