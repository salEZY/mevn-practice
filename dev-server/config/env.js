const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const setEnviroment = app => {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app)
  } else {
    setProdEnv(app)
  }
}

const setDevEnv = app => {
  process.env.NODE_ENV = 'development'
  app.use(bodyParser.json())
  app.use(morgan('dev'))
  app.use(cors())
}

const setProdEnv = app => {
  app.use(bodyParser.json())
  app.use(express.static(__dirname + '/../dist'))
}

module.exports = {
  setEnviroment
}
