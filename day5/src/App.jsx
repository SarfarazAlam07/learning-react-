import {useState} from 'react'
function App() {
  let [count , setConter]= useState(5)
  // let count = 5;
  const addValue = () =>{
    if(count<20){
      setConter(count+=1)
    }else{
      alert("cant add")
    }
  }
  let remove =()=>{
    if(count>0){
      setConter(count-=1)
    }else{
      alert("cant remove")
    }
  }
  return (
    <>
      <h1>some testing text</h1>
      <h3>testeing {count}</h3>

      <button onClick={addValue}
      >add value{count}</button>
      <br />
      <button onClick={remove}
      >remove value{count}</button>
    </>
  )
}

export default App
