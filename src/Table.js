import React from 'react';
import './Filtro.css';

const Table = ({ data }) => {

    return (
        <table className='tabela'>
            <tbody className='tbody'>
                <tr className='tr1'>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Email</th>
                </tr>
                {data.map((item) => (
                <tr key={item.id} className='tr2'>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th>{item.surname}</th>
                    <th>{item.email}</th>
                </tr>
                ))}

            </tbody>
        </table>
    )

}

export default Table