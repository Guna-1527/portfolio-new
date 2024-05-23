// src/components/Cube.js
import React from 'react';
import "../App.css";

const Cube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="face front p-4 drop-shadow-xl">
          <img src="https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png" alt="" />
        </div>
        <div className="face back p-4">
          <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-css-logo-6563485-5453030.png?f=webp" alt="" />
        </div>
        <div className="face p-4 left">
          <img src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png" alt="" />
        </div>
        <div className="face p-4 right">
          <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-native-5562339-4642743.png?f=webp" alt="" />
        </div>
        <div className="face p-4 top">
          <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-11492982-9325317.png?f=webp" alt="" />
        </div>
        <div className="face p-4 bottom">
          <img src="https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cube;
