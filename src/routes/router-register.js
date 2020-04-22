const express = require('express')
const router = express.Router()
const User = require('../database/user-schema')


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
        if(err) return res.send(err)
        return res.json(newUser)
    })
})


module.exports = router