const StringUtil = require('./../../utilities/string-util')
const User = require('../../model/User')

const validateIndex = body => {
  let errors = ''
  if (StringUtil.isEmpty(body.name)) {
    errors += 'Name is required.'
  }
  if (StringUtil.isEmpty(body.password)) {
    errors += 'Password is required.'
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  }
}

module.exports = {
  index: async (req, res) => {
    const validation = validateIndex(req.body)
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message })
    }

    const user = new User({
      name: req.body.name,
      password: req.body.password
    })

    try {
      await user.save(err => {
        if (err) {
          if (err.code === 11000) {
            return res
              .status(403)
              .json({ message: 'Username is already taken!' })
          }
          return res.status(500).json()
        }
        console.log(user.name)
        return res.status(201).json()
      })
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error!')
    }
  }
}
