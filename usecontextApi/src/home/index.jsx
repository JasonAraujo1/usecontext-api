import { useContext } from 'react';
import Context from '../context/context';

export default function Home() {
  const { usersPostsData } = useContext(Context);
  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {usersPostsData.map((item) => (
          <>
            <h3>{item.title}</h3>
            <span>{item.body}</span>
          </>
        ))}
      </ul>
    </div>
  )
}
