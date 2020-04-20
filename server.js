require('dotenv').config()
//global.banco = require('./src/database/connection')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const routerLogin = require('./src/routes/router-login')
const routerRegister = require('./src/routes/router-register')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')
app.use('/static', express.static(__dirname + '/src/static/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', routerLogin)
app.use('/register', routerRegister)

app.listen(port, () => console.log('Servidor Node ON.'))