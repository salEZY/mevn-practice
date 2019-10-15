const express = require('express')
const router = express.Router()

router.post('/task', (req, res) => {
  res.send('Post task')
})

router.get('/task', (req, res) => {
  res.send('Get tasks')
})

router.get('/task/:id', (req, res) => {
  res.send('get 1 task')
})

router.put('/task/:id', (req, res) => {
  res.send('PUT task')
})

router.delete('/task/:id', (req, res) => {
  res.send('DELETE task')
})

module.exports = router
