/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Todo from './Todo';

function Todos({todos}) {
  return (
    <div>
        {
            todos.map((item,index) => {
                return <Todo key={index} item ={item}></Todo>
            })
        }
    </div>
  )
}

export default Todos