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
          <p className="mt-5 text-justify w-[80%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum assumenda et similique ipsam quos totam commodi eaque delectus corporis, iusto, provident ut culpa repellendus quam sed nulla a! Aliquam, ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, molestiae tempora dolorem voluptatibus quia quos esse ab amet laudantium nemo, vitae reprehenderit doloribus asperiores natus harum facilis sed exercitationem.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
