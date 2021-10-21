const express = require('express')
const cors = require('cors')

const port = 3003
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Database SDAscension working')
})

require('./Routes/productRoute')(app)
require('./Routes/sellRoute')(app)
require('./Routes/userRoute')(app)

app.listen(port, () => {
  console.log(
    `Listening SDAscension Database Service in http://localhost:${port}`
  )
})
