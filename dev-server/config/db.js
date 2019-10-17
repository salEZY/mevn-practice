const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
      if (error) {
        console.log('Unable to connect to the database')
        throw error
      } else {
        console.log('Connected to Mevn database')
      }
    }
  )
}

module.exports = {
  connectDB
}
