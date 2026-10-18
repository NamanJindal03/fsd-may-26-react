import { createContext, useContext, useState } from "react";

//create a store i.e creating a context 
//good coding practice
const MyContext = createContext();

// we created a wrapper of provider to put values in the store
//as well as this wrapper needs to be wrapped around the 
// main application code which needs to utilsie the capabilities 
// of the store i.e within app.jsx
export function MyProvider({children}){
    const [count, setCount] = useState(1201) ;// stored in store hai

    return (
        <MyContext.Provider value={{count, setCount}}>
            {children}
        </MyContext.Provider>
    )
}


//custom hook creation -> we are creating our own hook
//a hook starts from use keyword
export function useMyContext(){
    return useContext(MyContext)
}