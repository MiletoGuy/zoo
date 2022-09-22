import React from 'react';

const Table = ({ data }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Email</th>
                </tr>
                {data.map((item) => (
                <tr key={item.id}>
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