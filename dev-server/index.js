const express = require('express')
const app = express()
const port = 3000
const { registerRoutes } = require('./routes')
const { setEnviroment } = require('./config/env')
const { connectDB } = require('./config/db')

setEnviroment(app)
connectDB()
registerRoutes(app)

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('running dev mode')
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist/' })
  }
})

app.listen(port, () =>
  console.log(`Mevn app listening on port ${port} in ${process.env.NODE_ENV}!`)
)
