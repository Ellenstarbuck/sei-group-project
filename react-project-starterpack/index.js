const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')
const router = require('./config/router')

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
  if (err) return console.log(err)
  console.log('Mongo is connected')
})

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.listen(port, () => console.log(`Express is listening on ${port}`))