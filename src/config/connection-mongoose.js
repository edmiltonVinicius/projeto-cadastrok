const mongoose = require('mongoose')

mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then((banco) => {
        console.log('Banco Conectado!')
    })
    .catch((err) => console.log('Erro na conexão com o banco!' + err))


module.exports = mongoose