const taskRoutes = require('./api/task/tasks-routes')
const authRoutes = require('./api/auth/auth-routes')
const regiRoutes = require('./api/register/register-routes')
const userRoutes = require('./api/user/user-routes')

module.exports = {
  registerRoutes: app => {
    app.use('/api/', taskRoutes)
    app.use('/api/', authRoutes)
    app.use('/api/', regiRoutes)
    app.use('/api/', userRoutes)
  }
}
