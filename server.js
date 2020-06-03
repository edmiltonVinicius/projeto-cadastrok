require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

const connectionMongoose = require('./src/config/connection-mongoose')

const routerLogin = require('./src/routers/router-login')
const routerRegister = require('./src/routers/router-register')
const routerDashboard = require('./src/routers/router-dashboard')
const routerError = require('./src/routers/router-error')
const routerUploadImg = require('./src/routers/router-upload-img')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')

app.use('/static', express.static(__dirname + '/src/static/'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/', routerLogin)
app.use('/register', routerRegister)
app.use('/dashboard', routerDashboard)
app.use('/upload', routerUploadImg)

app.use(routerError)
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.status(404).render('layouts/error')
})


app.listen(port, () => console.log('Servidor Node ON.'))
