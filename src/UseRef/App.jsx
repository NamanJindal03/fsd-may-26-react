import React, {useEffect, useRef, useState} from 'react'
import Portal from '../portal';

export default function App() {
    const ref1 = useRef(null);
    const [state, setState] = useState(0)

    console.log(ref1)
    useEffect(()=>{
        ref1.current.focus();
    },[])
    function submitForm(e){
        e.preventDefault();
        console.log(ref1.current.value)
    }
  return (
    <>
    <form action="" onSubmit={submitForm}>
        <div>
            <label htmlFor="">Enter your name</label>
            <input type="text" id="name" ref={ref1} />
        </div>
        <button onClick={()=> setState(state+1)}>increment</button>
    </form>
    <Portal show={true}/>
    </>
  )
}
