
// currentValue?, toggle ability -> 

import { useState } from "react"

const useToggle = (initialValue) => {
    const [isVisible, setIsVisible] = useState(initialValue);

    const changeVisibility = () => {
        setIsVisible(!isVisible);
    }

    return [isVisible, changeVisibility]
}
export default useToggle;