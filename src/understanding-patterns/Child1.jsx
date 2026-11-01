import React from 'react'

export default function Child1({dynamicComponent}) {
  return (
    <>
        <div>Child1</div>
        {dynamicComponent()}
    </>
  )
}

<Comp>
  <div></div>
</Comp>
