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
            <br />
            <h2 className='text-2xl'>Title: {item.title}</h2>
            <span>{item.body}</span>
            <br />
          </>
        ))}
      </ul>
    </div>
  )
}
