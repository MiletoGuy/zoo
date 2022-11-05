import './Cadastroanimal.css';


function CadastroAnimal() {

  return (
    <div className='app'>

      <header className="logo">
        <img src="/imagens/logozoocasc.jpg" className="img-logo"  alt="img-zoo"/>
        <div className="conta">
        <button className="email">email</button>
        </div>
      </header>
      <header className="barra">
        <button className="consultani">Cadastrar Animal</button>
      </header>
      <header className="titulo">
        <t1 className="consultaranimal">
          Cadastrar Animal 
        </t1>
        <p></p>
        <t2 className="digite">
        Preencha os campos de acordo com as informações do animal
        </t2>
      </header>

      <div className="barrapesquisa">
        <div className="bal">
          <label className="lab">Apelido</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Idade</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Sexo</label>
          <input type="text" placeholder='...' className='search' />
        </div>
      </div>

      <div className="barrapesquisa">
        <div className="bal">
          <label className="lab">Identificação</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Codigo</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Habitat</label>
          <input type="text" placeholder='...' className='search' />
        </div>
      </div>

      <div className="barrapesquisa">
        <div className="bal">
          <label className="lab">Especie</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Status</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Data de entrada</label>
          <input type="text" placeholder='...' className='search' />
        </div>
      </div>
      <div className="add"><button className="adicionar">Cadastrar</button></div>
      <p></p>
      <div className="cadastro"><button className="cadastrar">Cadastrar uma nova especie</button></div>  
       {/* <Modal isOpen>
        <h1>desgraça</h1>
       </Modal> */}
       </div>
    
  );

    }


export default CadastroAnimal;
