import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary"

import ErrorFallback from "./ErrorFallback"

function Profile({user}){
    if(user.name === 'Crash'){
        throw new Error('Profile rendering crashed')
    }
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    )
}

export default function App() {
    const [userId, setUserId] = useState(1);
  return (
    <div>
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            resetKeys={[userId]}
        >
            <Profile user={{
                id: userId,
                name: userId === 2 ? 'Crash' : 'naman',
                email: 'random@gmail.com'
            }}/>
            <button onClick={()=> setUserId(2)}>Trigger Error</button>
       
        </ErrorBoundary>
         <button onClick={()=> setUserId(1)}>Switch to user 1</button>
        
    </div>
  )
}
