const mongoose = require('mongoose')

mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((banco) => {
        console.log('Banco Local conectado!')
    })
    .catch((err) => console.log('Erro na conexão com o banco!'))


module.exports = mongoose