
import { useDispatch } from 'react-redux';
import './App.css'
import useFetch from './hooks/useFetch';
import { useEffect } from 'react';

function App() {
  const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/users")
  
  console.log(data);

  return (
    <>

    </>
  )
}

export default App
