const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const middleware = require('./middleware-jwt')
const User = require('./../database/user-schema')
const configCloudinary = require('./../configs/config-cloudinary')
const configMulter = require('./../configs/config-multer')
const fs = require('fs')

cloudinary.config(configCloudinary)


router.post('/', middleware, configMulter.single('file'), (req, res) => {
    const file = req.file.path || req.file
    const idUser = req.idUser
    if(file != undefined){
        cloudinary.uploader.upload(file, 
            {folder: 'img-users-cadastrok/'}, (error, result) => {
            if(error) return res.status(500).send('Error uploading to cloud.')
        
            User.findByIdAndUpdate(idUser, 
                {image: { publicId : result.public_id, secureUrl : result.secure_url}},
                    { new: true }, (err, arq) => {
                    if(err) return res.status(500).send('Error on Mongoose.')
                    
                    fs.unlink(file, (err) => {
                        if(err) return res.status(500).send('Error on Upload Image.')
                    })
                    return res.status(200).send(arq.image.secureUrl)
            })
        })
    }else {
        return res.status(404).send('File not received.')
    }
})


module.exports = router 

