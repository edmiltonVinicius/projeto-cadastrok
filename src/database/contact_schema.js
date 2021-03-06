const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    nameContact: {
        type: String,
        lowercase: true,
        minlength: 3
    },
    numberContact: {
        type: Number,
        minlength: 9
    },
    imageContact: {
        secureUrl: {
            type: String
        }
    },
    sexoContact: String,
    emailContact: {
        type: String,
        lowercase: true
    }
    /*
        Estudar sobre integrar API do face, linkedin e/ou github
    */

})

module.exports = ContactSchema