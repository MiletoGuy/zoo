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
                <tr key={item.id} className='tr2'>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.surname}</td>
                    <td>{item.id}</td>
                </tr>
                ))}

            </tbody>
        </table>
    )

}

export default Table