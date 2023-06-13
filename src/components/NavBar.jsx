import React from "react";
import profPic from "../assets/IMG_3864.png";
import { motion } from "framer-motion";
// import { useState } from "react";

function NavBar() {
  // const [fliped, setFliped] = useState(true);

  // if (fliped === true) {
  //   Array.prototype.slice
  //     .call(document.querySelectorAll("div,p,span,img,a,body"))
  //     .map(function (tag) {
  //       tag.style["transform"] = "rotate(" + 180 + "deg)";
  //     });
  // } else {
  //   Array.prototype.slice
  //     .call(document.querySelectorAll("div,p,span,img,a,body"))
  //     .map(function (tag) {
  //       tag.style["transform"] = "rotate(" + 0 + "deg)";
  //     });
  // }

  // const clickHandler = () => {
  //   setFliped(!fliped);
  // };
  return (
    <header className="flex items-center justify-between bg-[#429e9d] bg-fixed align-middle font-bold text-black  shadow-md shadow-gray-500">
      <div className="flex">
        <ul className="flex flex-row">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="m-2  ml-6 cursor-pointer items-center border-[#ff7f50]   pb-2 pt-2 opacity-70 hover:border-b-2 hover:opacity-100"
          >
            <button>Home</button>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="m-2  cursor-pointer items-center border-[#ff7f50] pb-2 pt-2 opacity-70 hover:border-b-2 hover:opacity-100"
          >
            <button>About Me</button>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="m-2  cursor-pointer items-center border-[#ff7f50] pb-2 pt-2 opacity-70 hover:border-b-2 hover:opacity-100"
          >
            <button>Contact Me</button>
          </motion.li>
        </ul>
      </div>
      <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        className="m-2 mr-6 flex items-end"
        // onClick={clickHandler}
      >
        <img src={profPic} alt="Profile" className="w-10 rounded-3xl" />
      </motion.div>
    </header>
  );
}

export default NavBar;
