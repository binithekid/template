import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiWaveSineDuotone } from "react-icons/pi";
import { Archivo } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
      className="w-full flex flex-col"
    >
      <div className="bg-gradient-to-r py-3 from-black from-10% via-sky-600 via-50% to-black to-90% flex flex-col items-center justify-center">
        <p className="text-white text-sm">
          ✨ Get all templates and new upcoming releases for just $89. Limited
          time offer ✨
        </p>
      </div>
      <div className="flex w-full px-[8rem] items-center justify-between py-4">
        <Link href="/">
          <div className="flex flex-row items-center gap-2">
            <div className="p-[0.2rem] bg-clip-padding border border-gray-200 rounded bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-20">
              <PiWaveSineDuotone className="text-blue-700 text-xl" />
            </div>
            <h1
              className={` ${archivo.className}text-gray-800 tracking-tight font-medium w-max text-xl`}
            >
              Untitled <span className="text-blue-500">UI</span>
            </h1>
          </div>
        </Link>
        <div className="flex flex-row items-center gap-3">
          <p className="text-sm">Documentation</p>
          <p className="-mt-1 text-gray-400 font-light text-xl">|</p>
          <Link href="/blog">
            <p className="text-sm pr-4">Blog</p>
          </Link>
          <Link href="/getAccess">
            <button className="bg-blue-500 transition-colors duration-300 hover:opacity-80 flex flex-row items-center gap-2 text-white text-sm px-4 py-3 rounded shadow-lg">
              <p>Get Unlimited Access</p>{" "}
              <FaArrowRightLong className="text-gray-300 mt-[2px] arrow-icon" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
