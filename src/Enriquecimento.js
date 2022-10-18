import './Enriquecimento.css';


function App() {
  return (
    <div className="Enriqueciomento">
      <header className="Enriquecimento-header">
        <img src="/imagens/LEAO.png" className="Enriquecimento-logo" alt="logo" />
        <p>
         ENRIQUECIMENTO AMBIENTAL
        </p>
      </header>
      <form className='Enriquecimento-titulo'>
          <label>
            ATIVIDADE
            <p>
            <input type="text" name="text" className='atividade' />
            </p>
          </label>
         </form>
         <form className='App-atividade'>
        <label>
            DESCRIÇÃO
            <p>
              <p>
            <input type="text" name="text" className='descrição' />
            </p>
             </p>
          </label>
          </form> 
          <form className='App-descrição'></form>
          <form className='Enriquecimento-data'>
            <label>
              DATA
              <p>
                <p>
                <input type="date" name="date" className='data' />
              </p>
              </p>
            </label>
          </form>
          
          </div> 
          
          
          
          
  );
}

export default App;