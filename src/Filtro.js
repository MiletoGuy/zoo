import { useState } from "react"
import './Filtro.css';
import Table from "./Table";
import { Users } from "./users"

function App() {
  const [query, setQuery] = useState("");

const keys = ["name", "surname", "email"]

const search = (data) => {
  return data.filter(
    (item)=>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
};

  return (
    <div className='app'>

      <header className="logo">
        <img src="/imagens/logozoocasc.png" className="img-logo" />
        <div className="conta">
        <button className="email">email</button>
        </div>
      </header>
      <header className="barra">
        <button className="consultani">Consultar Animal</button>
      </header>
      <header className="titulo">
        <t1 className="consultaranimal">
          Consultar Animal
        </t1>
        <p></p>
        <t2 className="digite">
          Digite o apelido ou código do animal
        </t2>
      </header>

      <div className="barrapesquisa">
        <input type="text" placeholder='Procurar...' className='search' onChange={e=> setQuery(e.target.value)} />
        <button className="pesquisar">Pesquisar</button>
        <div className="add"><button className="adicionar">Adicionar +</button></div>
      </div>
    <div className="tabela-div">
      <Table data={search(Users)}></Table>
    </div>

    </div>
  );
}

export default App;
