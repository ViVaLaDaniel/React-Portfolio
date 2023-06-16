import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div className=" w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase  lg:text-4xl md:text-3xl text-2xl tracking-widest text-[#9126b8] font-mono">Contact</p>
        <h2 className=" py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl rounded-2xl shadow-gray-400  p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className=" rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front-End Developer</p>
                <p className="py-4">I am available for freelance or full-time positions.Contact me and let`s talk</p>
              </div>
            </div>
            <div>
              <p className=" uppercase pt-8">Connect Whith Me</p>
              <div className=" flex items-center justify-between">
                <div className=" rounded-full shadow-lg shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>

                <div className=" rounded-full shadow-lg shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>

          {/*right*/}
        </div>
      </div>
    </div>
  );
}

export default Contact;
