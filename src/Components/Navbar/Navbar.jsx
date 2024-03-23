import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  let navbar = ["Home", "About", "Blog", "Login"];
  return (
    <div className="sp-6 font-bold">
      <nav className="flex align-center justify-between p-3">
        <div className="mx-70 align-center flex object-contain">
         <div className=""> 
          <h1 className="text-center text-white font-bold text-6xl px-2 py-2 ">ZOOP</h1>
          <h1 className="text-xl text-center  text-white  px-2 py-2 font-vibefont"></h1></div>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;