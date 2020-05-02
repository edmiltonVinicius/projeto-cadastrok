const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../database/user-schema')

router.get('/', (req, res) => {
    res.render('layouts/login', {})
})

router.post('/', (req, res) => {
    const { loginUser, passUser} = req.body
    
    User.findOne({email: loginUser}, (err, arq) => {
        if(err) return res.json({message: 'Sorry, there was an error, please try again.'})
        if(arq){
            bcrypt.compare(passUser, arq.password, (err, result) => {
                if(err) return res.json({message: 'Sorry, there was an error, please try again.'})
                if(result === true){
                    const token = jwt.sign({_id: arq._id}, process.env.TOKEN_KEY, 
                        {expiresIn: '1d'}, (err, token) => {
                            if(err) return res.json({message: 'Sorry, there was an error, please try again'})
                            return res.json({message: `Hi, ${arq.name}, you is cadastred.`})
                    })
                }else {
                    return res.json({message: 'Invalid username or password!'})
                } 
            })
        }else {
            return res.json({message: 'User not Cadastred!'})            
        }
    })    
      
})

module.exports = router