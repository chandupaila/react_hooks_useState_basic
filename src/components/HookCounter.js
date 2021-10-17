import  { useState } from "react"

export const HookCounter = () => {

    const [count,setCount] = useState(0)

    return(
    <>
    <h1>Hooks Component</h1>
    <button onClick={()=> setCount(count+1)}>Count: {count}</button>
    </>
    )
    }

