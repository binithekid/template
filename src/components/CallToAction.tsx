import React from "react";
import Homescape from "../../public/homescape.png";

const CallToAction = () => {
  return (
    <div className="flex flex-col mt-20 pt-20 mx-[8rem] border-spacing-7 border border-gray-300 shadowe rounded-lg bg-[#1e293b] justify-center overflow-hidden items-center">
      <div className="flex flex-col items-center px-[15rem] gap-1 ">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl text-center">
          Not sure which template to buy? Get all of them for{" "}
          <span className="text-blue-500">$89</span>{" "}
        </h1>
        <button className="bg-blue-500 mt-10 w-max transition-all hover:opacity-80 flex flex-row items-center gap-2 text-white text-sm px-4 py-3 rounded shadow-lg">
          <p>Get Unlimited Access</p>{" "}
        </button>
      </div>
      <div className="pt-16 flex px-40 items-center justify-center flex-row gap-8">
        <img
          className="w-[33%] -rotate-6 mt-5 -mb-[15rem] screehshotshadow"
          src={Homescape.src}
        />
        <img
          className="w-[33%] -rotate-6 mt-5 -mb-[15rem] screehshotshadow"
          src={Homescape.src}
        />
        <img
          className="w-[33%] -rotate-6 mt-5 -mb-[15rem] screehshotshadow"
          src={Homescape.src}
        />
      </div>
    </div>
  );
};

export default CallToAction;
