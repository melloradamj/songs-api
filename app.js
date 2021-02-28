const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

// const songs = require('./songs')
const songs = require('./songs')

app.use('/songs', songs)

app.get('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = app;