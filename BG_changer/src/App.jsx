
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
const [color,setColor] = useState("olive")

function colorChange(color){
  console.log(color)
  setColor(color)
}

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div>
      <Navbar colorChange={colorChange}></Navbar>
      </div>
    </div>
  )
}

export default App
