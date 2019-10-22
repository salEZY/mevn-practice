const StringUtil = require('./../../utilities/string-util')
const User = require('../../model/User')
const { generateJWT } = require('../../services/auth-service')

const validateIndex = body => {
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

module.exports = {
  index: async (req, res) => {
    const validation = validateIndex(req.body)
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message })
    }

    try {
      const user = await User.findOne({
        name: req.body.name
      })
      console.log(user)
      // if (!user) {
      //   return res.status(401).json()
      // }

      const passMatch = User.passwordMatches(req.body.password, user.password)
      if (!passMatch) {
        return res.status(401).json()
      }
      const token = generateJWT(user)
      return res.status(200).json({ token: token })
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error!')
    }
  }
}
