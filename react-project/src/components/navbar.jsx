import React from "react";

const navbar = () => {
  return (
    <div className="justify-between items-start flex flex-row">
      <h4>Airlume.Ai</h4>

      <div className="gap-1 flex flex-row">
        <div>Home </div>
        <div>Features </div>
        <div>Loyalty Points</div>
        <div>How it works</div>
        <div>FAQ</div>
      </div>
      <div className="flex flex-row">
        <div>Log in </div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default navbar;
