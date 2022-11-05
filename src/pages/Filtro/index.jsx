import {useEffect, useState} from "react"
import './Filtro.css';
import Table from "./Table";
import axios from 'axios'

function Filtro() {
    const [animais, setAnimais] = useState('')
    const [query, setQuery] = useState("");
    const keys = ["apelido", "identificacao", "raca", "sexo", "especie", "nomeCientifico"]

    const search = (data) => {
        return data.filter(
            (item) =>
                keys.some((key) => item[key].toString().toLowerCase().includes(query.toLowerCase()))
        )
    }

    const getAnimais = () => {
        axios.get('http://localhost:3001/animais', {
                headers: {
                    'x-access-token': window.sessionStorage.getItem('token')
                }
            }
        )
            .then(res => setAnimais(res.data.response.animais))
            .catch(err => console.log(err))
    }


    const teste = () => {
        console.log(animais)
    }

    useEffect(() => {
        getAnimais()
    }, [])

    return (
        <div className='app'>

            <header className="logo">
                <img src="/imagens/logozoocasc.jpg" className="img-logo" alt="logo-zoo"/>
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
                <input type="text" placeholder='Procurar...' className='search'
                       onChange={e => setQuery(e.target.value)}/>
                <div className="add">
                    <button className="adicionar" onClick={teste}>Adicionar</button>
                </div>
            </div>
            <div className="tabela-div">
                <Table data={search(Object.values(animais))}></Table>
            </div>

        </div>
    );
}

export default Filtro;
