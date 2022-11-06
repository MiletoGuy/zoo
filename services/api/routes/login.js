const express = require('express')
const jwt = require("jsonwebtoken");
const router = express.Router()
const pool = require('../postgresql').pool

router.post('/', (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const email = req.body.email
        const senha = req.body.senha
        pool.query('SELECT * FROM usuario WHERE email = $1 AND senha = crypt($2,senha)', [email, senha], (error, result) => {
            if (error) {
                console.log(error)
                reject(error)
            } else {
                resolve(result)
            }
        })
    })

    promise.then(result => {
        if (!result.rows[0]) return res.status(500).json({auth: false, mensagem: 'Login inválido!'})
        const id = result.rows[0].id
        const token = jwt.sign({id}, process.env.SECRET, {expiresIn: 3000})
        return res.json({userId: id, userEmail: req.body.email, auth: true, token: token})
    })
})

module.exports = router