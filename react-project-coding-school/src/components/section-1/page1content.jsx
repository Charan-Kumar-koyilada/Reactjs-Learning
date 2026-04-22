import React from "react";
import Rightcontent from "./Rightcontent";
import Leftcontent from "./Leftcontent";
const page1content = (props) => {
  console.log(props);
  return (
    <div className="py-6 px-18 h-[90vh] bg-white flex items-center gap-10">
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  );
};

export default page1content;
