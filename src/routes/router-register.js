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
        if(arq) return res.json(arq)
    })
    
    const newUser = new User({
        name: userName,
        password: userPassword,
        email: userEmail
    })
    newUser.save(err => {
        if(err) return res.send('Ocorreu algum erro, por favor tente novamente!')
        res.send('Registrado com sucesso!')
    })
})


module.exports = router