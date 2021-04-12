const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../database/user_schema')
const transporter = require('../configs/nodemailer_transporter')
const { emailResetMail } = require('../email/mail_options_resgister_user')
const middllewareResetPassword = require('./middleware_reset_password')
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
    res.status(200).render('layouts/reset_password')
})

router.patch('/', middllewareResetPassword, async (req, res) => {
    const { newPassword } = req.body
    const token = req.tokenResetPassowrd
    const saltRounds = 10
    const resultHasPassowrd = await bcrypt.hash(newPassword, saltRounds)
0
    User.findByIdAndUpdate({_id: token}, {password: resultHasPassowrd}, (err, result) => {
        if(err){
            return res.status(500).json({
                error: true,
                message: 'Error in Query Reset Password'
            })
        } 
        res.status(200).json({
            error: false,
            message: 'Password update success'
        })
    })
    
})

router.post('/', (req, res) => {
    const { mailuserResetPassword } = req.body

    User.findOne({email: mailuserResetPassword}, {name: 1, email: 1}, (error, result) => {
        if(error){
            return res.status(500).json({
                error: true,
                message: 'Error in Query User Reset Password'
            })
        } 

        if(result){ 
            const token = jwt.sign({_id: result._id}, process.env.TOKEN_KEY, {expiresIn: '3h'}, (err, key) => {
                if(err) {
                    return res.status(500).json({
                        error: true,
                        message: 'Error in Generate Token'
                    })
                }

                transporter.sendMail(emailResetMail(result.email, result.name, key), (err, info) => {
                    if(err){
                        console.log(err)
                        return res.status(500).json({
                            error: true,
                            message: 'Erro in send email Reset Password'
                        })
                    }
                    console.log(info)
                })
            })

            return res.status(200).json({
                error: false,
                message: 'Password reset email sent successfully'
            })

        } else {
            return res.status(404).json({
                error: true,
                message: 'User email not found'
            })
        }
    })
})

module.exports = router