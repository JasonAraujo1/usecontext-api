import { fetchApiUsers, fetchApiUsersComments, fetchApiUsersTodos } from '../services/fetchApi';
import Context from './context';
import { useState, useEffect } from "react";

  function Provider({ children }) {
      const [usersPostsData, setUsersPostsData] = useState([])
      const [usersCommentsData, setUsersCommentsData] = useState([])
      const [usersTodosData, setUsersTodosData] = useState([])

      const contextValue = {
        usersPostsData,
        usersCommentsData,
        usersTodosData
      }
      
      useEffect(() => {
        async function onLoad() {
          const data = await fetchApiUsers()
          const commentsData = await fetchApiUsersComments()
          const todosData = await fetchApiUsersTodos()
          setUsersPostsData(data)
          setUsersCommentsData(commentsData)
          setUsersTodosData(todosData)
        }
        onLoad()
    }, [])

      return (
          <Context.Provider value={contextValue}>
              {children}
          </Context.Provider>
      )
  }


  export default Provider;