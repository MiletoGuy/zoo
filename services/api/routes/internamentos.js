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
        pool.query('SELECT * FROM internamento', [], (error, result) => {
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
            internamentos: result.rows.map(row => {
                return {
                    id: row.id,
                    id_animal: row.id_animal,
                    peso: row.peso,
                    motivo: row.motivo,
                    diagnostico: row.diagnostico
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todos os internamentos',
                url: 'htpp://localhost:3001/internamentos/' + result.rows[0].id
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
        const id_animal = req.body.id_animal
        const peso = req.body.peso
        const motivo = req.body.motivo
        const diagnostico = req.body.diagnostico
        pool.query('INSERT INTO internamento (id_animal, peso, motivo, diagnostico) VALUES ($1,$2,$3,$4) RETURNING *',
            [id_animal, peso, motivo, diagnostico], (error, result) => {
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
            mensagem: "Internamento cadastrado com sucesso",
            internamento: result.rows.map(row => {
                return {
                    id: row.id,
                    id_animal: row.id_animal,
                    peso: row.peso,
                    motivo: row.motivo,
                    diagnostico: row.diagnostico
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra um internamento',
                url: 'htpp://localhost:3001/internamentos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.get('/:id_internamento', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_internamento = req.params.id_internamento
        pool.query('SELECT * FROM internamento WHERE id = $1', [id_internamento], (error, result) => {
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
            animal: result.rows.map(row => {
                return {
                    id: row.id,
                    id_animal: row.id_animal,
                    peso: row.peso,
                    motivo: row.motivo,
                    diagnostico: row.diagnostico
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna um internamento específico',
                url: 'htpp://localhost:3001/internamento/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_internamento = req.body.id_internamento
        const id_animal = req.body.id_animal
        const peso = req.body.peso
        const motivo = req.body.motivo
        const diagnostico = req.body.diagnostico
        pool.query('UPDATE internamento SET id_animal = $1, peso = $2, motivo = $3, diagnostico = $4 WHERE id = $5 RETURNING *',
            [id_animal,peso,motivo,diagnostico,id_internamento], (error, result) => {
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
            mensagem: "Internamento atualizado com sucesso",
            internamento: result.rows.map(row => {
                return {
                    id: row.id,
                    id_animal: row.id_animal,
                    peso: row.peso,
                    motivo: row.motivo,
                    diagnostico: row.diagnostico
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza um internamento',
                url: 'htpp://localhost:3001/internamento/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router