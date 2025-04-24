import React, { useContext } from 'react'
import Context from '../context/context';

export default function Comments() {
    const { usersCommentsData } = useContext(Context);
    return (
        <div>
            <h1>Lista de Comentários</h1>
            <ul>
                {usersCommentsData.map((item) => (
                    <>
                        <h3>Name: {item.name}</h3>
                        <h4>Email: {item.email}</h4>
                        <span>Comment: {item.body}</span>
                        <br />
                        <br />
                        <br />
                    </>
                ))}
            </ul>
        </div>
    )
}
