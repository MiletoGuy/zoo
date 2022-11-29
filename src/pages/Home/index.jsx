import './home.css';
import React from "react";
import Modal from '@mui/material/Modal'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useEffect, useState } from "react";
/* import Select from 'react-select' */
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const navigateZoo = () => {navigate('/filtro')}
    const navigateSamucao = () => {alert("Está opção está indisponível no momento")}
    const navigateCastraMovel = () => {alert("Está opção está indisponível no momento")}
    const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/imagens/logocascavel.png" className="App-logo" alt="logo" />
      </header>
      <div className="logoservicos">
        <input className="logoservicos" type="image" src="/imagens/logozoo.png" height="250" width="250" alt="img-zoo" onClick={navigateZoo}/>
        <input className="logoservicos" type="image" src="/imagens/logosamucao.png" height="250" width="250" alt="img-samucao" onClick={navigateSamucao}/>
        <input className="logoservicos" type="image" src="/imagens/logocastramovel.png" height="250" width="250" alt="img-castramovel" onClick={navigateCastraMovel}/>
      </div>
      <div className="textname">
        <a className="title" href="/zoo.js">ZOOLÓGICO</a>
        <a className="title" href="/samucao">SAMUCÃO</a>
        <a className="title" href="/castramovel">CASTRAMÓVEL</a>
      </div>
      <div className="Usuario">
        <button className="cad-usuario" onClick={handleOpen}>Cadastro de novo Usuario<img src='/imagens/plus.svg' style={{marginBottom: "1px"}} className='icon-plus'></img></button> 
      </div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fundo">
          <div>
            <div className="nm">
              <div className='mmmm'>
                <label className="nm-com">Nome Completo</label>
                <input type="text" placeholder='...' className='search' />
              </div>
              <div className='mmmm'>
                <label className="dt-nasc">Data de Nascimento</label>
                <input type="text" placeholder='...' className='search' />
              </div>
              <div className='mmmm'>
                <label className="rg-cad">RG</label>
                <input type="text" placeholder='...' className='search' />
              </div>
              <div className='mmmm'>
                <label className="cpf-cad">CPF</label>
                <input type="text" placeholder='...' className='search' />
              </div>
              <div className='mmmm'>
                <label className="email-cad">Email</label>
                <input type="text" placeholder='...' className='search' />
              </div>
              </div>           
            <div className="bo"><button className="especie">Cadastrar</button></div>
          </div>
            </div>
        </Modal>
        
          </div>
  );
}
export default Home;