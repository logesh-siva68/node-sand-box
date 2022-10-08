const express = require('express')
const helmet = require('helmet')
const logger = require('./utils/logger')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use(helmet())

app.listen(port, () => {
  logger.info('app is uo and running in port:', port)
})
