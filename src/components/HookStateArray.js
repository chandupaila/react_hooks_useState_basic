import { useState } from "react"

export const HookStateArray = () => {

    const [items,setItems] = useState([])

    const addNumber = () => {
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    

    return(
        <>
        <h1> useState with array</h1>

        <button onClick={addNumber}>Click to Add a Number between 1 and 10 </button>

        <ul>
            {items.map(eachItem => (
                <li key={eachItem.id}>{eachItem.value}</li>))}
        </ul>
        </>
    )
}