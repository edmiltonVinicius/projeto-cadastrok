const express = require('express')
const router = express.Router()

const middlleware = require('./middleware')

router.get('/', middlleware, (req, res) => {
    res.status(200).render('layouts/dashboard')
})



module.exports = router