import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between py-7 px-20 sticky top-0 bg-white z-20 shadow-md">
      <h1 className=" text-4xl font-montserrat font-bold">
        <a href="#home">Tony Nguyen</a>
      </h1>
      <ul className="flex justify-around w-1/3 text-xl font-montserrat pt-1 font-semibold">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
