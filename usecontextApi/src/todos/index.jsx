import { useContext } from 'react';
import Context from '../context/context';

export default function Todos() {
  const { usersTodosData } = useContext(Context);
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {usersTodosData.map((item) => (
          <>
            <br />
            <h3>{item.title}</h3>
            <br />
          </>
        ))}
      </ul>
    </div>
  )
}
