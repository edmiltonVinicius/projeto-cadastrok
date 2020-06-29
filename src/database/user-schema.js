const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const contactSchema = require('./contact-schema')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,   
    },
    image: {
        publicId: {
            type: String
        },
        secureUrl: {
            type: String,
            default: 'https://res.cloudinary.com/edmilton-cadastrok/image/upload/v1590125387/img-users-cadastrok/y6aj5gh31ktdp75ott22.jpg'
        }
    },
    firstAccess: {
        type: Boolean,
        default: true
    },
    contacts: [contactSchema]
})

UserSchema.pre('save', function(next) {
    const saltRounds = 10
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if(err) return next(err)
        this.password = hash
        next()
    })
})

module.exports = mongoose.model('Usuario', UserSchema)