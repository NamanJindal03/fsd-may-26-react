import React, { useEffect, useState, useRef } from 'react'

let storeIntervalId  = ''

export default function App() {
    console.log('one')
    const [sampleUpdate, setSampleUpdate] = useState(1)
    const [sampleUpdate2, setSampleUpdate2] = useState(100)
    const [display, setDisplay] = useState('')

    // const [storeIntervalId, setIntervalId] = useRef('')
    // const storeIntervalId = useRef('')


    //mounting method -> react calls this automatically for us whenever this component mounts
    //only at the time of mounting it will be triggered again
    useEffect(()=>{
        console.log('three');
        // console.log(' I will be called automatically when the component mounts')
        (async function(){
            const data = await fetch('https://flagcdn.com/en/codes.json');
            const answer = await data.json();
            setTimeout(()=>{
                setDisplay(JSON.stringify(answer).length)
            }, 3000)
           
        })()

        const id = setInterval(()=>{
            // console.log('I am SI')
        }, 1000)
        storeIntervalId = id
        // console.log(id)
        // setIntervalId(id)

        return ()=>{
            // console.log(' I will be exclusively called at the time of unmounting')
            // console.log(storeIntervalId)
            clearInterval(id)
        }
        
    },[])

    useEffect(()=>{
        console.log('another mount')
    },[])

    // useEffect(()=>{
        
    // },[])

    //this is also called upon mounting, why????? sampleUpdate original value is undefined and then it acquires the
    //value that you put on the state
    useEffect(()=>{
        console.log('display updated')

        return ()=>{
            console.log('before rerender')
        }
    },[sampleUpdate, sampleUpdate2])

    //mount 
    // useEffect(()=>{}, [])

    //no dependency array, this runs at every point -> 
    //this is never ever to be used -> 
    useEffect(()=>{

    })

  return (
    <>
        {console.log(2)}
        {/* {console.log(' I will be called automatically when the component mounts')} */}
        {display ? <h1>{display}</h1>  : <> ...Loading</>}
        <button onClick={()=> setSampleUpdate(sampleUpdate + 1)}>Change some</button>
        <button onClick={()=> setSampleUpdate2(sampleUpdate2 + 1)}>Change some 2</button>

    </>
  )
}


