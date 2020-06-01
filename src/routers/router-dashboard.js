const express = require('express')
const router = express.Router()

const middlleware = require('./middleware-jwt')
const User = require('../database/user-schema')

router.get('/', middlleware, (req, res) => {
    const idUser = req.idUser
    User.findById(idUser, {_id: 0, password:0}, (err, adventure) => {
        if(err) return res.status(500).send('Sorry, there was an error, please try again.')
        res.status(200).render('layouts/dashboard', {user: adventure})
    } )
})


module.exports = router