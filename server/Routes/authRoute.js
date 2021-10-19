const db = require('../Models/db')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

module.exports = (app) => {
  app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err)
      }
      db.query(
        'INSERT INTO auth (username, password) VALUES (?,?)',
        [username, hash],
        (err, result) => {
          console.log(err)
        }
      )
    })
  })

  app.get('/login', (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user })
    } else {
      res.send({ loggedIn: false })
    }
  })

  const verifyJWT = (req, res, next) => {
    const token = req.headers['x-acces-token']

    if (!token) {
      res.send('Yo, we need a token, please give it to us next time!')
    } else {
      jwt.verify(token, 'jwtSecret', (err, decoded) => {
        if (err) {
          res.json({ auth: false, message: 'You failed to authenticate' })
        } else {
          req.userId = decoded.id
          next()
        }
      })
    }
  }

  app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send('Yo, you are authenticated, Congrats!!')
  })

  app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
      'SELECT * FROM auth WHERE username = ?;',
      username,
      (err, result) => {
        if (err) {
          res.send({ err: err })
        }

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              const id = result[0].id
              const token = jwt.sign({ id }, 'jwtSecret', {
                expiresIn: 300,
              })
              req.session.user = result

              res.json({ auth: true, token: token, result: result })
            } else {
              res.json({
                auth: false,
                message: 'Wrong username/password combination',
              })
            }
          })
        } else {
          res.json({ auth: false, message: 'No user exist' })
        }
      }
    )
  })
}
