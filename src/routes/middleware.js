module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const token = req.headers.authorization

    if(!token) return res.render('layouts/error')

    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if(err) return res.render('layouts/error')
        req.decoded = decoded
        next()
    })
}