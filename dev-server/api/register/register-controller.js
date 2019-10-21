const StringUtil = require('./../../utilities/string-util')
const User = require('../../model/User')

module.exports = {
  index: (req, res) => {
    const validation = this.validateIndex(req.body)
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message })
    }

    const user = new User({
      name: req.body.username,
      password: req.body.password
    })

    user.save(err => {
      if (err) {
        if (err.code === 11000) {
          return res.status(403).json({ message: 'Username is already taken!' })
        }
        return res.status(500).json()
      }

      return res.status(201).json({ message: `${user.name} is registered!` })
    })
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
