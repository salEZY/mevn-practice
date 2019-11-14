const express = require('express')
const app = express()
const port = 3000
const { registerRoutes } = require('./routes')
const { setEnviroment } = require('./config/env')
const { connectDB } = require('./config/db')

setEnviroment(app)
connectDB()
app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('running dev mode')
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist/' })
  }
})
registerRoutes(app)



app.listen(port, () =>
  console.log(`Mevn app listening on port ${port} in ${process.env.NODE_ENV}!`)
)
