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
        pool.query('SELECT * FROM usuario', [], (error, result) => {
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
            usuarios: result.rows.map(row => {
                return {
                    id: row.id,
                    nome: row.nome,
                    email: row.email,
                    senha: row.senha,
                    cadastro: row.cadastro,
                    telefone: row.telefone,
                    acesso: row.acesso,
                    id_endereco: row.id_endereco
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna todos os usuários',
                url: 'htpp://localhost:3001/usuarios/' + result.rows[0].id
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
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        const cadastro = req.body.cadastro
        const telefone = req.body.telefone
        const acesso = req.body.acesso
        const id_endereco = req.body.id_endereco
        pool.query('INSERT INTO usuario (nome, email, senha, cadastro, telefone, acesso, id_endereco) VALUES ($1,$2,crypt($3,gen_salt($4)),$5,$6,$7,$8) RETURNING *',
            [nome, email, senha, 'bf', cadastro,telefone,acesso,id_endereco], (error, result) => {
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
            mensagem: "Usuário cadastrado com sucesso",
            usuario: result.rows.map(row => {
                return {
                    id: row.id,
                    nome: row.nome,
                    email: row.email,
                    senha: row.senha,
                    cadastro: row.cadastro,
                    telefone: row.telefone,
                    acesso: row.acesso,
                    id_endereco: row.id_endereco
                }
            }),
            request: {
                method: 'POST',
                descricao: 'Cadastra um usuário',
                url: 'htpp://localhost:3001/usuarios/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.get('/:id_usuario', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_usuario = req.params.id_usuario
        pool.query('SELECT * FROM usuario WHERE id = $1', [id_usuario], (error, result) => {
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
            usuario: result.rows.map(row => {
                return {
                    id: row.id,
                    nome: row.nome,
                    email: row.email,
                    senha: row.senha,
                    cadastro: row.cadastro,
                    telefone: row.telefone,
                    acesso: row.acesso,
                    id_endereco: row.id_endereco
                }
            }),
            request: {
                method: 'GET',
                descricao: 'Retorna um usuário específico',
                url: 'htpp://localhost:3001/usuarios/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    })
        .catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

router.patch('/', verifyJWT, (req, res, next) => {
    let promise = new Promise(function (resolve, reject) {
        const id_usuario = req.body.id_usuario
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        const cadastro = req.body.cadastro
        const telefone = req.body.telefone
        const acesso = req.body.acesso
        const id_endereco = req.body.id_endereco
        pool.query('UPDATE usuario SET nome = $1, email = $2, senha = crypt($3,gen_salt($4)), cadastro = $5, telefone = $6, acesso = $7, id_endereco = $8 WHERE id = $9 RETURNING *',
            [nome, email, senha, 'bf', cadastro,telefone,acesso,id_endereco,id_usuario], (error, result) => {
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
            mensagem: "Usuário atualizado com sucesso",
            usuario: result.rows.map(row => {
                return {
                    id: row.id,
                    nome: row.nome,
                    email: row.email,
                    senha: row.senha,
                    cadastro: row.cadastro,
                    telefone: row.telefone,
                    acesso: row.acesso,
                    id_endereco: row.id_endereco
                }
            }),
            request: {
                method: 'PATCH',
                descricao: 'Atualiza um usuário',
                url: 'htpp://localhost:3001/usuarios/' + result.rows[0].id
            }
        }
        res.status(200).send({response})
    }).catch(error => res.status(400).send({mensagem: "Erro de resposta da promise", error}))
})

module.exports = router