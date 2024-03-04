import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="">
            <h1 className="text-4xl uppercase font-tertiary z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-500 shadow-teal-200 ">
              Jovan Markovic
            </h1>
          </a>
          <Link
            to="contact"
            className="btn btn-sm flex justify-center items-center cursor-pointer"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
