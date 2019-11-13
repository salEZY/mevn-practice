const express = require('express')
const router = express.Router()
const tasks = require('./tasks-controller')
const { requireLogin } = require('../../services/auth-service')

router.post('/task', requireLogin, tasks.create)

router.get('/task', tasks.index)

router.get('/task/:id', tasks.show)

router.put('/task/:id', requireLogin, tasks.update)

router.delete('/task/:id', requireLogin, tasks.remove)

module.exports = router
