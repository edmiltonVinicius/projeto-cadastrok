const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../database/user_schema')
const transporter = require('../configs/nodemailer_transporter')
const { emailResetMail } = require('../email/mail_options_resgister_user')

router.get('/', (req, res) => {
    res.send(`<h1>Reset Password CadastrOk</h1> <br> <p> ${req.query.token}</p>`)
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

                transporter.sendMail(emailResetMail(result.email, result.name, token), (err, info) => {
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