const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
    }
})

UserSchema.pre('save', (next) => {
    const saltRounds = 10
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if(err) return next(err)
        this.password = hash
        next()
    })
})

module.exports = mongoose.model('Usuario', UserSchema)