import { Provider } from "react-redux";
import store from "./Store";
import Counter from "./Counter";

export default function App(){
    return (
        <div> <Provider store={store}><Counter/></Provider></div>
    )
}