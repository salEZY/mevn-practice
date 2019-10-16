const express = require('express')
const router = express.Router()
const tasks = require('./tasks-controller')

router.post('/task', tasks.create)

router.get('/task', tasks.index)

router.get('/task/:id', tasks.show)

router.put('/task/:id', tasks.update)

router.delete('/task/:id', tasks.remove)

module.exports = router
