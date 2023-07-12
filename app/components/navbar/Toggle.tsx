"use client";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  return (
    <div
      className={`relative w-12 rounded-full before:absolute before:w-5 before:h-5 before:rounded-full before:top-1 h-7 before:transition-all before:duration-300 before:ease-in-out cursor-pointer
        ${
          toggle
            ? "before:left-1 bg-white before:bg-black"
            : "before:left-6 bg-black before:bg-white"
        } 
        `}
      onClick={() => {
        if (document.body.classList.contains("dark")) {
          document.body.classList.remove("dark");
          setToggle(false);
        } else {
          document.body.classList.add("dark");
          setToggle(true);
        }
      }}
    ></div>
  );
};
export default Toggle;
