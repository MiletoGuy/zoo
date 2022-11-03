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
        pool.query('SELECT * FROM monitoramento', [], (error, result) => {
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
            monitoramentos: result.rows.map(row => {
                return {
                    id: row.id,
                    id_internamento: row.id_internamento,
                    hora: row.hora,
                    FC: row.fc,
                    FR: row.fr,
                    ETCO2: row.etco2,
                    SPO2: row.spo2,
                    PS: row.ps,
                    PD: row.pd,
                    PM: row.pm,
                    TC: row.tc,
                    GLICEMIA: row.glicemia
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todos os monitoramentos',
                url: 'htpp://localhost:3001/monitoramentos/' + result.rows[0].id
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
        const id_internamento = req.body.id_internamento
        const hora = req.body.hora
        const FC = req.body.FC
        const FR = req.body.FR
        const ETCO2 = req.body.ETCO2
        const SPO2 = req.body.SPO2
        const PS = req.body.PS
        const PD = req.body.PD
        const PM = req.body.PM
        const TC = req.body.TC
        const GLICEMIA = req.body.GLICEMIA
        pool.query('INSERT INTO monitoramento (id_internamento, hora, fc, fr, etco2, sp02, ps, pd, pm, tc, glicemia) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *',
            [id_internamento,hora,FC,FR,ETCO2,SPO2,PS,PD,PM,TC,GLICEMIA], (error, result) => {
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
            mensagem: "Monitoramento cadastrado com sucesso",
            monitoramento: result.rows.map(row => {
                return {
                    id: row.id,
                    id_internamento: row.id_internamento,
                    hora: row.hora,
                    FC: row.fc,
                    FR: row.fr,
                    ETCO2: row.etco2,
                    SPO2: row.spo2,
                    PS: row.ps,
                    PD: row.pd,
                    PM: row.pm,
                    TC: row.tc,
                    GLICEMIA: row.glicemia
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra um monitoramento',
                url: 'htpp://localhost:3001/monitoramentos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.get('/:id_monitoramento', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_monitoramento = req.params.id_monitoramento
        pool.query('SELECT * FROM monitoramento WHERE id = $1', [id_monitoramento], (error, result) => {
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
            monitoramento: result.rows.map(row => {
                return {
                    id: row.id,
                    id_internamento: row.id_internamento,
                    hora: row.hora,
                    FC: row.fc,
                    FR: row.fr,
                    ETCO2: row.etco2,
                    SPO2: row.spo2,
                    PS: row.ps,
                    PD: row.pd,
                    PM: row.pm,
                    TC: row.tc,
                    GLICEMIA: row.glicemia
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna um monitoramento específico',
                url: 'htpp://localhost:3001/monitoramentos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_monitoramento = req.body.id_monitoramento
        const id_internamento = req.body.id_internamento
        const hora = req.body.hora
        const FC = req.body.FC
        const FR = req.body.FR
        const ETCO2 = req.body.ETCO2
        const SPO2 = req.body.SPO2
        const PS = req.body.PS
        const PD = req.body.PD
        const PM = req.body.PM
        const TC = req.body.TC
        const GLICEMIA = req.body.GLICEMIA
        pool.query('UPDATE monitoramento SET id_internamento = $1, hora = $2, FC = $3, FR = $4, ETCO2 = $5, SPO2 = $6, PS = $7, PD = $8, PM = $9, TC = $10, GLICEMIA = $11 WHERE id = $12 RETURNING *',
            [id_internamento,hora,FC,FR,ETCO2,SPO2,PS,PD,PM,TC,GLICEMIA,id_monitoramento], (error, result) => {
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
            mensagem: "Monitoramento atualizado com sucesso",
            monitoramento: result.rows.map(row => {
                return {
                    id: row.id,
                    id_internamento: row.id_internamento,
                    hora: row.hora,
                    FC: row.fc,
                    FR: row.fr,
                    ETCO2: row.etco2,
                    SPO2: row.spo2,
                    PS: row.ps,
                    PD: row.pd,
                    PM: row.pm,
                    TC: row.tc,
                    GLICEMIA: row.glicemia
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza um monitoramento',
                url: 'htpp://localhost:3001/monitoramentos/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router