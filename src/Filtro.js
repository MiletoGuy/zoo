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
      <input type="text" placeholder='Procurar...' className='search' onChange={e=> setQuery(e.target.value)} />

    <Table data={search(Users)}></Table>

    </div>
  );
}

export default App;
