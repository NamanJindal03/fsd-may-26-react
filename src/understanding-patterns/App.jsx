import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import SmallComp from './SmallComp'


export default function App() {
  return (
    <>
        <Child1 dynamicComponent={SmallComp}/>
        <Child2 dynamicComponent={<>randomly do something</>}/>
    </>
  )
}
