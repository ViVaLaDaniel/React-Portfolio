import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return  (
    <div id="contact" className=" w-full lg:h-screen">
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

              <div>
                <p className=" uppercase pt-8">Connect Whith Me</p>
                <div div className=" flex items-center justify-between">
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
          </div>

          {/*right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className=" p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Name</label>
                    <input className=" border-2 rounded-lg p-3 flex  border-gray-400" type="text" />
                  </div>

                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Phone Number</label>
                    <input className=" border-2 rounded-lg p-3 flex  border-gray-400" type="text" />
                  </div>
                </div>
                <div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Email</label>
                    <input className=" border-2 rounded-lg p-3 flex border-gray-400" type="email" />
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Subject</label>
                    <input className=" border-2 rounded-lg p-3 flex border-gray-400" type="text" />
                  </div>
                  <div className=" flex flex-col py-2">
                    <label className=" uppercase text-sm py-2">Message</label>
                    <textarea className=" border-2 rounded-xl p-3 border-gray-400" rows="10"></textarea>
                  </div>
                  <button className=" w-full p-4 text-gray-300 mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Send MEssage</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex justify-center p-12">
          <Link href="/">
            <div className=" rounded-full shadow-lg shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <HiOutlineChevronDoubleUp className=" text-[#9126B8]" size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
