const sql = require('../Models/db')

module.exports = (app) => {
  app.get('/product', (req, res) => {
    sql.query('SELECT * FROM product', (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })

  app.post('/product', (req, res) => {
    const productName = req.body.productName
    const description = req.body.description
    const unitValue = req.body.unitValue
    const state = req.body.state
    sql.query(
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
  app.put('/product', (req, res) => {
    const id = req.body.id
    const productName = req.body.productName
    const description = req.body.description
    const unitValue = req.body.unitValue
    const state = req.body.state
    sql.query(
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

  app.delete('/product/:id', (req, res) => {
    const id = req.params.id
    sql.query('DELETE FROM product WHERE id = ?', id, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })
}
