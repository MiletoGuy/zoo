import './autservmed.css';

function AutServMed() {
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
            <h2 class="title1">AUTORIZAÇÃO DE SERVIÇOS MÉDICOS VETERINÁRIOS:</h2>
            <h2 class="title1">PROCEDIMENTO CIRÚRGICO DE CASTRAÇÃO</h2>
          <t1 className="consultaranimal">Informações do responsavel pelo animal</t1>
        </header>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Nome</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">CPF</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">RG</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">CAD. Único</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <p></p>
        <h2 class="title2 subtitle">Endereço</h2>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Cidade</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Estado</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Rua</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Bairro</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">CEP</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Número</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <h2 class="title2">Informações do Animal</h2>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Nome</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Idade</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Raça</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Especie</label>
                <select type="text" className='search'>
                    <option value="valor0"></option>
                    <option value="canino">Canino</option>
                    <option value="felino">Felino</option>
                </select>
            </div>
            <div className="bal">
                <label className="lab">Sexo</label>
                <select type="text" className='search'>
                    <option value="valor0"></option>
                    <option value="macho">Macho</option>
                    <option value="femea">Fêmea</option>
                </select>
            </div>
            <div className="bal">
                <label className="lab">Porte</label>
                <select type="text" className='search'>
                    <option value="valor0"></option>
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                </select>
            </div>
        </div>
        <h2 class="title2 subtitle">Pelagem</h2>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Cor</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Pelagem</label>
                <select type="text" className='search'>
                    <option value="valor0"></option>
                    <option value="valor1">Curto</option>
                    <option value="valor2">Longo</option>
                </select>
            </div>
        </div>
        <h2 class="title2">Informações do Procedimento</h2>
        <h2 class="title2 subtitle">Medico(a)/Veterinario(a)</h2>
        <div className="barrapesquisa">
            <div className="bal">
                <label className="lab">Nome</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">CRMV-PR</label>
                <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bal">
                <label className="lab">Data</label>
                <input type="text" placeholder='...' className='search' />
            </div>
        </div>
        <h2 class="title2">Permissões e Assinaturas</h2>
        <div class="checkbox2">
            <input class="checkbox" type="checkbox"></input>Concordo com o OSH a ser realizada no animal
        </div>
        <div class="checkbox2">
            <input class="checkbox" type="checkbox"></input>Concordo com a Orquieciomia a ser realizada no animal
        </div>
        <div class="checkbox2">
            <input class="checkbox" type="checkbox"></input>Autorizo o profissional a examinar e/ou tratar e/ou proceder aos testes diagnósticos
            complementares que julgar necessários com base no exame clínico do animal e testes relacionados.
        </div>
        <div class="checkbox2">
            <input class="checkbox" type="checkbox"></input>Autorizo a aplicação de sedativos e/ou anestésicos necessários para proceder aos testes ou
            tratamentos, inclusive cirúrgicos, declarando que fui informado/a que estes testes e/ou tratamentos
            podem apresentar complicações, mesmo quando aplicados com perícia e prudência.

        </div>
        <div class="checkbox2">
            <input class="checkbox" type="checkbox"></input>Caso venha a ocorrer à morte do animal, dou permissão para a realização de necropsia.
        </div>
        <div class="ass">Assinatura do Responsavel</div>
        <hr></hr>
        
        
        
        
        </div>
  
        
            
            
    );
  }
  
  export default AutServMed;