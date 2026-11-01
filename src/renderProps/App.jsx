import React from 'react'
import Mouse from './Mouse'
export default function App() {
  return (
    <div>
        <h1>Mouse Render Pattern</h1>

        <Mouse 
            renderFunction = {(x,y) => {
                return <h2>x: {x}, y: {y}</h2>
            } }
        />
    </div>
  )
}
