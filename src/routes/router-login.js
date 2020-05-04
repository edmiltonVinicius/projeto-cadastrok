const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../database/user-schema')

router.get('/', (req, res) => {
    res.status(200).render('layouts/login')
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
                            return res.status(200).json({message: 'valid data', token, code: 200})
                    })
                }else {
                    return res.json({message: 'Invalid username or password!', code: 401})
                } 
            })
        }else {
            return res.json({message: 'Invalid username or password!', code: 401})            
        }
    })    
      
})

module.exports = router