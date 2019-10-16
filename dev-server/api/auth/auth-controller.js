const StringUtil = require('./../../utilities/string-util')

module.exports = {
  index: (req, res) => {
    const validation = this.validateIndex(req.body)
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message })
    }

    const user = {
      username: req.body.username.toLowerCase(),
      password: req.body.password
    }
    console.log(user)
    return res.status(201).json()
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
