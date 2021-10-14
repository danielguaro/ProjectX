const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const port = 3011

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Ksbl2002.',
  database: 'sdascension',
})

app.get('/sells', (req, res) => {
  db.query('SELECT * FROM sells', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/add', (req, res) => {
  const totalValue = req.body.totalValue
  const idProduct = req.body.idProduct
  const quantity = req.body.quantity
  const unitValue = req.body.unitValue
  const sellDate = req.body.sellDate
  const idClient = req.body.idClient
  const clientName = req.body.clientName
  const seller = req.body.seller
  db.query(
    'INSERT INTO sells (totalValue, idProduct, quantity, unitValue, sellDate, idClient, clientName, seller) VALUES (?, ?, ? ,? ,? ,? ,? ,?)',
    [
      totalValue,
      idProduct,
      quantity,
      unitValue,
      sellDate,
      idClient,
      clientName,
      seller,
    ],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Success inserting values!!!')
      }
    }
  )
})

app.put('/modify', (req, res) => {
  const id = req.body.id
  const totalValue = req.body.totalValue
  const idProduct = req.body.idProduct
  const quantity = req.body.quantity
  const unitValue = req.body.unitValue
  const sellDate = req.body.sellDate
  const idClient = req.body.idClient
  const clientName = req.body.clientName
  const seller = req.body.seller
  db.query(
    'UPDATE sells SET totalValue=?, idProduct=?, quantity=?,unitValue=?,sellDate=?,idClient=?,clientName=?,seller=? WHERE id = ?;',
    [
      totalValue,
      idProduct,
      quantity,
      unitValue,
      sellDate,
      idClient,
      clientName,
      seller,
      id,
    ],
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
  db.query('DELETE FROM sells WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(port, () => {
  console.log(`Server Running in port:${port}`)
})
