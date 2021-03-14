const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'SMTP.office365.com',
    secure: false,
    port: 587,
    auth: {
        user: process.env.USER_MAIL || 'cadastrok@outlook.com',
        pass: process.env.PASS_MAIL || 'atento@8890'
    }
})

module.exports = transporter