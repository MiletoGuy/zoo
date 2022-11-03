import { useState } from "react"
import Modal from 'react-modal';
import './Cadastroanimal.css';

Modal.setAppElement('#root')

function CadastroAnimal() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function OpenModal() {
    setIsOpen(true)
  }

   function CloseModal() {
    setIsOpen(false)
   }

   const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
   }

  return (
    <div className='app'>

      <header className="logo">
        <img src="/imagens/logozoocasc.jpg" className="img-logo" />
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
      
      <div className="cadastro">
        <button className="OpenModal">Cadastro espécie e identificação</button>
        <modal
        isOPen={modalIsOpen}
        onRequestClose={CloseModal}
        contentLabel="Exemple modal"
        overLayClassName="modal-overlay"
        className="modal-content"
        style={customStyles}
        ><h2>Cadastro de nova espécie!</h2>
          <button onClick={CloseModal}>x</button>
          <form action="src/pages/CadastroAnimal/index.jsx">
            <input type="text" placeholder="Espécie" />
            <input type="text" placeholder="Nome Cientifico" />
            <p></p>
            <input type="text" placeholder="Tipo identificação" />
          </form>
        </modal>
      </div>
   
    </div>
    
  );
}

export default CadastroAnimal;
