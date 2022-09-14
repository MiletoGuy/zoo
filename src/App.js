import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/imagens/logocascavel.png" className="App-logo" alt="logo" />
        <p>
         LOGIN
        </p>
      </header>
      <form className='App-titulo'>
          <label>
            Usuario
            <p>
            <input type="email" name="name" className='input' />
            </p>
          </label>
         
        <label>
            Senha
            <p>
            <input type="password" name="name" className='input' />
            </p>
          </label>
          </form> 
          <input type="submit" value="Entrar" className='entrar' />
          </div> 
          
          
  );
}

export default App;
