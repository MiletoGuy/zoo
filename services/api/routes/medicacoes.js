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
        pool.query('SELECT * FROM medicacao', [], (error, result) => {
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
            animais: result.rows.map(row => {
                return {
                    id: row.id,
                    medicacao: row.medicacao,
                    viaDeAdministracao: row.viadeadministracao,
                    posologia: row.posologia,
                    frequenciaHorario: row.frequenciahorario,
                    id_internamento: row.id_internamento
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todas as medicações',
                url: 'htpp://localhost:3001/medicacoes/' + result.rows[0].id
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
        const medicacao = req.body.medicacao
        const viaDeAdministracao = req.body.viaDeAdministracao
        const posologia = req.body.posologia
        const frequenciaHorario = req.body.frequenciaHorario
        const id_internamento = req.body.id_internamento
        pool.query('INSERT INTO medicacao (medicacao, viadeadministracao, posologia, frequenciahorario, id_internamento) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [medicacao,viaDeAdministracao,posologia,frequenciaHorario,id_internamento], (error, result) => {
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
            mensagem: "Medicação cadastrada com sucesso",
            medicacao: result.rows.map(row => {
                return {
                    id: row.id,
                    medicacao: row.medicacao,
                    viaDeAdministracao: row.viadeadministracao,
                    posologia: row.posologia,
                    frequenciaHorario: row.frequenciahorario,
                    id_internamento: row.id_internamento
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra uma medicação',
                url: 'htpp://localhost:3001/medicacoes/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.get('/:id_medicacao', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_medicacao = req.params.id_medicacao
        pool.query('SELECT * FROM medicacao WHERE id = $1', [id_medicacao], (error, result) => {
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
                    medicacao: row.medicacao,
                    viaDeAdministracao: row.viadeadministracao,
                    posologia: row.posologia,
                    frequenciaHorario: row.frequenciahorario,
                    id_internamento: row.id_internamento
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna uma medicação específica',
                url: 'htpp://localhost:3001/medicacoes/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_medicacao = req.body.id_medicacao
        const medicacao = req.body.medicacao
        const viaDeAdministracao = req.body.viaDeAdministracao
        const posologia = req.body.posologia
        const frequenciaHorario = req.body.frequenciaHorario
        const id_internamento = req.body.id_internamento
        pool.query('UPDATE medicacao SET medicacao = $1, viaDeAdministracao = $2, posologia = $3, frequenciaHorario = $4, id_internamento = $5 WHERE id = $6 RETURNING *',
            [medicacao,viaDeAdministracao,posologia,frequenciaHorario,id_internamento,id_medicacao], (error, result) => {
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
            mensagem: "Medicação atualizada com sucesso",
            medicacao: result.rows.map(row => {
                return {
                    id: row.id,
                    medicacao: row.medicacao,
                    viaDeAdministracao: row.viadeadministracao,
                    posologia: row.posologia,
                    frequenciaHorario: row.frequenciahorario,
                    id_internamento: row.id_internamento
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza uma medicação',
                url: 'htpp://localhost:3001/medicacoes/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router