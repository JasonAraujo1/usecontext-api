import { fetchApiUsers } from '../services/fetchApi';
import Context from './context';
import { useState, useEffect } from "react";

  function Provider({ children }) {
      const [usersPostsData, setUsersPostsData] = useState([]);


      const contextValue = {
        usersPostsData,
        
      };
      
      useEffect(() => {
        async function onLoad() {
          const data = await fetchApiUsers()
          setUsersPostsData(data)
        }
        onLoad()
    }, [])
    console.log(usersPostsData)
      
     

      return (
          <Context.Provider value={contextValue}>
              {children}
          </Context.Provider>
      )
  }


  export default Provider;