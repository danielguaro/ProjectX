const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const port = 3002
const app = express()
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    key: 'userId',
    secret: 'login',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
)

app.get('/', (req, res) => {
  res.send('Database SDAscension working')
})

require('./Routes/authRoute')(app)
require('./Routes/productRoute')(app)
require('./Routes/sellRoute')(app)
require('./Routes/userRoute')(app)

app.listen(port, () => {
  console.log(
    `Listening SDAscension Database Service in http://localhost:${port}`
  )
})
