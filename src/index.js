const express = require('express')
const helmet = require('helmet')
const logger = require('./utils/logger')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use(helmet())

app.use('/api/auth', require('./routes/auth'))

app.use('/api/user', require('./routes/user'))

app.listen(port, () => {
    logger.info('app is uo and running in port:', port)
})
