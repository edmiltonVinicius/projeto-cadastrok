const express = require('express')
const router = express.Router()
//const fs = require('fs')
const cloudinary = require('cloudinary').v2
const middleware = require('./middleware-jwt')
const User = require('./../database/user-schema')

const cloudinaryConfig = require('../config/config-cloudinary')
const multerConfig = require('../config/config-multer')

cloudinary.config(cloudinaryConfig) 

router.post('/', middleware, multerConfig.single('file'), (req, res) => {
    const file = req.file.path
    const idUser = req.idUser
    if(file){
        cloudinary.uploader.upload(file, 
            {folder: 'img-users-cadastrok/'}, (error, result) => {
            if(error) return res.status(500).send('Error uploading to cloud.')
        
            User.findByIdAndUpdate(idUser, 
                {image: { publicId : result.public_id, secureUrl : result.secure_url}},
                { new: true }, (err, arq) => {
                    if(err) return res.status(500).send('Error on Mongoose.')
                    /*fs.unlink(file, (err) => {
                        if(err) {
                            return res.status(500).send('Sorry, an error has occurred.')
                        }
                    })*/
                    return res.status(201).send(arq.image.secureUrl)
            })
        })
    }else {
        return res.status(404).send('File not received.')
    }
})


module.exports = router 

