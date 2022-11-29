import {Route, BrowserRouter, Routes} from "react-router-dom"
import CadastroAnimal from "../pages/CadastroAnimal"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Filtro from "../pages/Filtro";
import Perfil from "../pages/Perfil";
import Perfil2 from "../pages/Perfil2";
import HistoricoEtimologico from "../pages/HistoricoEtimologico";
import AutServMed from "../pages/AutServMed";
import CadastroMunicipal from "../pages/CadastroMunicipal";
import FichaAnimal from "../pages/FichaAnimal";


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Login/>} path="/" exact/>
                <Route element = { <Home/>} path="/home"/>
                <Route element = { <Filtro/>} path="/filtro"/>
                <Route element = { <HistoricoEtimologico/>} path="/historicoetimologico"/>
                <Route element = { <CadastroAnimal/>} path="/cadastroanimal"/>
                <Route element = { <AutServMed/> } path="/autservmed"/>
                <Route element = { <CadastroMunicipal/> } path="/cadastromunicipal"/>
                <Route element = { <FichaAnimal/> } path="/fichaanimal"/>
                <Route element = { <Perfil/> } path="/perfil"/>
                <Route element = { <Perfil2/> } path="/perfil2"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas