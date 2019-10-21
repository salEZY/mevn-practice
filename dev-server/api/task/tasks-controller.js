const Moment = require('moment')
const User = require('../../model/User')
const Task = require('../../model/Task')

module.exports = {
  index: (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) {
        return res.status(500).send('Server error!')
      }
      return res.status(200).json({ tasks: tasks })
    }).populate('author', 'username', 'user')
  },
  create: async (req, res) => {
    const id = 10
    try {
      const user = await User.findOne({ _id: id })

      const task = new Task(req.body.task)
      task.author = user._id
      task.dueDate = Moment(task.dueDate)

      await task.save(err => {
        if (err) {
          return res.status(500).send('Server error!')
        }
        return res.status(201).json()
      })
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error!')
    }
  },
  update: async (req, res) => {
    try {
      const id = 15

      const user = await User.findOne({ _id: id })

      if (!user) {
        return res.status(404).send('Server error!')
      }

      const task = new Task(req.body.task)
      task.author = user._id
      task.dueDate = Moment(task.dueDate)

      Task.findByIdAndUpdate({ _id: task._id }, (err, task) => {
        if (err) {
          return res.status(500).send('Server error!')
        }

        return res.status(204).json({ author: task.author })
      })
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error!')
    }
  },
  remove: async (req, res) => {
    const id = 5
    try {
      const task = await Task.findOne({ _id: req.params.id })

      if (!task) {
        return res.status(404).send('Task not found')
      }

      if (task.author._id.toString() !== id) {
        return res
          .status(403)
          .send(`Not allowed to delete another user's task!`)
      }

      Task.deleteOne({ _id: req.params.id }, err => {
        if (err) {
          return res.status(500).send('Server error!')
        }
        return res.status(204).json()
      })
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error!')
    }
  },
  show: async (req, res) => {
    try {
      const task = await Task.findOne({ _id: req.params.id })

      if (!task) {
        return res.status(500).send('Server error!')
      }

      return res.status(200).json({ task: task })
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error!')
    }
  }
}
