import express from 'express'

// App configs
const app = express()
const port = process.env.PORT || 9000

// Middleware

// DB configs

// ???

// API routes
app.get('/', (req, res) => {
  res.send('OK')
})

// Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
