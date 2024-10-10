import React, { useState } from "react";
import picture from "../assets/photo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Skill"
    },
    {
      id: 4,
      text: "Experiance"
    },
    {
      id: 5,
      text: "Resume"
    },
    {
      id: 6,
      text: "Contact"
    }
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-10 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={picture} className="h-12 w-12 rounded-full" alt="" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Piyus<span className="text-green-500">h</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>
        <div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li className="hover:scale-105 hover:underline duration-200 cursor-pointer" key={id}>
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
              </li>
            ))}
            {/* <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Experiance</li>
            <li>Resume</li>
            <li>Contact</li> */}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menu && (
        <div className="bg-[#F4F6FF]">
          <ul className="md:hidden flex flex-col h-screen justify-center items-center space-y-3 text-xl">
            {navItems.map(({ id, text }) => (
              <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>
                <Link  onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
