module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const token = req.headers.authorization || req.body.headers.authorization 

    if(!token) return res.render('layouts/login')

    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if(err) return res.render('layouts/login')
        req.idUser = decoded._id
        next()
    })
}