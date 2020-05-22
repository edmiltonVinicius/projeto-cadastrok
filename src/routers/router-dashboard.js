const express = require('express')
const router = express.Router()

const middlleware = require('./middleware-jwt')
const User = require('../database/user-schema')

router.get('/', middlleware, (req, res) => {
    const idUser = req.idUser
    User.find({_id:idUser}, {_id: 0, password: 0}, (err, result) => {
        if(err) console.log(err)
        res.status(200).render('layouts/dashboard', {user: result[0]})
    })
})


module.exports = router