import './FichaAnimal.css';
import {useNavigate} from "react-router-dom";

function FichaAnimal() {

    const navigate = useNavigate()

    const navHome = () => {
        navigate('/home')
    }

    const navFiltro = () => {
        navigate('/filtro')
    }

    return (
        <div className='app'>

           <header className="logo">
                <img src="/imagens/logozoocasc.jpg" className="img-logo" alt="logo-zoo" onClick={navHome}></img>
                <div className="conta">
                    <button className="email">{window.sessionStorage.getItem('userEmail')}</button>
                </div>
            </header>
            <header className="barra">
                <button className="consultani" onClick={navFiltro}>Consultar Animal</button>
            </header>
            
            <table className="formulario" id="ficha-animal">
                <tr class="titulo">
                    Ficha Animal
                </tr>
                <tr className="conteudo">
                    <td>
                        <label class="conteudo-esquerda" for="codigo_bondie">Código</label>
                        <br></br>
                        <input type="text" value="123456789012347" id="codigo-bondie" name="codigo_bondie" />
                         {/*Colocar Imagem Interrogacao */}
                    </td>
                    <td>
                        <label for="apelido">Apelido</label>
                        <br></br>
                        <input type="text" value="Blondie" name="apelido" />
                    </td>
                    <td>
                        <label for="identif">Identificação</label>
                        <br></br>
                        <input type="text" value="Micro-Chip" name="identif" />
                    </td>
                    <td>
                        <label for="idade">Idade</label>
                        <br></br>
                        <input type="text" value="12 anos" size="10" name="idade" />
                    </td>
                    <td>
                        <label for="sexo">Sexo</label>
                        <br></br>
                        <input type="text" value="Macho" size="8" name="sexo" />
                    </td>
                    <td>
                        <label for="dt_entrada">Data de Entrada</label>
                        <br></br>
                        <input type="text" value="01/07/2017" name="dt_entrada" />
                    </td>
                </tr>
                <tr className="conteudo">
                    <td>
                        <label for="especie">Espécie</label>
                        <br></br>
                        <input type="text" value="Onça" name="especie" />
                    </td>
                    <td>
                        <label for="nm_cientifico">Nome Científico</label>
                        <br></br>
                        <input type="text" value="Panthera Onça" name="nm_cientifico" />
                    </td>
                    <td>
                        <label for="status">Status</label>
                        <br></br>
                        <input type="text" value="Normal" name="status" />
                    </td>
                    <td colspan="3">
                        <label for="habitat">Habitat</label>
                        <br></br>
                        <input type="text" value="12-C" name="habitat" />
                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <table className="formulario" id="nutricao-alimentar">
                <tr className="titulo">
                    Nutrição Alimentar  
                </tr>
                <br></br>
                <tr id="nutricao-linha">
                    <td>
                        <button className="botao-nutricao" id="cardapio-button"> Cardapio Semanal</button>
                        <img src="/imagens/seta-baixo.png" className="img-setabaixo" alt="seta para baixo"></img>
                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <table className="formulario" id="historico-clinico">
                <tr className="titulo">
                    <td id="titulo-tabelas"> <span> Histórico Clínico </span> </td>
                    <td colspan="2" id="titulo-adc1">
                        <button className="botao-adicionar">+ Adicionar</button>
                    </td>
                </tr>
                <br></br>
                <tr className="primeiro-tr" id="linha-colorida">
                    <td>
                        Consulta
                    </td>
                    <td>
                        Data
                    </td>
                    <td>
                        Descrição
                    </td>
                    <td >
                        Anexo
                    </td>
                </tr>
                <tr className="tr-formulario">
                    <td> 
                        Internamento
                    </td>
                    <td>
                        01/02/2022
                    </td>
                    <td>
                        Internamento devido a intoxicação alimentar
                    </td>
                    <td>
                        <img src="/imagens/clips.png" className="img-anexo" alt="clips"></img>
                    </td>
                </tr>
                <tr className="tr-formulario" id="linha-colorida">
                    <td>
                        Check up
                    </td>
                    <td>
                        09/01/2022
                    </td>
                    <td>
                        Consulta de rotina
                    </td>
                    <td>
                        <img src="/imagens/clips.png" className="img-anexo" alt="clips"></img>
                    </td>
                </tr>
                <tr className="tr-formulario">
                    <td>
                        Consulta
                    </td>
                    <td>
                        23/12/2021
                    </td>
                    <td>
                        Consulta para averiguar descoloramento do pelo
                    </td>
                    <td>
                        <img src="/imagens/clips.png" className="img-anexo" alt="clips"></img>
                    </td>
                </tr>
                <tr className="tr-formulario" id="linha-colorida">
                    <td colspan="4">
                    </td>
                </tr>
                <tr>
                    <td colspan="4" className="texto-mostrar">
                       <button className="botao-mostrar">Mostrar +</button>
                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <table className="formulario" id="historico-etimologico">
                <tr className="titulo">
                    <td id="titulo-tabelas"> <span>Historico Etimologico</span></td>
                    <td colspan="4" id="titulo-adc2">
                        <button className="botao-adicionar">+ Adicionar</button>
                    </td>
                </tr>
                <br></br>
                <tr className="primeiro-tr" id="linha-colorida">
                    <td>
                        Data
                    </td>
                    <td>
                        Horario
                    </td>
                    <td>
                        Comportamento
                    </td>
                    <td>
                        Responsavel
                    </td>
                </tr>
                <tr className="tr-formulario">
                    <td>
                        01/02/2022
                    </td>
                    <td>
                        14:25
                    </td>
                    <td>
                        Parado Ativo
                    </td>
                    <td>
                        Josias
                    </td>
                </tr>
                <tr className="tr-formulario" id="linha-colorida">
                    <td>
                        09/01/2022
                    </td>
                    <td>
                        16:45
                    </td>
                    <td>
                        Interação Social Positiva
                    </td>
                    <td>
                        Carlos
                    </td>
                </tr>
                <tr>
                    <td colspan="4" className="texto-mostrar">
                       <button className="botao-mostrar">Mostrar +</button>
                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <table className="formulario" id="">
                <tr className="titulo">
                    <td id="titulo-tabelas">Enriquecimento Ambiental</td>
                    <td id="titulo-adc3">
                        <button className="botao-adicionar">+ Adicionar</button>
                        {/* <img src="public/images/calendario.png" width="50px" height="38px"></img> */}
                    </td>
                </tr>
                <br></br>
                <tr className="enriquecimento-tr">
                    <td>
                        <button className="botao-enriquecimento" id="btn-enriquecimento1">Bola de Pano 03/08/2022</button>
                    </td>
                    <td>
                        <button className="botao-enriquecimento" id="btn-enriquecimento2">Abobora de Carne 21/07/2022</button>
                    </td>
                </tr>
            </table>
            <br></br>
            <div className='modal-nutricao-alimentar'>
                <div className="modal-content">
                    <span className="close-enriquecimento">&times;</span>
                    <div className='nutricao'>
                        <div className='tit'>
                            <t1 className="titulo">Nutrição</t1>    
                        </div>
                        <div className='campo-dt'>
                            <label >Data Inicial:</label>
                            <input type="date"/>
                        </div>
                        <div className='campo-dt'>
                            <label >Data Final:</label>
                            <input type="date"/>
                        </div>
                        <div className='cardapio-adc'>
                            <button className="botao-cardapio-semanal" id="botao-novo-cardapio">Novo Cardapio Semanal 
                            <img src="/imagens/clips.png" className="img-anexo" alt="clips"></img></button>
                        </div>
                        <div className='botao-nutri'>
                            <button className="botao-enriquecimento-modal" >Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-historico-clinico'>
                <div className="modal-content">
                <span className="close-enriquecimento">&times;</span>
                <div className='historico-clinico'>
                    <div className='tit'>
                        <t1 className="titulo">Histórico Clínico</t1>    
                    </div>    
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Selecione o motivo da consulta</label>
                            <select className="campooo" name="" id="">
                                <option value="">Internamento</option>
                            </select>
                        </div>
                        <div className="campo">
                            <label className="campoo">Peso</label>
                            <input className="campooo"></input>
                        </div>
                        <div className="campo">
                            <label className="campoo">Diagnóstico</label>
                            <input className="campooo"></input>
                        </div>
                        <div className="campo">
                            <label className="campoo">Data</label>
                            <input className="campooo"></input>
                        </div>
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Motivo da Internação</label>
                            <textarea className="descricao" placeholder="Escreva o motivo da internação" name="descricao" rows="6" cols="60">
                                
                            </textarea>
                        </div>        
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Mv Referente</label>
                            <select className="campooo" name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className="listaa">
                        <div className="campo">
                        <table class="tg" >
                        <thead>
                        <tr>
                            <th class="tg-ov69">Monitoração /h</th>
                            <th class="tg-0lax">0</th>
                            <th class="tg-0lax">1</th>
                            <th class="tg-0lax">2</th>
                            <th class="tg-0lax">3</th>
                            <th class="tg-0lax">4</th>
                            <th class="tg-0lax">5</th>
                            <th class="tg-0lax">6</th>
                            <th class="tg-0lax">7</th>
                            <th class="tg-0lax">8</th>
                            <th class="tg-0lax">9</th>
                            <th class="tg-0lax">10</th>
                            <th class="tg-0lax">11</th>
                            <th class="tg-0lax">12</th>
                            <th class="tg-0lax">13</th>
                            <th class="tg-0lax">14</th>
                            <th class="tg-0lax">15</th>
                            <th class="tg-0lax">16</th>
                            <th class="tg-0lax">17</th>
                            <th class="tg-0lax">18</th>
                            <th class="tg-0lax">19</th>
                            <th class="tg-0lax">20</th>
                            <th class="tg-0lax">21</th>
                            <th class="tg-0lax">22</th>
                            <th class="tg-0lax">23</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="tg-0lax">F.C.:</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-1svo">F.R</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax">EtCO2</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-1svo">SpO2</td> 
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax">P.S</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-1svo">P.D</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax">P.M</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-ov69">Glicemia</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                        </tr>
                        </tbody>
                        </table>           
                        </div>
                    </div> 
                    <div className="listaa">
                        <div className="campo">
                        <table class="tg" >
                        <thead>
                        <tr>
                            <th class="tg-ov69">Medicação</th>
                            <th class="tg-0lax">Via de Administracao</th>
                            <th class="tg-0lax">Pasologia</th>
                            <th class="tg-0lax">Frequência</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                            <th class="tg-0lax">_/_ _:_</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="tg-0lax">F.C.:</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="8"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-1svo">F.R</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="8"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax">EtCO2</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="8"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-1svo">SpO2</td> 
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="8"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="1"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax">P.S</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="8"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-1svo">P.D</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="8"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax">P.M</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        <tr>
                            <td class="tg-ov69">Glicemia</td>
                            <td class="tg-0lax"><input className="campo-tabela" size="15"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="5"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="8"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                            <td class="tg-0lax"><input className="campo-tabela" size="3"></input></td>
                        </tr>
                        </tbody>
                        </table>           
                        </div>
                    </div>       
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Orientações:</label>
                            <textarea className="descricao" placeholder="Escreva as orientações" name="descricao" rows="6" cols="60">
                                
                            </textarea>
                        </div>        
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Evolução:</label>
                            <textarea className="descricao" placeholder="Escreva a evolução do quadro"  name="descricao" rows="6" cols="60">
                                
                            </textarea>
                        </div>        
                    </div>
                    <div className='botao-clinico'>
                        <button className="botao-enriquecimento-modal" >Atualizar Ficha</button>
                    </div>
                </div>
                </div>         
            </div>
            <div className="Adicionado-Sucesso">
                <div className="modal-content">
                    <span className="close-enriquecimento">&times;</span>
                    <div className='tit'>
                        <t1 className="titulo">Adicionado Com sucesso!</t1>    
                    </div>
                    <div className='campo-dt'>
                        <img src="/imagens/sucesso.png" className="img-sucesso" alt="Mensagem Sucesso"></img>
                    </div>
                </div>
            </div>
            <div className="modal-historico-etimologico">
                <div className="modal-content">
                <span className="close-enriquecimento">&times;</span>
                <div className='intero'>
                    <div className='tit'>
                        <t1 className="titulo">Histórico Etimologico</t1>
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Data:</label>
                            <input className="campooo"></input>
                        </div>
                        <div className="campo">
                            <label className="campoo">Horário:</label>
                            <input className="campooo"></input>
                        </div>
                        <div className="campo">
                            <label className="campoo">Comportamento:</label>
                            <select className="campooo" name="" id="">
                                <option value="PA">Parado Ativo</option>
                                <option value="Pi">Parado Inativo</option>
                                <option value="V1">Vocalização Alta</option>
                                <option value="V2">Vocalização Baixa</option>
                                <option value="IS+">Interação social positiva</option>
                                <option value="IS-">Interação social negativa</option>
                                <option value="M">Movimentando-se</option>
                                <option value="CM">Comportamento de manutenção</option>
                                <option value="IE">Interação com o enriquicemento</option>
                                <option value="F">Forragem</option>
                                <option value="D">Defecar</option>
                                <option value="EX">Exploratório</option>
                                <option value="ES">Estereotipado</option>
                                <option value="FU">Fuga</option>
                            </select>
                            
                        </div>
                        <div className="campo">
                            <label className="campoo">Responsável:</label>
                            <input className="campooo"></input>
                        </div>
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Observações:</label>
                            <textarea className="descricao" name="descricao" rows="6" cols="60">
                                
                            </textarea>
                        </div>     
                    </div>
                    <div className='butt'>
                        <button className="but">Adicionar</button>
                    </div>

                </div>
                </div>
            </div>
            <div className="modal-enriquecimento-Ambiental">
                <div className="modal-content">
                <span className="close-enriquecimento">&times;</span>
                <div className='intero'>
                    <div className='tit'>
                        <t1 className="titulo">Enriquecimento Ambiental</t1>
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Atividade:</label>
                            <input className="campooo"></input>
                        </div>
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Descrição:</label>
                            <textarea className="descricao" name="descricao" rows="6" cols="60">
                                
                            </textarea>
                        </div>
                    </div>
                    <div className="listaa">
                        <div className="campo">
                            <label className="campoo">Data:</label>
                            <input className="campooo"></input>
                        </div>
                        <div className="campo">
                            <label className="campoo">Interação:</label>
                            <select className="campooo" name="" id="">
                                <option value="">Boa</option>
                                <option value="">Média</option>
                                <option value="">Ruim</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='butt'>
                    <button className="but" >Adicionar</button>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default FichaAnimal;

