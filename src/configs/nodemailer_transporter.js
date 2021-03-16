const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'SMTP.office365.com',
    secure: false,
    port: 587,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL
    }
})

module.exports = transporter