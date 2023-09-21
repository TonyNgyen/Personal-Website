import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between py-8 px-20 sticky top-0 bg-white z-20">
      <h1 className=" text-4xl font-montserrat font-semibold">Tony Nguyen</h1>
      <ul className="flex justify-around w-1/3 text-xl font-montserrat pt-1">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
