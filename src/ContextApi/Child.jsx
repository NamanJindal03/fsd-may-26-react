import React, {useContext} from 'react'
// import { MyContext } from './context/RandomContext'
import { useMyContext } from './context/RandomContext'

export default function Child() {
    // const storeValue = useContext(MyContext)
    const storeValue = useMyContext();
    console.log(storeValue)
  return (
    <div>Child: {storeValue.count}</div>
  )
}
