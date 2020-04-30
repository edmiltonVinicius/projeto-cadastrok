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
        if(err) return res.json({erroFind: 'erro no query'})
        if(arq){
            bcrypt.compare(passUser, arq.password, (err, result) => {
                if(err) return res.json({erroBcrpt: 'err on encrypted password'})
                if(result === true){
                    const token = jwt.sign({_id: arq._id}, process.env.TOKEN_KEY, 
                        {expiresIn: '1d'}, (err, token) => {
                            if(err) return res.json({erroJwt: 'erro no Jwt'})
                            return res.json({token: token, status: result})
                    })
                }else {
                    return res.json({erroCompare: 'Senha inválida!'})
                } 
            })
        }else {
            return res.json({erro: 'usuario ou senha inválidos!'})            
        }
    })    
      
})

module.exports = router