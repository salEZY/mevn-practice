const taskRoutes = require('./api/task/task-routes')
const authRoutes = require('./api/auth/auth-routes')
const regiRoutes = require('./api/register/register-routes')
const userRoutes = require('./api/user/user-routes')

module.exports = {
  registerRoutes: app => {
    app.use('/api', taskRoutes)
    app.use('/auth', authRoutes)
    app.use('/register', regiRoutes)
    app.use('/user', userRoutes)
  }
}
