const jwt = require('jsonwebtoken')

module.exports = {
  generateJWT: user => {
    const tokenData = {
      name: user.name,
      id: user._id
    }
    return jwt.sign({ user: tokenData }, process.env.SECRET)
  },
  decodeToken: req => {
    const token = req.headers.authorization || req.headers['authorization']

    if (!token) {
      return null
    }
    try {
      jwt.verify(token, process.env.SECRET)
    } catch (err) {
      return null
    }
  },
  requireLogin: (req, res, next) => {
    const token = this.decodeToken(req)

    if (!token) {
      return res.status(401).json({ message: 'You have to be logged in!' })
    }
    next()
  }
}
