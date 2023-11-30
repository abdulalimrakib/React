/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Todo({ item }) {
  console.log(item)
  return (
    <>
      <label htmlFor="">Title: {item.data.title}</label>
      <p>{item.data.disc}</p>
    </>
  )
}

export default Todo