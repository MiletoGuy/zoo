import './logado.css';
import React from "react";
import {useNavigate} from "react-router-dom";

function Logado() {
    const navigate = useNavigate()
    const navigateZoo = () => {navigate('/filtro')}
    const navigateSamucao = () => {alert("Está opção está indisponível no momento")}
    const navigateCastraMovel = () => {alert("Está opção está indisponível no momento")}
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
        <a className="title" href="castramovel">CASTRAMÓVEL</a>
      
      
      </div>
    </div> 
          
          
  );
}

export default Logado;