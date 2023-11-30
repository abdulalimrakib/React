/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function NewTodo({
    newTodo
}) {
    const [data, setData] = useState({ title: "", disc: "" })

    const handleDataChange = (e) => {
        return setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        newTodo(data);
        e.preventDefault()
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title: </label>
                    <input type="text" name='title' value={data.title} onChange={handleDataChange} />
                </div>

                <div>
                    <label htmlFor="">Description: </label>
                    <textarea type="text" name='disc' value={data.disc} onChange={handleDataChange} />
                </div>
                <div>
                    <button type='submit' > Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo