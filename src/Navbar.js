import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between py-7 px-20 sticky top-0 bg-white z-20 shadow-md">
      <h1 className=" text-4xl font-montserrat font-bold">
        <a href="#home">Tony Nguyen</a>
      </h1>
      <ul className="flex justify-around w-1/3 text-xl font-montserrat pt-1 font-semibold">
        <li>
          <a href="#about" className="hover:text-Ruby hover:underline underline-offset-8">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-Ruby hover:underline underline-offset-8">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-Ruby hover:underline underline-offset-8">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
