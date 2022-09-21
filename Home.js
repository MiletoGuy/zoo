import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src="/imagens/logocascavel.png" className="App-logo" alt="logo" />
        <p>
      
        </p>
      </header>
      <form className='App-titulo'>
          <label>
            Usuario
            <p>
            <input type="email" name="name" className='usuario' />
            </p>
          </label>
         </form>
         <form className='App-senha'>
        <label>
            Senha
            <p>
              <p>
            <input type="password" name="name" className='senha' />
            </p>
             </p>
          </label>
          </form> 
          <input type="submit" value="Entrar" className='entrar' />
          </div> 
          
          
  );
}

export default App;