const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    const token = req.headers.authorization || req.body.headers.authorization 

    if(!token) return res.send('token nao recebido')

    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if(err) return res.render('layouts/login')
        req.idUser = decoded._id
        next()
    })
}