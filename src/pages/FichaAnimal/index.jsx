import './FichaAnimal.css';

function FichaAnimal() {
    return (
        <div className='app'>

           <header className="logo">
                <img src="/imagens/logozoocasc.jpg" className="img-logo" alt="logo-zoo"></img>
                <div className="conta">
                    <button className="email">{window.sessionStorage.getItem('userEmail')}</button>
                </div>
            </header>
            <header className="barra">
                <button className="consultani">Consultar Animal</button>
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
            <div id="modal-nutricao" className="modal">
                <div className="modal-content">
                    <span className="close-nutricao">&times;</span>
                    <table className="formulario-modal-enriquecimento">
                        <tr>
                            <td id="titulo-tabelas"> <span> Nutrição Alimentar </span> </td>
                        </tr>
                        <tr>
                            <td>
                            <label for="data-inicial">Data Inicial</label>
                            <br></br>
                            <input type="date"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label For="data-final">Data Final</label>
                            <br></br>
                            <input type="date" />
                            </td>
                        </tr>
                        <tr>
                            <td><button className="botao-cardapio-semanal" id="botao-novo-cardapio">Novo Cardapio Semanal 
                            <img src="/imagens/clips.png" className="img-anexo" alt="clips"></img></button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="botao-enriquecimento-modal" >Adicionar</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <br></br>    
            <div id="Modal-Historico_clinico">
                <table>
                    <tr>
                        <td>
                            Histórico Clínico
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Selecione o motivo da consulta
                            <select name="" id="">
                                <option value="">internamento</option>
                            </select>
                        </td>
                        <td>
                            Peso
                            <input type="text" name="" id="" value="32 Quilos"/>
                        </td>
                        <td>
                            Diagnóstico
                            <input type="text" name="" id="" value="Infecção Urinária"/>
                        </td>
                        <td>
                            Data
                            <input type="text" name="" id="" value=""/>
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            Motivo da Internação
                            <input type="text" name="" id="" value="Internamento devido a dores abdominais"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mv Referente
                            <input type="text" name="" id="" value=""/>
                        </td>
                    </tr>
                    <tr>
                        Monitoração/h
                    </tr>
                    <tr>
                        Medicação
                    </tr>
                    <tr>
                        <td>
                            Orientações
                            <input type="text"  name="" id="" value=""/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Evolução
                            <input type="text" name="" id="" value=""/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Exames Complementares    
                        </td>
                        <td>
                        +Adicionar 
                        </td>   
                    </tr>
                    <tr>
                        <td>
                            <button>Atualizar Ficha</button>
                        </td>
                    </tr>
                </table>          
            </div>
            <br/>
            <div id="modal-enriquecimento" class="modal">
                <div class="modal-content">
                <span class="close-enriquecimento">&times;</span>
                <table class="formulario-modal-enriquecimento" >
                    <tr>
                        <td id="titulo-tabelas" colspan="2"><span>Enriquecimento Ambiental</span></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="atividade">Atividade</label>
                            <br />
                            <input type="text" value="Bola de pano com interior com carne vermelha" id="atividade-ambiental" name="atividade" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <label for="descricao">Descrição</label>
                            <br />
                            <textarea id="descricao-ambiental" name="descricao" rows="6" cols="60">O Animal persegiu a bola de carne por 15 minutos após esse tempo, ele deitou e dormiu.</textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="data">Data</label>
                            <br />
                            <input type="text" value="21/03/2022" id="data-ambiental" name="data" />
                        </td>
                        <td align="left">
                            <label for="interacao">Interação</label>
                            <br />
                            <select name="interacao" id="interacao-ambiental"size="1">
                                <option value="">
                                    <b> Média </b>
                                </option>
                                <option value="">
                                    <b> Baixa </b>
                                </option>
                                <option value="">
                                    <b>Alta</b>
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button class="botao-enriquecimento-modal" >Adicionar</button>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
            <div className="Adicionado-Sucesso">

            </div>
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

