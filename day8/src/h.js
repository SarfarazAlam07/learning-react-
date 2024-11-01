import { useState } from "react"

let arrow = () =>{
    const [counter , setCounter] = useState(15);
    
    const addValue = () =>{
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
    }
    console.log(addValue)
}
