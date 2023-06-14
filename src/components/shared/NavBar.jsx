//Image's
import profPic from "../../assets/IMG_3864.png";
import Moon from "../../assets/moon.svg";
import MoonWhite from "../../assets/moon white.svg";
import Sun from "../../assets/sun.svg";
import SunWhite from "../../assets/sun White.svg";

//Motion
import { motion } from "framer-motion";

//Routes
import { Link } from "react-router-dom";

function NavBar({ darkModeToggle, darkMode }) {
  return (
    <header
      className={`${
        darkMode ? "bg-[#275E5D]" : "bg-[#429e9d]"
      } flex items-center justify-between bg-fixed align-middle font-bold text-black shadow-md  shadow-gray-500 dark:text-white`}
    >
      <div className="flex">
        <ul className="flex flex-row">
          <Link to="/">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="m-2  ml-6 cursor-pointer items-center border-[#ff7f50] pb-2 pt-2 opacity-70 hover:border-b-2 hover:opacity-100"
            >
              Home
            </motion.li>
          </Link>
          <Link to="/aboutus">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="m-2  cursor-pointer items-center border-[#ff7f50] pb-2 pt-2 opacity-70 hover:border-b-2 hover:opacity-100"
            >
              About Me
            </motion.li>
          </Link>
          <Link to="/contact">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="m-2  cursor-pointer items-center border-[#ff7f50] pb-2 pt-2 opacity-70 hover:border-b-2 hover:opacity-100"
            >
              Contact Me
            </motion.li>
          </Link>
        </ul>
      </div>
      <div className="m-2 mr-6 flex items-end">
        <motion.button
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          onClick={darkModeToggle}
        >
          <img src={darkMode ? `${MoonWhite}` : `${Sun}`} />
        </motion.button>
      </div>
      {/* <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        className="m-2 mr-6 flex items-end"
      >
        <img src={profPic} alt="Profile" className="w-10 rounded-3xl" />
      </motion.div> */}
    </header>
  );
}

export default NavBar;
