//SVG's
import Home from "../../assets/home.svg";
import Github from "../../assets/github (1).svg";
import Insta from "../../assets/instagram.svg";
import Mail from "../../assets/mail.svg";

//Router
import { Link } from "react-router-dom";

//Motion
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-[#ff7f50] px-6 py-3">
      <footer className="flex items-center justify-between">
        <div className="items-center align-middle">
          &copy; 2023 <span className="font-bold ">Shahab Tabatabaei</span> All
          Rights Reserved.
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={Home}
              alt="Home Logo"
              className="px-2"
            />
          </Link>
          <Link to="https://github.com/itS-ShhB" target="_blank">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={Github}
              alt="Github Logo"
              className="px-2"
            />
          </Link>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={Insta}
            alt="Instagram Logo"
            className="px-2"
          />
          <Link to="mailto:its.shhwb@gmail.com">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              src={Mail}
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
