const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
  res.send('Post REGISTER - register')
})

module.exports = router
