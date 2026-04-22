import React from "react";
import "remixicon/fonts/remixicon.css";
import Arrow from "./arrow";
import Herotext from "./herotext";
const Leftcontent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 text-5xl font-bold">
      <Herotext />
      <Arrow />
    </div>
  );
};

export default Leftcontent;
