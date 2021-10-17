import { useState } from "react"

export const HookStateTwo = () => {
    const initialCount = 0
    const [count,setcount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5 ; i++){
            setcount(prevState => prevState+ 1)
        }
    }
    // initial i value = 0(zero) and net i itretate 5 times it means (0,1,2,3,4) and last i++ is equals to adding(updating) the value till last itretation

    return (
        <>
        <h1>useState with previous state</h1>
        <h1>{count}</h1>
        <button onClick={()=> setcount(initialCount)}>Reset</button>
        <button onClick={()=> setcount(prevState => prevState + 1)}>Increment</button>
        <button onClick={()=> setcount(prevState => prevState - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
        </>
    )
}