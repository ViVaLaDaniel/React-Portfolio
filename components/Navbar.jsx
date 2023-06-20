import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import NavLogo from "../public/assets/NavLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? "  fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300" : " fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image src="/../public/assets/navLogo2.png" alt="/" width="150" height="50" />
        </Link>

        <div>
          <ul className=" hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-xl upercase hover:border-b  ">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-xl upercase hover:border-b  ">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-xl upercase hover:border-b  ">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-xl upercase hover:border-b  ">Project</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-xl upercase hover:border-b  ">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer ">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={nav ? " fixed  left-0 top-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : " fixed  left-[-100%] top-0  p-10 ease-in duration-500"}>
          <div>
            <div className="  flex w-full items-center justify-between    ">
              <Link href="/">
                <Image src="/../public/assets/navLogo2.png" width="165" height="35" alt="/" />{" "}
              </Link>

              <div onClick={handleNav} className=" mb-4 rounded-full  shadow-lg shadow-gray-400 p-2 cursor-pointer ">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className="  w-[85%]  md:w-[90%]  py-4 text-xl md:text-xl lg:text-3xl  ">Let`s build something legendary together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className=" uppercase ">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-3 text-lg md:text-xl lg:text-2xl ">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-3 text-lg md:text-xl lg:text-2xl ">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-3 text-lg md:text-xl lg:text-2xl ">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-3 text-lg md:text-xl lg:text-2xl ">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-3 text-lg md:text-xl lg:text-2xl ">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40  ">
              <p className=" uppercase tracking-widest text-[#5651e5]">Let`s Connect</p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <div className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
