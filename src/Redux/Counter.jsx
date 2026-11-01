import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./CounterSlice"

export default function Counter() {
    const dispatch = useDispatch();
    const item = useSelector((state)=> state.counter)

    const handleIncrement = (number) => {
        dispatch(increment(number))
    }
    const handleDecrement = (number) => {
        dispatch(decrement(number))
    }
  return (
   <div>
        <h3>Counter</h3>
        <button onClick={()=> handleIncrement(10)}>Incremenet</button>
        <button onClick={()=> handleDecrement(4)}>Decremenet</button>
        <h4>Counter Display: {item}</h4>
   </div>
  )
}
