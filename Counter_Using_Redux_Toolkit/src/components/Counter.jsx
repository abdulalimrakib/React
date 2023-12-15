import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "../reduxStoreFeatures/counter/counterSlice"


function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button style={{ margin: "0 5px" }} onClick={() => dispatch(decrementByAmount(5))}>decrement 5</button>
            <button style={{ margin: "0 5px" }} onClick={() => dispatch(decrement())}>decrement</button>
            <button style={{ margin: "0 5px" }} onClick={() => dispatch(reset())}>reset</button>
            <button style={{ margin: "0 5px" }} onClick={() => dispatch(increment())}>increment</button>
            <button style={{ margin: "0 5px" }} onClick={() => dispatch(incrementByAmount(5))}>increment 5</button>
        </div>
    )
}

export default Counter