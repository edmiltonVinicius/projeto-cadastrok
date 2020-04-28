const express = require('express')
const router = express.Router()
const User = require('../database/user-schema')


router.post('/', (req, res) => {
    const { userName, userPassword, userEmail} = req.body

    User.findOne({email: userEmail}, (err, arq) => {
        if(err) return res.json({message: 'Error occurred, try again'})

        if(arq) return res.json({message: 'Email already Registered'})
         
        const newUser = new User({
            name: userName,
            password: userPassword,
            email: userEmail
        })
        newUser.save(err => {
            if(err) return res.json({message: 'Erro on Register'})
            res.json({message: 'User created'})
        })
    })
    
})


module.exports = router