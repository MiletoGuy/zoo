import React from 'react';
import './Filtro.css';

const Table = ({ data }) => {

    return (
        <table className='tabela'>
            <thead>
                <tr className='tr1'>
                    <th>Apelido</th>
                    <th>Código</th>
                    <th>Indentificação</th>
                    <th>Especie</th>
                    <th>Nome cientifico</th>
                    <th>Sexo</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {data.map((item) => (
                <tr key={item.identificacao} className='tr2'>
                    <td>{item.apelido}</td>
                    <td>{item.identificacao}</td>
                    <td>{item.tipoIdentificacao}</td>
                    <td>{item.especie}</td>
                    <td>{item.nomeCientifico}</td>
                    <td>{item.sexo}</td>
                </tr>
                ))}

            </tbody>
        </table>
    )

}

export default Table