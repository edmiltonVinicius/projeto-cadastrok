const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const routerLogin = require('./src/routes/router-login')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')

app.use('/static', express.static(__dirname + '/src/static/'))


app.use('/', routerLogin)

app.listen(port, () => console.log('Servidor Node ON.'))