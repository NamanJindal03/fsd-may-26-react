import React from 'react'

console.log('GLOBAL OF CHILD')
export default function TempChild() {
    console.log('TEMP CHILD CALLED')
  return (
    <div>TempChild</div>
  )
}
