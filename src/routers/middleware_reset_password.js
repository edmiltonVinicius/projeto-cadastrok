module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const token = req.headers.authorization

    if(!token) {
        res.status(412).json({
            error: true,
            message: 'Token not found'
        })
    }

    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if(err) {
            console.log(err)
            res.status(500).json({
                error: true,
                message: 'Error in verification Jwt reset password'
            })
        }
        
        req.tokenResetPassowrd = decoded._id
        next()
    })
}