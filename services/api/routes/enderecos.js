const express = require('express')
const router = express.Router()
const pool = require('../postgresql').pool
const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    if (!token) return res.status(401).send({auth: false, mensagem: 'Token não encontrado'})

    jwt.verify(token, process.env.SECRET, function (error, decoded) {
        if (error) return res.status(500).send({auth: false, mensagem: 'Falha na autenticação do token'})
        req.userId = decoded.id
        next()
    })
}

router.get('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM endereco', [], (error, result) => {
            if (error) {
                console.log("erro na query")
                reject("Ocorreu um erro na query", error)
            } else {
                resolve(result)
            }
        })
    })
    promise.then(result => {
        const response = {
            quantidade: result.rowCount,
            enderecos: result.rows.map(row => {
                return {
                    id: row.id,
                    rua: row.rua,
                    numero: row.numero,
                    bairro: row.bairro,
                    cidade: row.cidade,
                    uf: row.uf
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todos os endereços',
                url: 'htpp://localhost:3001/enderecos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error =>
            res.status(400).send({mensagem: "Erro de resposta da promise", error})
        )

})

router.post('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const rua = req.body.rua
        const numero = req.body.numero
        const bairro = req.body.bairro
        const cidade = req.body.cidade
        const uf = req.body.uf
        pool.query('INSERT INTO endereco (rua, numero, bairro, cidade, uf) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [rua, numero, bairro, cidade, uf], (error, result) => {
                if (error) {
                    console.log("erro na query")
                    reject("Ocorreu um erro na query", error)
                } else {
                    resolve(result)
                }
            })
    })
    promise.then(result => {
        const response = {
            mensagem: "Endereço cadastrado com sucesso",
            endereco: result.rows.map(row => {
                return {
                    id: row.id,
                    rua: row.rua,
                    numero: row.numero,
                    bairro: row.bairro,
                    cidade: row.cidade,
                    uf: row.uf
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra um endereço',
                url: 'htpp://localhost:3001/enderecos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.get('/:id_endereco', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_endereco = req.params.id_endereco
        pool.query('SELECT * FROM endereco WHERE id = $1', [id_endereco], (error, result) => {
            if (error) {
                console.log("erro na query")
                reject("Ocorreu um erro na query", error)
            } else {
                resolve(result)
            }
        })
    })

    promise.then(result => {
        const response = {
            endereco: result.rows.map(row => {
                return {
                    id: row.id,
                    rua: row.rua,
                    numero: row.numero,
                    bairro: row.bairro,
                    cidade: row.cidade,
                    uf: row.uf
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna um endereço específico',
                url: 'htpp://localhost:3001/enderecos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_endereco = req.body.id_endereco
        const rua = req.body.rua
        const numero = req.body.numero
        const bairro = req.body.bairro
        const cidade = req.body.cidade
        const uf = req.body.uf
        pool.query('UPDATE endereco SET rua = $1, numero = $2, bairro = $3, cidade = $4, uf = $5 WHERE id = $6 RETURNING *',
            [rua, numero, bairro, cidade, uf, id_endereco], (error, result) => {
                if (error) {
                    console.log("erro na query")
                    reject("Ocorreu um erro na query", error)
                } else {
                    resolve(result)
                }
            })
    })
    promise.then(result => {
        const response = {
            mensagem: "Endereço atualizado com sucesso",
            endereco: result.rows.map(row => {
                return {
                    id: row.id,
                    rua: row.rua,
                    numero: row.numero,
                    bairro: row.bairro,
                    cidade: row.cidade,
                    uf: row.uf
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza um endereço',
                url: 'htpp://localhost:3001/enderecos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router