import React, { useEffect, useState } from 'react'
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child3'

export default function App() {

    const [isChild, setIsChild] = useState(false)
    const [isChild2, setIsChild2] = useState(false)
    const [isChild3, setIsChild3] = useState(false)

  return (
    <>
        <h1>Parent</h1>
        {isChild && <Child />}

        <button onClick={()=> setIsChild(!isChild)}>Toggle Child Visibility</button>

        <hr />

        {isChild2 && <Child2 />}

        <button onClick={()=> setIsChild2(!isChild2)}>Toggle Child Visibility</button>


          <hr />

        {isChild3 && <Child3 />}

        <button onClick={()=> setIsChild3(!isChild3)}>Toggle Child Visibility</button>

    </>
  )
}
