/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import Data, { UserContext } from './Data/Data'
import Todos from './components/Todos';



function App() {
  const [allTodos, setAllTodos] = useState(null);

  const { isLoading, error, data } = Data("https://jsonplaceholder.typicode.com/todos")
  useEffect(() => {
    if (data) {
      setAllTodos(data)
    }
  }, [data])

  // console.log(allTodos);


  return (
    <UserContext.Provider value={{ allTodos, setAllTodos }}>
      <div className='py-5 text-center text-green-500'>
        <h1 className='text-[50px] font-bold border-b-4 border-green-500'>TODO</h1>
      </div>
      {
        isLoading && <h1>Data is prosesing !! ...</h1>
      }
      {
        error && <h1 className='text-red-700'>{error}</h1>
      }

      <Todos></Todos>
    </UserContext.Provider>
  )
}

export default App
