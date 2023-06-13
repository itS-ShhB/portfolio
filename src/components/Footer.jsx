import Github from "../assets/github (1).svg";
import Insta from "../assets/instagram.svg";
import Mail from "../assets/mail.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-[#ff7f50] px-6 py-3">
      <footer className="flex justify-between">
        <div>this is footer</div>
        <div>this is footer</div>
        <div className="flex flex-row justify-between">
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
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={Mail}
            alt="Mail Logo"
            className="px-2"
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
