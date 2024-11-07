import React,{useState} from 'react'

const Counter = () => {
    const [counter ,setCounter] = useState(0);
    const update = () =>{
        setCounter(counter+1)        
    }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="bg-purple-600 py-1.5 px-2 rounded-md">counter value is {counter}</h2>
        <button className="bg-slate-500 my-1 py-1 px-2 rounded-lg border-2 border-purple-500 border-solid hover:bg-slate-700" 
        onClick={update}>Click me{counter}</button>
        {/* direct function onClick ke ander hi function banaya jo decrease kar sake */}
        <button className="bg-slate-500 my-1 py-1 px-2 rounded-lg border-2 border-purple-500 border-solid hover:bg-slate-700" 
        onClick={()=>setCounter(counter-1)}>Click me{counter}</button>
      </div>
    </>
  )
}

export default Counter
