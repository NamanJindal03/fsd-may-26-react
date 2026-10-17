import React, { useEffect, useState } from 'react'

export default function Child2() {

    const [counterValue, setCounterValue] = useState(10);

    useEffect(()=>{
        const id = setTimeout(()=>{
            console.log('here')
            if(counterValue > 0){
                // setCounterValue((prev) => {
                //     return prev - 1
                // })
                console.log(counterValue)
                setCounterValue(counterValue - 1)
            }
        }, 1000)

        return ()=>{
            clearTimeout(id)
        }
    }, [counterValue])


  return (
    <div>{counterValue}</div>
  )
}
