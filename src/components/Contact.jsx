import React from "react";
import Header from "./Header";

// IMPORTING ICONS
import { FaLocationDot, FaPhone, FaLinkedin, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail, IoIosSend } from "react-icons/io";

const Contact = () => {
  const contactData = [
    {
      id: 1,
      header: "Address",
      subheading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad?",
      icon: <FaLocationDot size={25}/>,
    },
    {
      id: 2,
      header: "Phone Number",
      subheading: "9876543211",
      icon: <FaPhone size={25}/>,
    },
    {
      id: 3,
      header: "Email Address",
      subheading: "xyz@gmail.com",
      icon: <IoMdMail size={25}/>,
    },
  ];
  return (
    <div id="contact" className="w-[110rem] m-auto h-screen relative">
      <Header title={"CONTACT"} />
      <div className="pt-[200px] text-bg-light flex justify-between items-center">
        <div className="flex-1">
          <div className="flex gap-8 flex-col">
            {contactData.map((data, i) => (
              <div className="flex gap-5">
                <div className="w-[45px] h-[45px] flex justify-center items-center text-black bg-bg-yellow rounded-full">
                  {data.icon}
                </div>
                <div>
                  <h1>{data.header}</h1>
                  <p>{data.subheading}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 absolute bottom-20 items-center">
              <p className="text-xl font-bold">Connect With Me :</p>
              <div className="flex gap-4">
                <a href="">
                  <div className="w-[40px] h-[40px] bg-bg-yellow text-black flex justify-center items-center rounded-full">
                    <FaLinkedin size={20}/>
                  </div>
                </a>
                <a href="">
                  <div className="w-[40px] h-[40px] bg-bg-yellow rounded-full text-black flex justify-center items-center">
                    <FaSquareXTwitter size={20} />
                  </div>
                </a>
                <a href="">
                  <div className="w-[40px] h-[40px] bg-bg-yellow rounded-full text-black flex justify-center items-center">
                    <FaSquareInstagram size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[50%] flex bg-bg-darker mt-[7rem] justify-center items-center flex-col gap-8 p-10 rounded-md">
            <input
              type="text"
              placeholder="name"
              className="input input-bordered text-black w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="email"
              className="input input-bordered text-black w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Message"
              className="input input-bordered text-black input-lg w-full max-w-xs"
            />
            <button className="btn btn-neutral text-xl flex items-center justify-center bg-bg-yellow text-black hover:text-white">
              send message <IoIosSend size={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
