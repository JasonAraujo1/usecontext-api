import React, { useContext } from 'react'
import Context from '../context/context';

export default function Comments() {
    const { usersCommentsData } = useContext(Context);
    return (
        <div>       
            
            <h1>Lista de Comentários</h1>
            <ul>
                {usersCommentsData.map((item) => (
                    <>  <br />
                        <h3><span className='font-semibold'>Name: </span> {item.name}</h3>
                        <h4><span className='font-semibold'>Email: </span>{item.email}</h4>
                        <span><span className='font-semibold'>Comment: </span>{item.body}</span>
                        <br />
                        <br />
                    </>
                ))}
            </ul>
        </div>
    )
}
