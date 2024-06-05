import React from "react";
import Image from "next/image";
import { FiTwitter, FiMail } from "react-icons/fi";
import Link from "next/link";
import { PiWaveSineDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex border-t border-gray-200 bg-white pt-10 mt-20 justify-center items-center flex-col">
      <Link href="/">
        <div className="flex flex-row items-center py-2 gap-2">
          <div className="p-[0.2rem] bg-clip-padding border border-gray-200 rounded bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-20">
            <PiWaveSineDuotone className="text-blue-700 text-xl" />
          </div>
          <h1 className={`text-gray-800 font-medium w-max text-xl`}>
            Untitled <span className="text-blue-500">UI</span>
          </h1>
        </div>
      </Link>
      <div className="py-2 md:text-md text-sm flex flex-row gap-8">
        <Link href="/termsOfService" target="_blank" rel="noopener noreferrer">
          <p className="text-gray-600 font-uncut tracking-tight">Blog</p>
        </Link>
        <Link href="/privacyPolicy" target="_blank" rel="noopener noreferrer">
          <p className="text-gray-600 font-uncut tracking-tight">
            Privacy Policy
          </p>
        </Link>
        <Link href="/termsOfService" target="_blank" rel="noopener noreferrer">
          <p className="text-gray-600 font-uncut tracking-tight">
            Terms of Service
          </p>
        </Link>
      </div>
      <div className="py-1 flex flex-row gap-8">
        <Link href="https://twitter.com/AimHireAI">
          <FiTwitter className="text-gray-500 text-md md:text-xl" />
        </Link>
        <Link href="mailto:aimhireai@gmail.com">
          <FiMail className="text-gray-500 text-md md:text-xl" />
        </Link>
      </div>
      <div className="py-2 flex flex-row gap-8 mb-8">
        <p className="text-sm text-gray-600 font-uncut tracking-tight">
          © 2024 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
