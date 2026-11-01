import React, { useState } from 'react'

export default function Mouse({renderFunction}) {
    const [position, setPosition] = useState({x: 0, y:0})
  return (
    <>
        <h1>This is somehting</h1>
        {renderFunction(position.x, position.y)}
    </>
  )
}
