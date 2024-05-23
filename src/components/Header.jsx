import React from "react";

const Header = ({title}) => {
  return (
    <div>
      <h1 className="text-[5rem] text- font-bold absolute top-[5rem] text-txt-header opacity-60">
        {title}
      </h1>
    </div>
  );
};

export default Header;
