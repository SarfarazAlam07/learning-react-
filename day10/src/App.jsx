import { useState, useCallback , useEffect ,useRef} from "react";

function App() {
  
  const [length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$&*_-{}[]~`^,.+";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass)


  }, [length, NumberAllowed, charAllowed]);

  useEffect(()=>{passwordGenerator();

  },[length , NumberAllowed , charAllowed,passwordGenerator ]);


  // const handleCopy = () => {
  //   if (password) {
  //     navigator.clipboard.writeText(password).then(() => {
  //       alert("Password copied to clipboard!");
  //     }).catch((err) => {
  //       console.error("Failed to copy password: ", err);
  //     });
  //   }
  // };


  //ref hook 
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg pb-2 px-4 my-8 text-orange-400 bg-gray-700">
          <h1 className="items-center text-center text-white p-2">Password_Genorator</h1>
        <div className="flex flex-row shadow rounded-lg overflow-hidden mb-4">

          {/* input box / button */}
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-blue-950 " placeholder="Password" readOnly
          ref={passwordRef}/>
          
          {/* button   */}
          <button onClick={copyPasswordToClipboard} className="pl-2 pr-2 text-white text-center bg-blue-600 hover:bg-blue-800">copy</button>
        </div>
        <div className="flex text-sm gap-x-2 items-center justify-center pb-1">

          {/* length controler */}
          <div className="flex items-center gap-x-1">
            <input type="range"  min={6} max={36}
            value={length}
            className="cursor-pointer" onChange={(e) =>{
              setLength(e.target.value)
            }}/>
            <label>Length : {length}</label>
          </div>

          {/* number controler */}
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={NumberAllowed}  id="numberInput" onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }} />
            <label>Number</label>
          </div>
          {/* Characte controler */}
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed}  id="characterInput" onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }} />
            <label >Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
 
