/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

function Home() {

  const [todo, setTodo] = useState([])

  const newTodo = (data) => {
    setTodo((preData) => {
      return [...preData, {data}]
    });
  }

  console.log(todo);

  return (
    <div>
      <NewTodo newTodo={newTodo}></NewTodo>
      <Todos todos={todo}></Todos>
    </div>
  )
}

export default Home