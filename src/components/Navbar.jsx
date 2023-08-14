import React from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 flex items-center justify-between flex-wrap bg-teal-500 p-6">
      {/* Other elements */}
      <div className="text-sm lg:flex-grow">
        <Link to="home" smooth duration={1000} className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </Link>
        <Link to="experience" smooth duration={1000} className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Experience
        </Link>
        <Link to="projects" smooth duration={1000} className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Projects
        </Link>
      </div>
    </nav>
    );
}

export default Navbar;