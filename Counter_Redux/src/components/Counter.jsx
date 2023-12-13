import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../services/action"


function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const incrementHandle = () => {
        dispatch(increment())
    }
    const decrementHandle = () => {
        dispatch(decrement())
    }
    const resetHandle = () => {
        dispatch(reset())
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button style={{ margin: "0px 5px" }} onClick={incrementHandle}>increment</button>
            <button style={{ margin: "0px 5px" }} onClick={resetHandle}>reset</button>
            <button style={{ margin: "0px 5px" }} onClick={decrementHandle}>decrement</button>
        </div>
    )
}

export default Counter