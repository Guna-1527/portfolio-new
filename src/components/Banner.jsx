import React from "react";
import Cube from "./Cube";
import Typing from "./Typing";

const Banner = () => {
  return (
    <div id="banner" className="w-[110rem] m-auto h-screen flex justify-between items-center">
      <div className="flex-1 ml-10 pl-10">
        <p className="text-3xl text-bg-light font-mono">Hello,</p>
        <h1 className="text-[5rem] text-bg-light font-bold font-mono">
          Guna <br /> Prasanth
        </h1>
        <Typing />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Cube />
      </div>
    </div>
  );
};

export default Banner;
