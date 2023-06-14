import { motion } from "framer-motion";
import { useState } from "react";

function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ml-6 flex items-center justify-center ">
      {/* <div className="mt-8 max-w-sm cursor-default overflow-hidden rounded bg-white opacity-50 shadow-lg hover:opacity-100">
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Welcome</div>
          <p className="text-base text-gray-700">
            Hi my name is Shahab Tabatabaei.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;
