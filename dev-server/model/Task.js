const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
    unique: true
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

module.exports = Task = mongoose.model('task', TaskSchema)
