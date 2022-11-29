import './Perfil.css';
import {useNavigate} from "react-router-dom";


function Perfil2() {

    const navigate = useNavigate()

    const navCadastroAnimal = () => {
        navigate('/cadastroanimal')
    }

    const navHome = () => {
        navigate('/home')
    }

    const navFiltro = () => {
        navigate('/filtro')
    }



    return (
        <div className='app'>
            <header className="logo">
                <img src="/imagens/logozoocasc.jpg" className="img-logo" alt="logo-zoo" onClick={navHome}/>
                <div className="conta">
                    <button className="email">{window.sessionStorage.getItem('userName')}</button>
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
            </header>

                <div className="listaa">
                    <div className="campo">
                        <label className="campoo">Nome:</label>
                        <div className="campooo">{window.sessionStorage.getItem('userName')}</div>
                    </div>
                    <div className="campo">
                        <label className="campoo">Email:</label>
                        <div className="campooo">{window.sessionStorage.getItem('userName')}</div>
                    </div>
                    <div className="campo">
                        <label className="campoo">Cadastro:</label>
                        <div className="campooo">{window.sessionStorage.getItem('userName')}</div>
                    </div>
                    <div className="campo">
                        <label className="campoo">Acesso:</label>
                        <div className="campooo">{window.sessionStorage.getItem('userName')}</div>
                    </div>
                    <div className="campo">
                        <label className="campoo">Telefone:</label>
                        <div className="campooo">{window.sessionStorage.getItem('userName')}</div>
                    </div>
                    <div className="campo">
                        <label className="campoo">Endereço:</label>
                        <div className="campooo">{window.sessionStorage.getItem('userName')}</div>
                    </div>
                </div>
                <div className='butt'>
                    <button className='but'>Editar</button>
                </div>
        </div>
    );
}

export default Perfil2;
