import './logado.css';

function Logado() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/imagens/logocascavel.png" className="App-logo" alt="logo" />
      </header>
      <div className="logoservicos">
        <input className="logoservicos" type="image" src="/imagens/logozoo.png" height="250" width="250"/>
        <input className="logoservicos" type="image" src="/imagens/logosamucao.png" height="250" width="250"/>
        <input className="logoservicos" type="image" src="/imagens/logocastramovel.png" height="250" width="250"/> 
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