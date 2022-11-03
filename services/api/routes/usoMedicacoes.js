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
        pool.query('SELECT * FROM usoMedicacao', [], (error, result) => {
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
            usoMedicacoes: result.rows.map(row => {
                return {
                    id: row.id,
                    horario: row.horario,
                    id_medicacao: row.id_medicacao
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todos os usos de medicações',
                url: 'htpp://localhost:3001/usoMedicacoes/' + result.rows[0].id
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
        const horario = req.body.horario
        const id_medicacao = req.body.id_medicacao
        pool.query('INSERT INTO usoMedicacao (horario, id_medicacao) VALUES ($1,$2) RETURNING *',
            [horario,id_medicacao], (error, result) => {
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
            mensagem: "Uso de medicação cadastrado com sucesso",
            usoMedicacao: result.rows.map(row => {
                return {
                    id: row.id,
                    horario: row.horario,
                    id_medicacao: row.id_medicacao
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra um uso de medicação',
                url: 'htpp://localhost:3001/usoMedicacoes/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.get('/:id_usoMedicacao', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_usoMedicacao = req.params.id_usoMedicacao
        pool.query('SELECT * FROM usoMedicacao WHERE id = $1', [id_usoMedicacao], (error, result) => {
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
            usoMedicacao: result.rows.map(row => {
                return {
                    id: row.id,
                    horario: row.horario,
                    id_medicacao: row.id_medicacao
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna um uso de medicação específico',
                url: 'htpp://localhost:3001/usoMedicacao/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_usoMedicacao = req.body.id_usoMedicacao
        const horario = req.body.horario
        const id_medicacao = req.body.id_medicacao
        pool.query('UPDATE usoMedicacao SET horario = $1, id_medicacao = $2 WHERE id = $3 RETURNING *',
            [horario,id_medicacao,id_usoMedicacao], (error, result) => {
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
            mensagem: "Uso de medicação atualizado com sucesso",
            usoMedicacao: result.rows.map(row => {
                return {
                    id: row.id,
                    horario: row.horario,
                    id_medicacao: row.id_medicacao
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza um uso de medicação',
                url: 'htpp://localhost:3001/usoMedicacoes/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router