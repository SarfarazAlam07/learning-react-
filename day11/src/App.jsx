import React, { useState } from "react";
const App = () => {
  // useState ek hook hai jo React mein state ko handle karne ke liye use hota hai, jab aap functional components bana rahe ho. Pehle React mein, state sirf class components mein manage hoti thi, lekin hooks ke introduction ke baad aap functional components mein bhi state manage kar sakte ho.
  const [user, setUser] = useState("sarfaraz");
  const changeName = () => {
    setUser("Aaliya");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="bg-purple-600 py-1.5 px-2 rounded-md">hello my Name is {user}</h1>
        <button className="bg-slate-500 my-1 py-1 px-2 rounded-lg border-2 border-purple-500 border-solid hover:bg-slate-700" 
        onClick={changeName}>Click me</button>
      </div>
    </>
  );
};

export default App;
