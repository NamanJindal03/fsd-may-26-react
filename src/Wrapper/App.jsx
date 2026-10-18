import React from 'react'
import ContainerWrapper from './ContainerWrapper'

export default function App() {
  return (
    <>
        <ContainerWrapper>
            <div>I am a component</div>
        </ContainerWrapper>
        <ContainerWrapper random={'random-value'}>
            <div>A new component</div>
            <ul>
                <li>New list</li>
            </ul>
        </ContainerWrapper>
    </>
  )
}
