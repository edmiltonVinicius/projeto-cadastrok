const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const middleware = require('./middleware-jwt')
const User = require('./../database/user-schema')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/uploads-img-users/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileFitler = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true)
    }
    cb(null, false)
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
        files: 1
    },
    fileFilter: fileFitler
})

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME , 
    api_key : process.env.API_KEY, 
    api_secret : process.env.API_SECRET
})

router.post('/', middleware, upload.single('file'), (req, res) => {
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

                    return res.status(201).send(arq.image.secureUrl)
            })
        })
    }else {
        return res.status(404).send('File not received.')
    }
})

router.delete('/', (req, res) => {
    cloudinary.uploader.destroy("img-users-cadastrok/mlno6jo6puea5rjefabp", 
    {invalidate: true},
    (error, result) => {
        if(error) return res.status(500).send('Sorry, there was an error, please try again.')
        return res.send(result)
    })
})

module.exports = router 

