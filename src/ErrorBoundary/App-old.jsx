// import { useTransition } from "react";
import { useEffect } from "react";
import { ErrorBoundary, reset } from "react-error-boundary";

function ErrorFallback(){
    useEffect(()=>{
        resetErr
    }, 5000)
}

export default function AddCommentContainer() {
    
  return (
    <ErrorBoundary fallback={<p>Try again after 5s </p>} onReset={()=> console.log('trying to reset')}>
      <AddCommentButton />
    </ErrorBoundary>
  );
}

function AddCommentButton() {
//   const [isPending, startTransition] = useTransition();
// const isPending = false

  function handleClick() {
    // startTransition(async () => {
    //   await 
      addComment(); //functional error -> 
    // });
  }

  return (
    <button  onClick={handleClick}>
      {isPending ? "Adding..." : "Add comment"} 
    </button>
  );
}