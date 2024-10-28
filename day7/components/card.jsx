import React from "react";

function Card({Name="Undifine",Age="Undifine",Qualification="Undifine",BtnText="click me" }) {
  return (
    < >
      <div className="bg-black text-white max-w-40 text-wrap	 p-6 flex flex-col rounded-xl m-2 text-sm "  >
        <div className="flex">
        <img className="w-10  object-contain" src="https://images.pexels.com/photos/6345387/pexels-photo-6345387.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="ml-2">
        <p>Name : {Name}</p>
        <p>Age : {Age}</p>
        <p>Qualification  : {Qualification}</p>
        </div>
        </div>
        <p className="pt-3 text-wrap hover:text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button className="bg-white text-black rounded-lg hover:bg-emerald-50 hover:text-red-400 mt-2"
        >{BtnText} → </button>
      </div>
    </>
  );
}

export default Card;
