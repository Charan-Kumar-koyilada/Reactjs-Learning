import React from "react";
import Section1 from "./components/section-1/section-1";
import Section2 from "./components/section-1/section-2/section-2";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1762341117487-dbc411bcf574?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Unserserved",
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underbanged",
    },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
}

export default App;
