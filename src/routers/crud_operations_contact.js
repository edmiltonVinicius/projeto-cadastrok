const express = require('express')
const middlleware = require('./middleware_jwt')
const User = require('../database/user_schema')
const router = express.Router()

router.patch('/create', middlleware, (req, res) => {
    const idUser = req.idUser
    const { nameContact, numberContact, imageContact, sexoContact, emailContact } = req.body
    
    const contact = { nameContact, numberContact, imageContact, sexoContact, emailContact }
    
    User.findByIdAndUpdate(idUser, {$push: {contacts: contact }}, {new: true}, (err, arq) => {
        if(err) return res.status(500).send('Sorry, there was an error, please try again.')
   
        return res.status(200).json(arq)            
    })
})

module.exports = router