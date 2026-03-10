import React from "react";

export default function BackgroundLogo() {
  return (
    <div className="absolute inset-0 flex justify-center items-top pointer-events-none">
      <h1
        className="
        text-[300px]
        font-bold
        bg-gradient-to-r
        from-blue-400
        to-purple-400
        bg-clip-text
        text-transparent
        opacity-10
        select-none
      "
      >
        AIRLUME
      </h1>
    </div>
  );
}
