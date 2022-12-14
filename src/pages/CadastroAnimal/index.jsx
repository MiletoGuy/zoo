import './Cadastroanimal.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Modal from '@mui/material/Modal'

function CadastroAnimal() {
    const [racas, setRacas] = useState('')
    const [apelido, setApelido] = useState('')
    const [tipoIdentificacao, setTipoIdentificacao] = useState('')
    const [identificacao, setIdentificacao] = useState('')
    const [raca, setRaca] = useState('')
    const [peso, setPeso] = useState('')
    const [sexo, setSexo] = useState('')
    const [origem, setOrigem] = useState('')
    const [entrada, setEntrada] = useState('')
    const [nomeComum, setNomecomum] = useState('')
    const [nomeCientifico, setNomeCientifico] = useState('')
    const [especie, setEspecie] = useState('')
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (racas.map(r => {
            return r.nomeComum
        }).includes(raca)) {
            let r = racas.find(a => a.nomeComum === raca)
            axios.post('http://localhost:3001/animais', {
                    apelido: apelido,
                    origem: origem,
                    sexo: sexo,
                    tipoIdentificacao: tipoIdentificacao,
                    peso: peso,
                    identificacao: identificacao,
                    dataadmissao: entrada,
                    id_funcionario: window.sessionStorage.getItem('userId'),
                    raca: r.id
                }, {
                    headers: {
                        'x-access-token': window.sessionStorage.getItem('token')
                    }
                }
            )
                .then(res => alert("Animal cadastrado com sucesso"))
                .catch(err => console.log(err))
        } else return alert("Raça não cadastrada")
        setApelido('')
        setTipoIdentificacao('')
        setIdentificacao('')
        setRaca('')
        setPeso('')
        setSexo('')
        setOrigem('')
        setEntrada('')
    }

    const getRaca = () => {
        axios.get('http://localhost:3001/racas', {
                headers: {
                    'x-access-token': window.sessionStorage.getItem('token')
                }
            }
        )
            .then(res => setRacas(res.data.response.racas))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getRaca()
    }, [])

    const navHome = () => {
        navigate('/home')
    }

    const navFiltro = () => {
        navigate('/filtro')
    }

    const navCadastroAnimal = () => {
        navigate('/cadastroanimal')
    }

    const cadastrar = () => {
        console.log(nomeComum,nomeCientifico,especie)
        axios.post('http://localhost:3001/racas', {
                nomeComum: nomeComum,
                nomeCientifico: nomeCientifico,
                especie: especie,
                expectativaDeVida: '',
                estadoConservacao: ''
            }, {
                headers: {
                    'x-access-token': window.sessionStorage.getItem('token')
                }
            }
        )
            .then(res => alert("Raça cadastrada com sucesso"))
            .catch(err => console.log(err))
        setNomecomum('')
        setNomeCientifico('')
        setEspecie('')
        handleClose()
        getRaca()
    }

    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <header className="logo">

                    <img src="/imagens/logozoocasc.jpg" className="img-logo" alt="img-zoo" onClick={navHome}/>
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
                        <input type="text" placeholder='...' className='search' required
                               onChange={e => setApelido(e.target.value)} value={apelido}/>
                    </div>
                    <div className="bal">
                        <label className="lab">Identificação</label>
                        <input type="text" placeholder='chip/anilha' className='search' required
                               onChange={e => setTipoIdentificacao(e.target.value)} value={tipoIdentificacao}/>
                    </div>
                    <div className="bal">
                        <label className="lab">Código</label>
                        <input type="text" placeholder='...' className='search' required
                               onChange={e => setIdentificacao(e.target.value)} value={identificacao}/>
                    </div>
                </div>

        <div className="barrapesquisa">
          <div className="bal">
            <label className="lab">Raça</label>
            <input type="text" placeholder='...' className='search' required
              onChange={e => setRaca(e.target.value)} value={raca} />
          </div>
          <div className="bal">
            <label className="lab">Peso</label>
            <input type="number" placeholder='...' className='search' required
              onChange={e => setPeso(e.target.value)} value={peso} />
          </div>
          <div className="bal">
            <label className="lab">Sexo</label>
            <input type="text" placeholder='MACHO/FEMEA' className='search' required
              onChange={e => setSexo(e.target.value)} value={sexo} />
          </div>
        </div>
        <div className="barrapesquisa">
          <div className="bal">
            <label className="lab">Cidade Origem</label>
            <input type="text" placeholder='...' className='search' required
              onChange={e => setOrigem(e.target.value)} value={origem} />
          </div>
          <div className="bal">
            <label className="lab">Data de entrada</label>
            <input type="text" placeholder='AAAA/MM/DD' className='search' required
              onChange={e => setEntrada(e.target.value)} value={entrada} />
          </div>
        </div>
        <div className="add">
          <button className="adicionar">Cadastrar</button>
        </div>
        <p></p>
      </form>
      <div className="cadastro">
        <button className="cadastrar" onClick={handleOpen}>Cadastrar uma nova especie</button>
      </div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fundo">
          <div>
            <div className="bal">
              <label className="lab">Nova Espécie</label>
              <input type="text" placeholder='...' className='search' />
            </div>
            <div className="nov">
              <label className="lab">Nome Cientifíco</label>
              <input type="text" placeholder='...' className='search' />
            </div>
            <div className="bo"><button className="especie" onClick={cadastrar}>Cadastrar</button></div>
          </div>
        </div>
      </Modal>
    </div>
    );
}


export default CadastroAnimal;
