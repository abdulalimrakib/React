
import './App.css'
import useFetch from './hooks/useFetch';

function App() {
  const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/users")
  
  console.log(data);

  return (
    <>

    </>
  )
}

export default App
