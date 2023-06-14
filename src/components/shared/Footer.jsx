//SVG's White
import HomeWhite from "../../assets/home white.svg";
import GithubWhite from "../../assets/github white.svg";
import InstaWhite from "../../assets/instagram white.svg";
import MailWhite from "../../assets/mail white.svg";
//SVG's Black
import Home from "../../assets/home.svg";
import Github from "../../assets/github.svg";
import Insta from "../../assets/instagram.svg";
import Mail from "../../assets/mail.svg";

//Router
import { Link } from "react-router-dom";

//Motion
import { motion } from "framer-motion";

function Footer({ darkMode }) {
  return (
    <div
      className={`fixed bottom-0 w-full ${
        darkMode ? "bg-[#AF5939]" : "bg-[#ff7f50]"
      } px-6 py-3`}
    >
      <footer className="flex items-center justify-between text-black dark:text-white">
        <div className="items-center align-middle">
          &copy; 2023 <span className="font-bold ">Shahab Tabatabaei</span> All
          Rights Reserved.
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={darkMode ? `${HomeWhite}` : `${Home}`}
              alt="Home Logo"
              className="px-2"
            />
          </Link>
          <Link to="https://github.com/itS-ShhB" target="_blank">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={darkMode ? `${GithubWhite}` : `${Github}`}
              alt="Github Logo"
              className="px-2"
            />
          </Link>
          <Link to='https://instagram.com/shahab.tabatabaeiii?igshid=NGExMmI2YTkyZg==' target='_blank'>
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={darkMode ? `${InstaWhite}` : `${Insta}`}
              alt="Instagram Logo"
              className="px-2"
            />
          </Link>
          <Link to="mailto:its.shhwb@gmail.com">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={darkMode ? `${MailWhite}` : `${Mail}`}
              alt="Mail Logo"
              className="px-2"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
