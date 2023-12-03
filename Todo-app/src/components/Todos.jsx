/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Data/Data";
import Todo from "./Todo";



function Todos() {
    const [todos, setTodos] = useState([])

    const { allTodos } = useContext(UserContext)
    useEffect(() => {
        if (allTodos) {
            setTodos(allTodos)
        }
    }, [allTodos])

    return (
        <div className="grid grid-cols-3 gap-5 px-5">
            {
                 todos.map(todo =>todos && <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    )
}

export default Todos