
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import action from './../services/action';
import Todo from './Todo';

function Todos() {
    const { isLoading, todos, error } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(action())
    }, [])

    return (
        <>
            {
                isLoading && <h2>loading .... </h2>
            }
            {
                error && <h2>{error}</h2>
            }
            {
                todos && todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </>
    )
}

export default Todos