import './login.css';
import React, {useState} from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Login() {

    const qs = require('qs')
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', qs.stringify({'email': email, 'senha': senha}))
            .then(res => {
                const token = res.data.token
                window.sessionStorage.setItem('userId', res.data.userId)
                window.sessionStorage.setItem('userEmail', res.data.userEmail)
                window.sessionStorage.setItem('token', token)
                console.log(res)
                if (res.data.auth === true) navigate('/home')
                else alert("Login inválido!")
            })
            .catch(err => {
                if(err.response.data.auth === false) alert("Login inválido!")
                else console.log(err)

            })
        setEmail('')
        setSenha('')
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src="/imagens/logocascavel.png" className="App-logo" alt="logo"/>
                <p>
                    LOGIN
                </p>
            </header>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Usuario
                    <p>
                        <input type="email" name="name" className='usuario' required onChange={(e) => setEmail(e.target.value)} value={email} />
                    </p>
                </label>
                <label>
                    Senha
                    <p>
                        <p>
                            <input type="password" name="name" className='senha' required onChange={(e) => setSenha(e.target.value)} value={senha} />
                        </p>
                    </p>
                </label>
                <input type="submit" value="Entrar" className='entrar'/>
            </form>
            <div className='planejado'>Esqueceu sua senha?</div>
        </div>


    );
}

export default Login;
