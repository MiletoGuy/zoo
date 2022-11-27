import './FichaAnimal.css';

function FichaAnimal() {
    return (
        <div className='app'>
           
            <div id="cabecalho">
               {/*  <img src="public/images/LogoZooCascavel.png"></img> */}
                <div id="header">
                </div>
                <ul id="navigation">
                    <select name="opcoes" id="login-select"size="1">
                        <option value="">
                            <b> NatalinoPinto@gmail.com </b>
                        </option>
                        <option value="">
                            <b>Sair</b>
                        </option>
                    </select>
                </ul>
            </div>
            <table className="rodape">
            <tr>
                <td id="consultar-animal">
                    <span>Consultar Animal</span>
                </td>
                <td id="voltar">
                    <span>Voltar</span>
                </td>
            </tr>
            </table>
            <br>
            </br>
            <table className="formulario" id="ficha-bondie">
                <tr>
                    <td colspan="6" id="titulo-tabelas">
                        <span>Ficha da Blondie</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="codigo_bondie">Código</label>
                        <br></br>
                        <input type="text" value="123456789012347" id="codigo-bondie" name="codigo_bondie" />
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
                        <input type="text" value="12 anos" name="idade" />
                    </td>
                    <td>
                        <label for="sexo">Sexo</label>
                        <br></br>
                        <input type="text" value="F" name="sexo" />
                    </td>
                    <td>
                        <label for="dt_entrada">Data de Entrada</label>
                        <br></br>
                        <input type="text" value="01/07/2017" name="dt_entrada" />
                    </td>
                </tr>
                <tr>
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
                <tr>
                    <td id="titulo-tabelas">
                        <span>Nutrição Alimentar</span>
                    </td>
                </tr>
                <tr id="nutricao-linha">
                    <td>
                        <select name="opcoes" id="cardapio-button"size="1">
                            <option value="">
                                Cardapio Semanal
                            </option>
                        </select>
                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <table className="formulario" id="historico-clinico">
                <tr>
                    <td id="titulo-tabelas"> <span> Histórico Clínico </span> </td>
                    <td colspan="2" id="titulo-adc1">
                        <span> + Adicionar </span>
                    </td>
                </tr>
                <tr className="tr-formulario" id="linha-colorida">
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
                        {/* <img src="public/images/clips.png" alt=""></img> */}
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
                        {/* <img src="public/images/clips.png" alt=""></img> */}
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
                       {/*  <img src="public/images/clips.png" alt=""></img> */}
                    </td>
                </tr>
                <tr className="tr-formulario" id="linha-colorida">
                    <td colspan="4">

                    </td>
                </tr>
                <tr className="tr-formulario">
                    <td colspan="4" id="titulo-most">
                        <span>Mostrar +</span>
                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <table className="formulario" id="historico-etimologico">
                <tr>
                    <td id="titulo-tabelas"> <span>Historico Etimologico</span></td>
                    <td colspan="4" id="titulo-adc2">
                        <span> + Adicionar </span>
                        </td>
                </tr>
                <tr className="tr-formulario" id="linha-colorida">
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
            </table>
            <br></br>
            <br></br>
            <table className="formulario" id="">
                <tr>
                    <td id="titulo-tabelas"><span>Enriquecimento Ambiental</span></td>
                    <td id="titulo-adc3">
                        <span>+ Adicionar</span>
                        {/* <img src="public/images/calendario.png" width="50px" height="38px"></img> */}
                    </td>
                </tr>
                <tr className="enriquecimento-tr">
                    <td>
                        <button className="botao-enriquecimento" id="btn-enriquecimento1">Bola de Pano 03/08/2022</button>
                    </td>
                    <td>
                        <button className="botao-enriquecimento" id="btn-enriquecimento2">Abobora de Carne 21/07/2022</button>
                    </td>
                </tr>
            </table>

            <div className='intero'>
                <div className='tit'>
                    <t1 className="titulo">Histórico etimologico</t1>
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
                        <input className="campooo"></input>
                    </div>
                    <div className="campo">
                        <label className="campoo">Responsável:</label>
                        <input className="campooo"></input>
                    </div>
                </div>
                <div className="campo2">
                        <label className="campoo">Observações:</label>
                        <input className="campob"></input>
                </div>
                <div className='butt'>
                    <button className='but'>Adicionar</button>
                </div>
            </div>

        </div>
        
    );
}

export default FichaAnimal;

