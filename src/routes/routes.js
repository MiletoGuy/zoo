import {Route, BrowserRouter, Routes} from "react-router-dom"
import CadastroAnimal from "../pages/CadastroAnimal"
import Logado from "../pages/Logado";
import Home from "../pages/home/Home";
import Filtro from "../pages/Filtro";
import HistoricoEtimologico from "../pages/HistoricoEtimologico";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home/>} path="/" exact/>
                <Route element = { <Logado/>} path="/logado"/>
                <Route element = { <Filtro/>} path="/filtro"/>
                <Route element = { <HistoricoEtimologico/>} path="/historicoetimologico"/>
                <Route element = { <CadastroAnimal/>} path="/cadastroanimal"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas