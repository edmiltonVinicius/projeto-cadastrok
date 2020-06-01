const express = require('express')
const router = express.Router()
const User = require('../database/user-schema')


router.post('/', (req, res) => {
    const { userName, userPassword, userEmail} = req.body

    User.findOne({email: userEmail}, (err, arq) => {
        if(err) return res.status(500).send('Error occurred, try again')

        if(arq) return res.status(400).send('Email already Registered')
         
        const newUser = new User({
            name: userName,
            password: userPassword,
            email: userEmail
        })
        newUser.save(err => {
            if(err) return res.status(500).send('Erro on Register')
            return res.status(201).send('user created')
        })
    })
    
})


module.exports = router