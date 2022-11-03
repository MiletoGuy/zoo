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
        pool.query('SELECT * FROM raca', [], (error, result) => {
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
            racas: result.rows.map(row => {
                return {
                    id: row.id,
                    nomeComum: row.nomecomum,
                    nomeCientifico: row.nomecientifico,
                    especie: row.especie,
                    expectativaDeVida: row.expectativadevida,
                    estadoConservacao: row.estadoconservacao
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todas as raças',
                url: 'htpp://localhost:3001/racas/' + result.rows[0].id
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
        const nomeComum = req.body.nomeComum
        const nomeCientifico = req.body.nomeCientifico
        const especie = req.body.especie
        const expectativaDeVida = req.body.expectativaDeVida
        const estadoConservacao = req.body.estadoConservacao
        pool.query('INSERT INTO raca (nomecomum, nomecientifico, especie, expectativadevida, estadoconservacao) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [nomeComum,nomeCientifico,especie,expectativaDeVida,estadoConservacao], (error, result) => {
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
            mensagem: "Raça cadastrada com sucesso",
            raca: result.rows.map(row => {
                return {
                    id: row.id,
                    nomeComum: row.nomecomum,
                    nomeCientifico: row.nomecientifico,
                    especie: row.especie,
                    expectativaDeVida: row.expectativadevida,
                    estadoConservacao: row.estadoconservacao
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra uma raça',
                url: 'htpp://localhost:3001/racas/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.get('/:id_raca', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_raca = req.params.id_raca
        pool.query('SELECT * FROM raca WHERE id = $1', [id_raca], (error, result) => {
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
            raca: result.rows.map(row => {
                return {
                    id: row.id,
                    nomeComum: row.nomecomum,
                    nomeCientifico: row.nomecientifico,
                    especie: row.especie,
                    expectativaDeVida: row.expectativadevida,
                    estadoConservacao: row.estadoconservacao
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna uma raça específica',
                url: 'htpp://localhost:3001/racas/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_raca = req.body.id_raca
        const nomeComum = req.body.nomeComum
        const nomeCientifico = req.body.nomeCientifico
        const especie = req.body.especie
        const expectativaDeVida = req.body.expectativaDeVida
        const estadoConservacao = req.body.estadoConservacao
        pool.query('UPDATE raca SET nomeComum = $1, nomeCientifico = $2, especie = $3, expectativaDeVida = $4, estadoConservacao = $5 WHERE id = $6 RETURNING *',
            [nomeComum, nomeCientifico, especie, expectativaDeVida, estadoConservacao, id_raca], (error, result) => {
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
            mensagem: "Raça atualizada com sucesso",
            raca: result.rows.map(row => {
                return {
                    id: row.id,
                    nomeComum: row.nomecomum,
                    nomeCientifico: row.nomecientifico,
                    especie: row.especie,
                    expectativaDeVida: row.expectativadevida,
                    estadoConservacao: row.estadoconservacao
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza uma raça',
                url: 'htpp://localhost:3001/racas/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router