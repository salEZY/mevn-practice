module.exports = {
  index: (req, res) => {
    return res.status(200).json()
  },
  create: (req, res) => {
    return res.status(201).json()
  },
  update: (req, res) => {
    return res.status(204).json()
  },
  remove: (req, res) => {
    return res.status(204).json()
  },
  show: (req, res) => {
    // show single task
    return res.status(200).json()
  }
}
