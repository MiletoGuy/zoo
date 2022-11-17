import {useEffect, useState} from "react"
import './Perfil.css';
import Table from "./Table";
import axios from 'axios'
import {useNavigate} from "react-router-dom";


function Perfil() {
    
    const [animais, setAnimais] = useState('')
    const [query, setQuery] = useState("");
    const keys = ["nome", "email", "cadastro", "acesso", "telefone", "id_endereco"]
    const navigate = useNavigate()

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

    const navCadastroAnimal = () => {
        navigate('/cadastroanimal')
    }

    const navHome = () => {
        navigate('/home')
    }

    const navFiltro = () => {
        navigate('/filtro')
    }

    useEffect(() => {
        getAnimais()
    }, [])

    return (
        <div className='app'>
            <header className="logo">
                <img src="/imagens/logozoocasc.jpg" className="img-logo" alt="logo-zoo" onClick={navHome}/>
                <div className="conta">
                    <button className="email">{window.sessionStorage.getItem('userEmail')}</button>
                </div>
            </header>
            <header className="barra">
                <button className="consultani" onClick={navFiltro}>Consultar Animal</button>
                <button className="consultani2" onClick={navCadastroAnimal}>Cadastrar Animal</button>
            </header>
            <header className="titulo">
                <t1 className="consultaranimal">
                    Perfil
                </t1>
                <p></p>
                <t2 className="digite">
                    Digite email ou nome do usuario
                </t2>
            </header>
            <div className="barrapesquisa">
                <input type="text" placeholder='Procurar...' className='search'
                       onChange={e => setQuery(e.target.value)}/>
                <div className="add">
                    <button className="adicionar" onClick={navCadastroAnimal}>Adicionar</button>
                </div>
            </div>
            <div className="tabela-div">
                <Table data={search(Object.values(animais))}></Table>
            </div>
        </div>
    );
}

export default Perfil;
