import React from 'react'

export default function ContainerWrapper(props) {
    console.log(props)
  return (
    <>
        <h1>I am a wrapper component, I can help you out with certain templates</h1>
        <h2>I am even helpful in providing a generic css appplied over the children components</h2>
        <div style={{color: 'red', backgroundColor: 'blue'}}>
         {props.children}
        </div>
    </>
  )
}
