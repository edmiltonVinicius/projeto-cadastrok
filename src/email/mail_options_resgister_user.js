const templateRegisterUser = require('./template_register_user')
const templateResetPassword = require('./template_reset_mail')

const emailRegisterUser = (email) => {
    return {
        from: process.env.USER_MAIL,
        to: email,
        subject: 'Thank you for registering.',
        html: templateRegisterUser
    }
}

const emailResetMail = (email, name, token) => {
    return {
        from: process.env.USER_MAIL,
        to: email,
        subject: 'Reset Password - CadastrOK',
        html: templateResetPassword(name, token)
    }
}

module.exports = {
    emailRegisterUser,
    emailResetMail
}