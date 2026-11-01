import React from 'react'
import { useState, useOptimistic } from 'react'

export default function App() {
    const [likes, setLikes] = useState(100);

    const [optimisticLikes, addOptimisticLikes] = useOptimistic(likes);

    async function handleLike(){
        addOptimisticLikes(optimisticLikes + 1);

        try{
            const response = await fetch('/api/post/909090/like', {
                method: 'Put'
            })

            if(!response.ok){
                throw new Error("Failed to like post")
            }
            const data = await response.json();

            setLikes(data.likes);
        }
        catch(error){
            //optimisic UI automaticlaly reverts back
        }
    }

  return (
    <button onClick={handleLike}>
        {optimisticLikes}
    </button>
  )
}
