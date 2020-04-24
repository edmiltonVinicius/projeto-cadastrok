const express = require('express')
const router = express.Router()
const User = require('../database/user-schema')


router.post('/', (req, res) => {
    const { userName, userPassword, userEmail} = req.body

    User.findOne({userName}, (err, arq) => {
        if(err) res.json({message: 'Error occurred, try again'})
        if(arq) res.json({message: 'User already Registered'})
        const newUser = new User({
            name: userName,
            password: userPassword,
            email: userEmail
        })
        newUser.save(err => {
            if(err) res.json({message: 'Erro on Register'})
            res.json({message: 'Register Successfully'})
        })
    })
    
})


module.exports = router