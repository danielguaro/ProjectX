const express = require('express')
const cors = require('cors')

const PORT = 3306
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Database SDAscension working')
})

require('./Routes/productRoute')(app)
require('./Routes/sellRoute')(app)
require('./Routes/userRoute')(app)

app.listen(process.env.PORT || PORT,, () => {
  console.log(
    `Listening SDAscension Database Service in http://localhost:${PORT}`
  )
})
