import FAQ from "@/components/FAQ";
import Trusted from "@/components/Trusted";
import { motion } from "framer-motion";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const getAccess = () => {
  return (
    <div>
      <div className="w-full py-[8rem] flex gap-6 flex-col px-[8rem] items-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
          className="text-4xl w-[80%] font-bold tracking-tighter text-gray-900 md:text-6xl text-center"
        >
          Get everything, and more!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
          className="text-center w-[50%] text-xl text-gray-500"
        >
          Buy now and get instant access to our entire gallery of 20 templates,
          new releases and lifetime support & updates.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
          className="w-1/4 cardShadow border-gray-300 bg-white py-2 px-2 my-6 border rounded-lg"
        >
          <div className="flex flex-col py-3 gap-3 px-3">
            <p className="font-semibold">Limited time offer ✨</p>
            <p className="text-5xl tracking-tighter font-bold text-blue-500">
              $89
            </p>
            <p className="text-base text-gray-500">
              Get lifetime value for a simple one-time payment.
            </p>
            <button className="bg-blue-500  justify-center transition-colors duration-300 hover:opacity-80 flex flex-row items-center gap-2 text-white text-sm px-4 py-3 rounded shadow-lg">
              <p>Get Unlimited Access</p>{" "}
              <FaArrowRightLong className="text-gray-300 mt-[2px] arrow-icon" />
            </button>
            <hr className="my-3 bg-gray-100" />
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 items-center">
                <FaCheck className="text-green-500 text-xs" />
                <p className="text-sm text-gray-500">
                  Lifetime access to all templates
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaCheck className="text-green-500 text-xs" />
                <p className="text-sm text-gray-500">
                  Lifetime Access to new templates
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaCheck className="text-green-500 text-xs" />
                <p className="text-sm text-gray-500">
                  Use in unlimited projects
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaCheck className="text-green-500 text-xs" />
                <p className="text-sm text-gray-500">
                  Lifetime support & updates
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Trusted />
      <FAQ />
    </div>
  );
};

export default getAccess;
