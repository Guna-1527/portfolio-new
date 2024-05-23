import React from "react";
import Header from "./Header";

const Skills = () => {
  const data = [
    {
      id: 1,
      src: "https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png",
      title: "HTML",
    },
    {
      id: 2,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-logo-6563485-5453030.png?f=webp",
      title: "CSS",
    },
    {
      id: 3,
      src: "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
      title: "Javascript",
    },
    {
      id: 4,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-native-5562339-4642743.png?f=webp",
      title: "React Js",
    },
    {
      id: 5,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-11492982-9325317.png?f=webp",
      title: "Node Js",
    },
    {
      id: 6,
      src: "https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png",
      title: "MongoDB",
    },
    {
      id: 7,
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-github-2950150-2447911.png?f=webp",
      title: "Github",
    },
  ];
  return (
    <div id="skill" className="w-[110rem] h-screen m-auto relative">
      <Header title={"SKILLS"} />
      <div className="text-lime-100 pt-[150px]">
        <div className="w-[90%] m-auto h-[250px] mt-10 grid grid-cols-4">
          {data.map((data, i) => (
            <div key={i} className="bg-bg-darker w-[250px] rounded-lg shadow-2xl mt-10 p-10">
              <img
                src={data.src}
                className="object-contain"
                alt=""
              />
              <p className="text-center mt-2 font-semibold text-bg-light">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
