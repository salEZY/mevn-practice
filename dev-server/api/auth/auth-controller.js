const StringUtil = require('./../../utilities/string-util')
const User = require('../../model/User')

module.exports = {
  index: async (req, res) => {
    const validation = this.validateIndex(req.body)
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message })
    }

    await User.findOne(
      { username: req.body.username.toLowerCase() },
      (err, user) => {
        if (err) {
          return res.status(500).json()
        }

        if (!user) {
          return res.status(401).json()
        }

        const passMatch = User.passwordMatches(req.body.password, user.password)
        if (!passMatch) {
          return res.status(401).json()
        }
        return res.status(200).json
      }
    )
  },
  validateIndex: body => {
    let errors = ''
    if (StringUtil.isEmpty(body.username)) {
      errors += 'Username is required.'
    }
    if (StringUtil.isEmpty(body.password)) {
      errors += 'Password is required.'
    }

    return {
      isValid: StringUtil.isEmpty(errors),
      message: errors
    }
  }
}
