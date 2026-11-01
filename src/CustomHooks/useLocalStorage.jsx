import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue){
    const [state, setState] = useState(()=>{
        let value;
        value = JSON.parse(window.localStorage.getItem(key)) || JSON.stringify(defaultValue);
        console.log('not rendered again',value)
        return value;
    })
    console.log(state)
    useEffect(()=>{
        console.log('triggerd useEffect')
        window.localStorage.setItem(key, state)
    },[state])


    return [state, setState]
}