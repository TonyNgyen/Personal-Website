import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  let [open, setOpen] = useState(true);
  return (
    <nav className="md:flex md:justify-between py-7 md:px-20 px-5 sticky top-0 bg-white z-20 shadow-md">
      <h1 className=" md:text-4xl font-montserrat font-bold text-3xl pl-3">
        <a href="#home">Tony Nguyen</a>
      </h1>
      <div>
        <button
          className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiMenu /> : <HiX />}
        </button>
      </div>
      <ul
        className={
          "md:flex md:justify-around lg:w-1/3 text-xl font-montserrat md:pt-1 font-semibold absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:pl-0 pl-8 transition-opacity duration-500 ease-in md:opacity-100 " +
          (open ? "opacity-0" : "opacity-100")
        }
      >
        <li className="md:my-0 mt-5">
          <a
            href="#about"
            className="hover:text-Ruby hover:underline underline-offset-8"
          >
            About
          </a>
        </li>
        <li className="md:my-0 mt-5">
          <a
            href="#projects"
            className="hover:text-Ruby hover:underline underline-offset-8"
          >
            Projects
          </a>
        </li>
        <li className="md:my-0 mt-5 mb-8">
          <a
            href="#contact"
            className="hover:text-Ruby hover:underline underline-offset-8"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
