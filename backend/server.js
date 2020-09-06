import express from 'express'
import mongoose from 'mongoose'

import Message from './models/message.js'

// App configs
const port = process.env.PORT || 9000
const app = express()

// Middleware
app.use(express.json())

// DB configs
const dbConnectionUri = 'mongodb+srv://admin:CtzXpokYIIUSPGv3@cluster0.d8r39.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(dbConnectionUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// ???

// API routes
app.get('/', (req, res) => {
  res.send('OK')
})

app.post('/messages', async (req, res) => {
  try {
    const createdMessage = await new Message({
      name: req.body.name,
      content: req.body.content,
      timestamp: req.body.timestamp,
      received: req.body.received,
    }).save()

    res.json(createdMessage)
  } catch (error) {
    res.json(error)
  }
})

// Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
