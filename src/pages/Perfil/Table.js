import React from 'react';
import './Perfil.css';

const Table = ({ data }) => {

    return (
        <table className='tabela'>
            <thead>
                <tr className='tr1'>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Acesso</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Cadastro</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {data.map((item) => (
                <tr key={item.cadastro} className='tr2'>
                    <td>{item.nome}</td>
                    <td>{item.email}</td>
                    <td>{item.acesso}</td>
                    <td>{item.telefone}</td>
                    <td>{item.endereco}</td>
                    <td>{item.cadastro}</td>
                </tr>
                ))}

            </tbody>
        </table>
    )

}

export default Table