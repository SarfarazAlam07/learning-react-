import React from "react";

const Head = () => {
  return (
    <>
      <div className="w-screen  font-serif text-1  bg-black text-white flex  items-center justify-between flex-wrap">
        <div className="flex justify-center my-5 py-2 items-center  bg-white text-black w-full rounded-xl">
          <img
            className="rounded-full h-12 ml-3 bg-cover hidden"
            src="https://cdn.vectorstock.com/i/1000x1000/42/51/university-college-logo-vector-20904251.webp"
            alt=""
          />
          <h1 className="ml-5 select-none pointer-events-none text-wrap">Himalaya College Of Professional Education</h1>
          <ul className="flex justify-around w-full">
            <li  className="btn">
              {" "}
              <a href="#">Home</a>
            </li>
            <li className="btn">
              {" "}
              <a href="#">About us</a>
            </li>
            <li className="btn">
              {" "}
              <a href="#">Faculty list</a>
            </li>
            <li className="btn">
              {" "}
              <a href="#">Courses</a>
            </li>
            <li className="btn">
              <a href=" ">Syllabus</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Head;
