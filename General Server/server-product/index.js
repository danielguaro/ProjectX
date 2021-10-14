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

app.get('/product', (req, res) => {
  db.query('SELECT * FROM product', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/add', (req, res) => {
  const productName = req.body.productName
  const description = req.body.description
  const unitValue = req.body.unitValue
  const state = req.body.state
  db.query(
    'INSERT INTO product (productName, description, unitValue, state) VALUES (?, ?, ? ,?)',
    [productName, description, unitValue, state],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Success inserting values!!!')
      }
    }
  )
})

app.put('/update', (req, res) => {
  const id = req.body.id
  const productName = req.body.productName
  const description = req.body.description
  const unitValue = req.body.unitValue
  const state = req.body.state
  db.query(
    'UPDATE product SET productName = ?, description = ?, unitValue = ?, state = ? WHERE id = ?',
    [productName, description, unitValue, state, id],
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
  db.query('DELETE FROM product WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(3010, () => {
  console.log('Your server is runing on port: 3010')
})
