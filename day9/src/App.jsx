import { useState } from "react";

function App() {
  const [color , setColor] = useState("olive")
  return (
    <>
      <div className="w-screen h-screen bg-red-400 flex  justify-center flex-wrap  relative"
      style={{backgroundColor: color}}>
        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2"> 
          <div className="flex flex-wrap items-center justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button className="outline-none px-4 bg-red-600 rounded-full text-white shadow-sm"
            onClick={()=> setColor("red")}>
              red
            </button>
            <button className="outline-none px-4 bg-green-500 rounded-full text-white shadow-sm"
            onClick={()=> setColor("green")}>
              green
            </button>
            <button className="outline-none px-4 bg-black rounded-full text-white shadow-sm"
            onClick={()=> setColor("black")}>
              black
            </button>
            <button className="outline-none px-4 bg-blue-600 rounded-full text-white shadow-sm"
            onClick={()=> setColor("blue")}>
              blue
            </button>
            <button className="outline-none px-4 bg-yellow-500 rounded-full text-white shadow-sm"
            onClick={()=> setColor("yellow")}>
              yellow
            </button>
            <button className="outline-none px-4 bg-purple-900 rounded-full text-white shadow-sm"
            onClick={()=> setColor("purple")}>
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
