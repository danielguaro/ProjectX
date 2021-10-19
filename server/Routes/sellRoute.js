const sql = require('../Models/db')

module.exports = (app) => {
  app.get('/sell', (req, res) => {
    sql.query('SELECT * FROM sells', (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })
  app.post('/sell', (req, res) => {
    const totalValue = req.body.totalValue
    const idProduct = req.body.idProduct
    const quantity = req.body.quantity
    const unitValue = req.body.unitValue
    const sellDate = req.body.sellDate
    const idClient = req.body.idClient
    const clientName = req.body.clientName
    const seller = req.body.seller
    sql.query(
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

  app.put('/sell', (req, res) => {
    const id = req.body.id
    const totalValue = req.body.totalValue
    const idProduct = req.body.idProduct
    const quantity = req.body.quantity
    const unitValue = req.body.unitValue
    const sellDate = req.body.sellDate
    const idClient = req.body.idClient
    const clientName = req.body.clientName
    const seller = req.body.seller
    sql.query(
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

  app.delete('/sell/:id', (req, res) => {
    const id = req.params.id
    sql.query('DELETE FROM sells WHERE id = ?', id, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })
}
