const jwt = require('jsonwebtoken')

module.exports = {
  generateJWT: user => {
    const tokenData = {
      name: user.name,
      id: user._id
    }
    return jwt.sign({ user: tokenData }, process.env.SECRET)
  }
}
