import React from "react";

const Navbar = () => {
  return (
    <div className="bg-bg-darker w-full h-[4.5rem] fixed z-50">
      <div className="max-w-[110rem] h-full m-auto text-bg-light flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfo<span className="text-bg-yellow">lio.</span></h1>
        <div className="flex gap-10">
          <a href="#banner">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#project">My Work</a>
          <a href="#contact">Contact</a>
          <div>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
