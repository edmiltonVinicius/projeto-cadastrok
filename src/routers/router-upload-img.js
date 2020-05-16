const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/uploads-img-users/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileFitler = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
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

router.post('/', upload.single('file'), (req, res) => {
    const file = req.file
    if(file){
        return res.send(req.file)
    }
    return res.send('file nao receido')
})

module.exports = router 

