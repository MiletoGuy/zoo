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
        pool.query('SELECT * FROM animal AS a INNER JOIN raca AS b ON a.id_raca = b.id', [], (error, result) => {
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
                    apelido: row.apelido,
                    origem: row.origem,
                    sexo: row.sexo,
                    tipoIdentificacao: row.tipoidentificacao,
                    peso: row.peso,
                    identificacao: row.identificacao,
                    funcionario: row.id_funcionario,
                    raca: row.id_raca,
                    nomeCientifico: row.nomecientifico,
                    especie: row.especie
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todos os animais',
                url: 'htpp://localhost:3001/animais/' + result.rows[0].id
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
        const apelido = req.body.apelido
        const origem = req.body.origem
        const sexo = req.body.sexo
        const tipoIdentificacao = req.body.tipoIdentificacao
        const peso = req.body.peso
        const identificacao = req.body.identificacao
        const funcionario = req.body.funcionario
        const raca = req.body.raca
        pool.query('INSERT INTO animal (apelido, origem, sexo, tipoidentificacao, peso, identificacao, dataadmissao, id_funcionario, id_raca) VALUES ($1,$2,$3,$4,$5,$6,NOW(),$7,$8) RETURNING *',
            [apelido, origem, sexo, tipoIdentificacao, peso, identificacao, funcionario, raca], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
    })
    promise.then(result => {
        const response = {
            mensagem: "Animal cadastrado com sucesso",
            animal: result.rows.map(row => {
                return {
                    id: row.id,
                    apelido: row.apelido,
                    origem: row.origem,
                    sexo: row.sexo,
                    tipoIdentificacao: row.tipoidentificacao,
                    peso: row.peso,
                    identificacao: row.identificacao,
                    funcionario: row.id_funcionario,
                    raca: row.id_raca
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra um animal',
                url: 'htpp://localhost:3001/animais/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => {
        res.status(400).send({error})
        console.log(error)
    })
})

router.get('/:id_animal', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_animal = req.params.id_animal
        pool.query('SELECT * FROM animal WHERE id = $1', [id_animal], (error, result) => {
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
                    apelido: row.apelido,
                    origem: row.origem,
                    sexo: row.sexo,
                    tipoIdentificacao: row.tipoidentificacao,
                    peso: row.peso,
                    identificacao: row.identificacao,
                    funcionario: row.id_funcionario,
                    raca: row.id_raca
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna um animal específico',
                url: 'htpp://localhost:3001/animais/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_animal = req.body.id_animal
        const apelido = req.body.apelido
        const origem = req.body.origem
        const sexo = req.body.sexo
        const tipoIdentificacao = req.body.tipoIdentificacao
        const peso = req.body.peso
        const identificacao = req.body.identificacao
        const funcionario = req.body.funcionario
        const raca = req.body.raca
        pool.query('UPDATE animal SET apelido = $1, origem = $2, sexo = $3, tipoidentificacao = $4, peso = $5, identificacao = $6, id_funcionario = $7, id_raca = $8 WHERE id = $9 RETURNING *',
            [apelido, origem, sexo, tipoIdentificacao, peso, identificacao, funcionario, raca, id_animal], (error, result) => {
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
            mensagem: "Animal atualizado com sucesso",
            animal: result.rows.map(row => {
                return {
                    id: row.id,
                    apelido: row.apelido,
                    origem: row.origem,
                    sexo: row.sexo,
                    tipoIdentificacao: row.tipoidentificacao,
                    peso: row.peso,
                    identificacao: row.identificacao,
                    funcionario: row.id_funcionario,
                    raca: row.id_raca
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza um animal',
                url: 'htpp://localhost:3001/animais/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router