const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    nameContact: {
        type: String,
        minlength: 3
    },
    numberContact: {
        type: Number,
        minlength: 9,
        unique: true
    },
    imageContact: {
        secureUrl: {
            type: String
        }
    },
    sexoContact: String,
    emailContact: {
        type: String,
        unique: true,
        lowercase: true
    }
    /*
        Estudar sobre integrar API do face, linkedin e/ou github
    */

})

module.exports = ContactSchema