const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).render('layouts/dashboard')
})


module.exports = router