import express from 'express'
import mongoose from 'mongoose'
import Pusher from 'pusher';

import Message from './models/message.js'

// App configs
const port = process.env.PORT || 9000
const app = express()

const pusher = new Pusher({
  appId: '1067707',
  key: 'cd1a4e0cb02a66800705',
  secret: 'a9be03ec054517a5a755',
  cluster: 'ap1',
  encrypted: true
});

// Middleware
app.use(express.json())

// DB configs
const dbConnectionUri = 'mongodb+srv://admin:CtzXpokYIIUSPGv3@cluster0.d8r39.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(dbConnectionUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
  Message.watch().on('change', (change) => {
    console.log('change :>> ', change);

    if ('insert' === change.operationType) {
      const document = change.fullDocument

      pusher.trigger('messages', 'insert', {
        id: document._id,
        name: document.name,
        content: document.content,
        timestamp: document.timestamp,
        received: document.received,
      })
    }
  })
})

// ???

// API routes
app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find()
    res.json(messages)
  } catch (error) {
    res.json(error)
  }
})

app.post('/messages', async (req, res) => {
  try {
    const createdMessage = await new Message({
      name: req.body.name,
      content: req.body.content,
      timestamp: req.body.timestamp,
      received: req.body.received,
    }).save()

    res.status(201).json(createdMessage)
  } catch (error) {
    res.json(error)
  }
})

// Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
