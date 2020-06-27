const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
    friendImage: {
        secureUrl: String
    },
    friendName: {
        type: String,
        required: true,
        minlength: 3
    },
    friendNickname: String,
    friendSexo: {
        type: String,
        required: true
    },
    friendTelephone: {
        type: Number,
        unique: true,
        minlength: 9
    }
})

module.exports = FriendSchema