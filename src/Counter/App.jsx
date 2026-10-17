import { useState } from "react"
import TempChild from "./TempChild";


//lets try to reconstrucut useState 
// 5%
// let userState;
// function updateToNewValue(value){
//     userState = value;
//     rerender();
// }

// function useState(initialValue){
//     if(initialisedForTheFirstTime){
//         userState = initialValue;
//     }
//     return [userState, updateToNewValue]
// }



let globalCounter = 1000;

export default function Counter(){
    const [counter, setCounter] = useState(100)
    const [counter2, setCounter2] = useState(100)
    const [counter3, setCounter3] = useState(0)
    const [counter4, setCounter4] = useState(0)
    const [counter5, setCounter5] = useState(0)
    const [randomArr, setRandomArr] = useState([{name: 'Akshay', age: 24, dbId: 907856},
    {name: 'naman', age: 11, dbId: 123213123},
    {name: 'naman', age: 91, dbId: 98786754},
    {name: 'vishal', age: 21, dbId: 3432156},])
    let localCounter = 100


    //two way binding 
    const [institute, setInstitute] = useState({value: '', error: ''})
    const [name, setName] = useState({value: '', error: ''})

    function handleKeyDown(e){
        console.log(e.target.name)
    }

    function handleFormEvents(e){
        // console.log(e.target.name)
        // console.log(e.target.value)
        // setInstitute(e.target.value)
        if(e.target.name === 'institute'){
            // institute.value = e.target.value
            // console.log(institute)
            setInstitute({...institute, value: e.target.value})
        }
        else if(e.target.name === 'name'){
            // name.value = e.target.value
            // console.log(name)
            setName({...name, value: e.target.value})
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        if(institute.value.length < 10){
            setInstitute({...institute, error: 'Name should be greater than 10'})
            return;
        }
    }

    return (
        <>
            {console.log('Rerendered')}
            <h1>Counter Value: {counter5}</h1>
            <button onClick={()=> {
                // setCounter5(counter5 + 1)
                // setCounter5 ((prevValue)=>{
                //     return prevValue 
                // })
                // setCounter5 ((prevValue)=>{
                //     return prevValue 
                // })
                // setCounter5 ((prevValue)=>{
                //     return prevValue 
                // })

                // setRandomArr(randomArr.push(6)) //wrong
                setRandomArr([...randomArr, 6]) //the correct way in which it will lead to 
                //rerender


            }}>Increment</button>
            <button onClick={() => setCounter(counter5 - 1)}>Decrement</button>


            <hr />

            {randomArr.map((val, index)=>{
                return (
                    <div key={index}>{JSON.stringify(val)}</div>
                )
            })}

            <TempChild />
            <h1>Counter Value: {counter}</h1>
            <button onClick={()=> {
                setCounter(counter + 100)
                setCounter(counter + 1)
                setCounter(counter + 1)
                setCounter(counter + 10)
                // setCounter2(counter2 + 1)
                // setCounter3(counter3 + 1)
                // setCounter4(counter4 + 1)
            }}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>

            <hr />
            <h1>Counter Value: {localCounter}</h1>
            <button onClick={()=> {
                localCounter = localCounter + 1
                console.log(localCounter)
            }}>Increment LC</button>
            <button onClick={()=> {
                localCounter = localCounter - 1
                console.log(localCounter)
            }}>Decrement LC</button>

            <hr />
            <h1>Counter Value: {globalCounter}</h1>
            <button onClick={()=> {
                globalCounter = globalCounter + 1
                console.log(globalCounter)
            }}>Increment GC</button>
            <button onClick={()=> {
                globalCounter = globalCounter - 1
                console.log(globalCounter)
            }}>Decrement GC</button>

            {/* <input onKeyDown={(e)=> handleKeyDown(e)} /> */}
            {/* <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <input value={name} onChange={(e)=> setName(e.target.value)}/> */}

                <form action="" onSubmit={handleSubmit}>
                    <input value={institute.value} onChange={(e)=> handleFormEvents(e)} name='institute'/>
                    <div>{institute.error && <span style={{color: 'red'}}> {institute.error} </span>}</div>
                    <input value={name.value} onChange={(e)=> handleFormEvents(e)} name="name"/>
                    <button >Submit</button>
                </form>
           
        </>
    )
}