import {Route, BrowserRouter, Routes} from "react-router-dom"
import CadastroAnimal from "../pages/CadastroAnimal"
import Logado from "../pages/Logado";
import Home from "../pages/home";
import Filtro from "../pages/Filtro";
import HistoricoEtimologico from "../pages/HistoricoEtimologico";
import AutServMed from "../pages/AutServMed";
import CadastroMunicipal from "../pages/CadastroMunicipal";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home/>} path="/" exact/>
                <Route element = { <Logado/>} path="/logado"/>
                <Route element = { <Filtro/>} path="/filtro"/>
                <Route element = { <HistoricoEtimologico/>} path="/historicoetimologico"/>
                <Route element = { <CadastroAnimal/>} path="/cadastroanimal"/>
                <Route element = { <AutServMed/> } path="/autservmed"/>
                <Route element = { <CadastroMunicipal/> } path="/cadastromunicipal"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas