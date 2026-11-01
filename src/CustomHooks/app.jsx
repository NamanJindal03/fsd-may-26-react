import React from 'react'
import useToggle from './useToggle'
import useLocalStorage from './useLocalStorage'

export default function App() {
    const [isVisible, changeVisibility] = useToggle(true)
    const [count, setCount] = useLocalStorage('county', 10)


  return (
    <>
        {isVisible ? <div>Item visible</div> : <div>Item not visible</div>}

        <div>{count}</div>
        <button onClick={setCount(count + 1)}>Increment</button>
        <button onClick={setCount(count - 1)}>Decrement</button>
    </>
  )
}
