const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => {
  res.send('GET user - get all users')
})

module.exports = router
