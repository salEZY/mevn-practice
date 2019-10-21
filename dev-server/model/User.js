const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
UserSchema.set('timestamps', true)
UserSchema.pre('save', function(next) {
  const unsafePassword = this.password
  this.password = bcrypt.hashSync(unsafePassword)
  next()
})

module.exports = User = mongoose.model('user', UserSchema)
