const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const rotaLogin = require('./routes/login')
const rotaEnderecos = require('./routes/enderecos')
const rotaUsuarios = require('./routes/usuarios')
const rotaAnimais = require('./routes/animais')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, ' +
        'X-Requested-With,' +
        'Content-Type,' +
        'Accept,' +
        'Authorization' +
        'x-access-token');

    if (req.method === 'OPTIONS') {
        res.headers('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }
    next()
})

app.use('/login', rotaLogin)
app.use('/enderecos', rotaEnderecos)
app.use('/usuarios', rotaUsuarios)
app.use('/animais', rotaAnimais)

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app