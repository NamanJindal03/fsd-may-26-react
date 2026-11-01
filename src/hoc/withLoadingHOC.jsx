import React from 'react'

export default function withLoadingHOC(IndividualComponent) {
  return function EnhancedComponent({ isLoading, ...props}){
    if(isLoading){
        return <h2>Loading....</h2>
    }
    return <IndividualComponent {...props}/>
  }
}
