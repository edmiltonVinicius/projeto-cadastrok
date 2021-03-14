const html = require('./template_mail_user')

const mailOptions = (mailUser) => {
    return {
        from: 'cadastro@outlook.com',
        to: 'projetocafeteriadopaulo@gmail.com',
        subject: 'Thank you for registering.',
        html
    }
}

module.exports = {mailOptions}