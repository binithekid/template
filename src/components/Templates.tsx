import React from "react";
import Homescape from "../../public/homescape.png";
import HomescapeBottom from "../../public/homescapebottomhalf.png";
import Link from "next/link";
import { FaHtml5, FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Templates = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-14 px-[8rem]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
          className="flex  border-spacing-7 border border-gray-200 shadowe rounded-lg bg-gradient-to-bl from-[#d6d6d6] from-10% via-[#e7ebee] via-30% to-white to-90% items-center flex-row"
        >
          <div className="w-2/5 flex flex-col gap-1 px-8">
            <p className="font-bold text-2xl tracking-tighter text-gray-800">
              Homescape
            </p>
            <p className="text-gray-700">
              The ultimate admin dashboard template for creating stunning and
              responsive apps.
            </p>
            <div className="flex py-2 flex-row gap-3 items-center">
              <div className="p-[0.3rem] bg-white shadow rounded-full border border-gray-200">
                <FaReact className="text-xl text-sky-400" />
              </div>
              <div className="p-[0.3rem] bg-white shadow rounded-full border border-gray-200">
                <FaHtml5 className="text-xl text-orange-700" />
              </div>

              <div className="p-[0.3rem] bg-white shadow rounded-full border border-gray-200">
                <RiNextjsFill className="text-xl " />
              </div>

              <div className="p-[0.3rem] bg-white shadow rounded-full border border-gray-200">
                <SiTailwindcss className="text-xl text-blue-400" />
              </div>

              <div className="p-[0.3rem] bg-white shadow rounded-full border border-gray-200">
                <SiFramer className="text-xl text-gray-800" />
              </div>
            </div>
            <div className="flex flex-row gap-6 py-2 items-center">
              <Link href="https://homescape-nu.vercel.app/">
                <button className="bg-white font-medium border border-gray-200 transition-all hover:opacity-80 flex flex-row items-center gap-2 text-gray-800 text-sm px-3 py-2 rounded shadow">
                  <p>Live Demo </p>
                </button>
              </Link>
              <Link href="/homescape">
                <button className="bg-blue-500 transition-all hover:opacity-80 flex flex-row items-center gap-2 text-white text-sm px-3 py-2 rounded shadow-lg">
                  <p>Buy Now - $29</p>{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-3/5 pl-10 flex flex-row gap-4 justify-center overflow-hidden">
            <img
              className="w-[47%] mt-5 screehshotshadow"
              src={Homescape.src}
            />
            <img
              className="w-[47%] screehshotshadow"
              src={HomescapeBottom.src}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Templates;
