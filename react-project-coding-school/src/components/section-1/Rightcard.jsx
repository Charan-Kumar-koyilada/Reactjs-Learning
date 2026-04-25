import React from "react";

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden w-100 relative rounded-4xl">
      <img
        className="h-full w-full rounded-4xl object-cover"
        src={props.img}
        alt="PROFESSIONAL WORKING"
      />
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col gap-6">
        <h2
          className=" bg-white
          text-2xl
          font-bold
          rounded-full
          h-12
          w-12
          items-center
          flex
          justify-center"
        >
          {props.id + 1}
        </h2>
        <p className="text-lg leading-relaxed text-white mt-110">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a et
          in reprehenderit esse quas!
        </p>
        <div className="flex flex-row -mx-8 px-2 items-center justify-between">
          <button className="text-white text-sm px-4 py-2 bg-blue-500 rounded-full">
            {props.tag}
          </button>

          <button className="bg-blue-500 rounded-full p-3 flex items-center justify-center">
            <i className="ri-arrow-right-line text-white text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightcard;
