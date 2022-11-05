import './cadmunicipal.css';

function CadMunicipal() {
    return (
        <div className='app'>

        <header className="logo">
          <img src="/imagens/cadmuni.png" className="img-logo" />
          <div className="conta">
          <button className="email">email</button>
          </div>
        </header>
        
        <header className="barra">
          <button className="consultani">Cadastrar Animal</button>
        </header>
        <header className="titulo">
            <h2 class="title1">CADASTRO MUNICIPAL DE COMÉRCIO DE ANIMAIS – CMCA</h2>
            <h2 class="title1">(Lei Ordinária 6329/2014)</h2>
        </header>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Número do Cadastro</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <br></br>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Nome Fantasia</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Especie</label>
                <select type="text" className='search'>
                    <option value="valor0"></option>
                    <option value="canino">Canino</option>
                    <option value="felino">Felino</option>
                </select>
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Razão Social</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">CNPJ</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Número de Alvará</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Responsável (criador)</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">CPF</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">CEP</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Rua</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Número</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Complemento</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Bairro</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Telefone</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Celular</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Responsável Técnico</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">CRMV/PR Nº</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Observações</label>
                <input type="text" placeholder='...' className='search2' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Data</label>
                <input type="date" placeholder='...' className='search' />
            </div>
        </div>
        <div class="ass">Assinatura do Responsavel</div>
        <hr></hr>
        </div>
    );
  }
  
  export default CadMunicipal;