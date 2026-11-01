import React from 'react'

export default function DynamicComponent({condition}) {
  if(condition === 'a'){
    return <>{'Complex component A'}</>
  }
  else if(condition === 'b'){
    return <>{'Complex component B'}</>
  }

}
