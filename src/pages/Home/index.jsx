import './home.css';
import React from "react";
import Modal from '@mui/material/Modal'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate()
    const navigateZoo = () => {
        navigate('/filtro')
    }
    const navigateSamucao = () => {
        alert("Está opção está indisponível no momento")
    }
    const navigateCastraMovel = () => {
        alert("Está opção está indisponível no momento")
    }
    const [open, setOpen] = useState(false)
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [rg, setRG] = useState('')
    const [cpf, setCPF] = useState('')
    const [email, setEmail] = useState('')
    const [acesso, setAcesso] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cadastro, setCadastro] = useState('')
    const [senha, setSenha] = useState('')
    const [id_endereco, setId_endereco] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post('http://localhost:3001/usuarios', {
        //         nome: nomeCompleto,
        //         email: email,
        //         senha: senha,
        //         cadastro: cadastro,
        //         telefone: telefone,
        //         acesso: acesso,
        //         id_endereco: id_endereco,
        //         raca: r.id
        //     }, {
        //         headers: {
        //             'x-access-token': window.sessionStorage.getItem('token')
        //         }
        //     }
        // )
        //     .then(res => alert("Animal cadastrado com sucesso"))
        //     .catch(err => console.log(err))
        alert("Usúário cadastrado com sucesso!")
        setNomeCompleto('')
        setNascimento('')
        setRG('')
        setCPF('')
        setEmail('')
        setAcesso('')
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src="/imagens/logocascavel.png" className="App-logo" alt="logo"/>
            </header>
            <div className="logoservicos">
                <input className="logoservicos" type="image" src="/imagens/logozoo.png" height="250" width="250"
                       alt="img-zoo" onClick={navigateZoo}/>
                <input className="logoservicos" type="image" src="/imagens/logosamucao.png" height="250" width="250"
                       alt="img-samucao" onClick={navigateSamucao}/>
                <input className="logoservicos" type="image" src="/imagens/logocastramovel.png" height="250" width="250"
                       alt="img-castramovel" onClick={navigateCastraMovel}/>
            </div>
            <div className="textname">
                <a className="title" href="/zoo.js">ZOOLÓGICO</a>
                <a className="title" href="/samucao">SAMUCÃO</a>
                <a className="title" href="/castramovel">CASTRAMÓVEL</a>
            </div>
            <div className="Usuario">
                <button className="cad-usuario" onClick={handleOpen}>Cadastro de novo Usuario<img
                    src='/imagens/plus.svg' style={{marginBottom: "1px"}} className='icon-plus'></img></button>
            </div>
            <Modal
                className="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit}>

                    <div className="fundo">
                        <div>
                            <div className="nm">
                                <div className='mmmm'>
                                    <label className="nm-com">Nome Completo</label>
                                    <input type="text" placeholder='...' className='search' required
                                           onChange={e => setNomeCompleto(e.target.value)}/>
                                </div>
                                <div className='mmmm'>
                                    <label className="dt-nasc">Data de Nascimento</label>
                                    <input type="text" placeholder='...' className='search' required
                                           onChange={e => setNascimento(e.target.value)}/>
                                </div>
                                <div className='mmmm'>
                                    <label className="rg-cad">RG</label>
                                    <input type="text" placeholder='...' className='search' required
                                           onChange={e => setRG(e.target.value)}/>
                                </div>
                                <div className='mmmm'>
                                    <label className="cpf-cad">CPF</label>
                                    <input type="text" placeholder='...' className='search' required
                                           onChange={e => setCPF(e.target.value)}/>
                                </div>
                                <div className='mmmm'>
                                    <label className="email-cad">Email</label>
                                    <input type="text" placeholder='...' className='search' required
                                           onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className='mmmm'>
                                    <label className="email-cad">Acesso</label>
                                    <input type="text" placeholder='...' className='search' required
                                           onChange={e => setAcesso(e.target.value)}/>
                                </div>
                            </div>
                            <div className="bo">
                                <button className="especie" type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>

        </div>
    );
}

export default Home;