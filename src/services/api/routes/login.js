const express = require('express')
const jwt = require("jsonwebtoken");
const router = express.Router()
const pool = require('../postgresql').pool

router.post('/', (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const email = req.body.email
        pool.query('SELECT * FROM usuario WHERE email = $1', [email], (error, result) => {
            if (error) {
                console.log("erro da query")
                reject("Ocorreu um erro!", error)
            } else {
                console.log("ok")
                resolve(result)
            }
        })
    })

    promise.then(result => {
        if (!result.rows[0]) return res.json({auth: false, mensagem: 'Email não cadastrado'})

        const email = result.rows[0].email
        const senha = result.rows[0].senha

        if (req.body.email === email && req.body.senha === senha) {
            const id = 1
            const token = jwt.sign({id}, process.env.SECRET, {expiresIn: 3000})
            return res.json({auth: true, token: token})
        }
        res.status(500).json({auth:false,mensagem: 'Login inválido!'})
    })
})

module.exports = router