const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const config = require('config')

// Create app
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
app.use(
  jwt({
    secret: config.jwt.secret,
  }).unless({
    path: config.jwt.path,
  })
)

// -- Routes --
const routes = require('./routes')
app.use(routes)

// Error handler
app.use((err, req, res, next) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
})

// -- export app --
module.exports = {
  path: '/api',
  handler: app,
}
