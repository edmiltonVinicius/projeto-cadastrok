const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../database/user-schema')


router.get('/', (req, res) => {
    res.render('spa/user-register', {})
})

router.post('/', (req, res) => {
    const { userName, userPassword, userEmail} = req.body
    User.findOne({userName}, (err, arq) => {
        if(err) return res.json(err)
    })
    
    const newUser = new User({
        name: userName,
        password: userPassword,
        email: userEmail
    })
    newUser.save(err => {
        if(err) res.json(err)
        res.send('Registrado com sucesso!')
    })
})


module.exports = router