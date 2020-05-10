const express = require('express')
const router = express.Router()

router.get('*', (req, res, next) => {
    const erro = new Error()
    erro.status = 404 
    next(erro)
})

module.exports = router