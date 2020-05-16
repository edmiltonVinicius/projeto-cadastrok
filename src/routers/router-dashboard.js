const express = require('express')
const router = express.Router()

const middlleware = require('./middleware-jwt')

router.get('/', middlleware, (req, res) => {
    res.status(200).render('layouts/dashboard')
})


module.exports = router