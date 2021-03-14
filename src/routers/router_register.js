const express = require('express')
const router = express.Router()
const User = require('../database/user_schema')

const transporter = require('../configs/nodemailer_transporter')
const mailOptions = require('../email/mail_options')

router.post('/', (req, res) => {
    const { userName, userPassword, userEmail} = req.body

    if(userName != undefined && userPassword != undefined && userEmail != undefined){
        User.find({email: userEmail}, (err, arq) => {
            if(err) return res.status(500).send('Error occurred, try again')

            if(arq.length > 0) return res.status(400).send('Email already Registered')
            
            const newUser = new User({
                name: userName,
                password: userPassword,
                email: userEmail
            })

            newUser.save(err => {
                if(err) {
                    console.log(err)
                    return res.status(500).send('Erro on Register') 
                }
            })

            // E-mail desabilatado por enquanto
            // transporter.sendMail(mailOptions.mailOptions(userEmail), (err, info) => {
            //     if(err) {
            //         console.log(userEmail)
            //         console.log(err)
            //         return res.status(500).send('Something went wrong with the serivdor') 
            //     }

            //     console.log(info)
            // })
            
            return res.status(201).send('User created')
        })

    } else {
       res.status(400).send('Please, insert datas required')
    }
    
})


module.exports = router