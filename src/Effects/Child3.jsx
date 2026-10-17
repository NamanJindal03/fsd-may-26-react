import React, {useState, useEffect} from 'react'

export default function Child3() {
    const [counterValue, setCounterValue] = useState(10);
    console.log('outside', counterValue)

     useEffect(()=>{
        const id = setInterval(()=>{
            // setCounterValue((prev)=>{
            //     const newValue = prev - 1;
            //     if(newValue === 0){
            //         clearInterval(id)
            //     }
            //     return newValue
            // })
            console.log(counterValue)
            setCounterValue(counterValue - 1)
        }, 1000)

        return ()=>{
            clearInterval(id)
        }
    }, [])


  return (
    <div>{counterValue}</div>
  )
}
