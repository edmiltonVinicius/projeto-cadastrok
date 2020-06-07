const html = require('./template-mail-user')

const mailOptions = (mailUser) => {
    return {
        from: 'Edmilon Vinicius - CadastrOk',
        to: mailUser,
        subject: 'Thank you for registering.',
        html
    }
}

module.exports = {mailOptions}