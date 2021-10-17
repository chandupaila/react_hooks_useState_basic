import { useState } from "react"

export const HookStateObject = () => {
    const [name,setName] = useState({firstName:'',lastName:''})

    console.log(name.firstName)

    return(
        <>
        <h1>useState with object</h1>
        <form>
            <input type='text' 
            value={name.firstName} 
            onChange={event=> setName({...name,firstName:event.target.value})}/>

            

            <input type='text' 
            value={name.lastName}
            onChange={event=> setName({...name,lastName:event.target.value})}/>

            <p>NOTE: To merge the first name and lastname object destructuring is needed in useState method the main difference is this bwt class and hooks concept</p>

            <h2>Your FirstName is - {name.firstName}</h2>
            <h2>Your LastName is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>  
        </form>
        
        </>

    )
}