import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scroller.scrollTo("about-me", {
          smooth: true,
          duration: 800,
          offset: -80,
        });
      }, 1000);
    } else {
      scroller.scrollTo("about-me", {
        smooth: true,
        duration: 800,
        offset: -80,
      });
    }
  };
  return (
    <div className="flex justify-end w-full h-18 bg-[#5518ab] fixed top-0 left-0 z-50">
    
      <div className="hidden md:flex w-[40%] justify-center gap-28 items-center mr-7">
        <li className="list-none">
          <Link
            to="/"
            className="hover:text-black text-white font-medium cursor-pointer font-poppins"
          >
            Home
          </Link>
        </li>
        <li className="list-none">
          <span
            onClick={handleAboutClick}
            className="hover:text-black text-white font-medium cursor-pointer font-poppins"
          >
            About Me
          </span>
        </li>
        <li className="list-none">
          <Link
            to="projects"
            className="hover:text-black text-white font-medium cursor-pointer font-poppins"
          >
            Projects
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="skills"
            className="hover:text-black text-white font-medium cursor-pointer font-poppins"
          >
            Skills
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="connect"
            className="hover:text-black text-white font-medium cursor-pointer font-poppins"
          >
            Connect
          </Link>
        </li>
      </div>

      <div className="md:hidden flex items-center mr-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className="cursor-pointer" />}
        </button>
      </div>

 
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#5518ab] shadow-lg">
          <div className="flex flex-col py-4">
            <Link
              to="/"
              className="hover:bg-[#8034EB] text-white font-medium cursor-pointer font-poppins py-3 px-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <span
              onClick={() => {
                handleAboutClick();
                setIsMenuOpen(false);
              }}
              className="hover:bg-[#8034EB] text-white font-medium cursor-pointer font-poppins py-3 px-6"
            >
              About Me
            </span>
            <Link
              to="projects"
              className="hover:bg-[#8034EB] text-white font-medium cursor-pointer font-poppins py-3 px-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="skills"
              className="hover:bg-[#8034EB] text-white font-medium cursor-pointer font-poppins py-3 px-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="connect"
              className="hover:bg-[#8034EB] text-white font-medium cursor-pointer font-poppins py-3 px-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
