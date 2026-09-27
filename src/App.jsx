import { useState } from "react"

console.log('above component')

function App() {
    console.log('ONE')
    // function generatedRandomName(){

    // }
    // const [a,v,b,c,d] = [10, 20, 30,40, 80] destructing in array

    let [state, setState] = useState('Sanjeev'); //['naman', function]
    let someVariable = 'I am supreme'
    console.log(someVariable)
    // console.log(state); //?
    // console.log(setState); //?

    // let name = 'Sanjeev'

    function changeName(){
        //react instruction -> whenever you ahve to update the variable youb need to call function?
        //why??? we will answer
        someVariable = 'No you are not'
        setState(Math.random()) //new value
        // state = Math.random();
        // console.log(state)

        // name = Math.random();
        // console.log(name)
    }

  return (
    <>
        {console.log('TWO')}
      Hi! we are beginning with the coding journey of react, HI HI NAMAN, kl 
      <h1> NAME: {state}</h1>
      <button onClick={changeName}> Change Name: </button>
    </>
  )
}

export default App
