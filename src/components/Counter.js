import { useState } from "react"

const Counter = () => {
    // useState gibt immer ein Array zurück, der erste Wert ist eine Variable und der zweite Wert ein Funktion um den State zu verändern
    const [count, setCount] = useState(5)

    const add = () => {
        setCount (count+1)
    }
    const minus = () => {
        // Das ist die kurz Schreibweise
        count !== 0 ? setCount(count-1):setCount(0) 

       /*  if(count !== 0){ // Das ist die lange Schreibweise
            setCount(count-1)
        }else{
            setCount(0)
        } */
    }
    const reset = () => {
        setCount(5)
    }
    return(
        <>
            <div className="buttons">
                <button onClick={add}>+</button>
                <span>{count}</span>
                <button onClick={minus}>-</button>
            </div>
            <div className="reset">
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Counter