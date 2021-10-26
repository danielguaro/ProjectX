const sql = require('../Models/db')

module.exports = (app) => {
  app.get('/user', (req, res) => {
    sql.query('SELECT * FROM users', (err, result) => {
      console.log(res)
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })
  app.post('/user', (req, res) => {
    // Realizar pedidos al Frontend
    const name = req.body.name
    const rol = req.body.rol
    const userState = req.body.userState
    sql.query(
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
  app.put('/user', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const rol = req.body.rol
    const userState = req.body.userState
    sql.query(
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
  app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    sql.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })
}
