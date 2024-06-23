import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div id="about" className="text-bg-light relative w-[110rem] m-auto h-screen">
      <Header title={"ABOUT ME"} />
      <div className="w-full h-full pt-[100px] flex justify-between">
        <div className="flex-1 h-full flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715817600&semt=sph"
            alt=""
          />
        </div>
        <div className="flex-1 pt-[210px]">
          <h1 className="text-5xl font-bold text-bg-yellow">GUNA PRASANTH</h1>
          <p className="mt-5 text-justify w-[80%] font-Montserrat leading-10 tracking-wide">Guna Prasanth, a CSE student at VSB College of Engineering's Technical Campus, brings a diverse skillset to the table. Proficient in Java development, Pega development, and frontend technologies like HTML, CSS, and JavaScript. I can handle tasks across the development spectrum, from backend logic to user-friendly interfaces. Eager to learn and contribute, he's a valuable asset to any team.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
