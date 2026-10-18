import React from 'react'
import { MyProvider } from './context/RandomContext'
import Child from './Child'

export default function App() {
  return (
    <MyProvider>
        {/* This is the code which is wrapped arpund the wrapper
            and hence has the ability which the store provides
        */}
        <div>App Component</div>
        <Child />
    </MyProvider>
  )
}
