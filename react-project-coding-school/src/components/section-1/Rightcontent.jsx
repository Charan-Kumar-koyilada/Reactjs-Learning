import React from "react";
import "remixicon/fonts/remixicon.css";
import Rightcard from "./Rightcard";
const Rightcontent = (props) => {
  console.log(props);
  return (
    <div
      id="right"
      className="h-full w-2/3 p-5 bg-white text-6xl font-bold flex flex-nowrap gap-4 "
    >
      {props.users?.map(function (elem, idx) {
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default Rightcontent;
