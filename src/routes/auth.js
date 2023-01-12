const router = require('express').Router()
const { loginHandler } = require('../lib/user')

router.post('/login', loginHandler)
