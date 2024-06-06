import React, { useState } from "react";
import LandingImage from "../../public/homescape1.png";
import { PiWaveSineDuotone } from "react-icons/pi";
import Link from "next/link";
import { FaCheckCircle, FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

const Homescape = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "Which pests do you treat?",
      answer:
        "Our service partners can treat bedbugs, mice, rats, flies, moths, cockroaches, ants, spiders, squirrels, flies, woodworm, dust mites, carpet beetles. RM Pestokill is your one-stop solution for pest control services.",
      isAnswerVisible: false,
    },
    {
      question: "Do you work with all types of residences / businesses?",
      answer:
        "Yes, we work with all kinds of clients - whether they are  commercial (food processing industry, restaurants warehouses etc) as well as wholesale and retail stores across London",
      isAnswerVisible: false,
    },
    {
      question:
        "Will you leave a mess in my property, do I need to clean up after you finish?",
      answer:
        "You can rest easily knowing that we don't leave any mess or waste at your home. It is however advisable not to clean your home after pest control service for at least 2 hours but if you wish to do so you can go ahead with cleaning",

      isAnswerVisible: false,
    },
    {
      question: "Do I need to be out of the premises during the treatment?",
      answer:
        "This is dependant on the treatment. If it involves spraying/fumigation - then you have to leave the space where sprays has been applied at least for a couple of hours. However, you will be instructed beforehand according to your personalised service as to what steps need to be taken prior to your visit and for the future too!",
      isAnswerVisible: false,
    },
  ]);

  const toggleAnswer = (index: any) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isAnswerVisible: !item.isAnswerVisible } : item
      )
    );
  };

  return (
    <div className="flex py-20 gap-10 w-full px-[8rem] flex-row">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
        className="w-2/3 gap-14 flex flex-col"
      >
        <div className="">
          <img
            src={LandingImage.src}
            alt="Landing Page"
            className="rounded-lg imageShadow"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg tracking-tight text-black font-semibold">
            About this template
          </h1>
          <hr className="my-4" />
          <div className="flex gap-4 text-gray-700 flex-col">
            <div>
              <p>
                Stellar is a lovely landing page template crafted with the
                modern tech landscape in mind. Its stunning dark interface and
                beautiful hand-drawn illustrations will make your product stand
                out and boost your product conversions.
              </p>
              <p>
                Stellar is not only a pretty face; it comes equipped with over
                ten pre-designed pages, ready-made components, actionable
                elements, and UX patterns that serve multiple use cases and
                needs. With Stellar, you don’t need to be a professional
                designer to create a landing page that looks like some notable
                players in the industry and amazes your customers from the first
                interaction.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-base tracking-tight text-black font-semibold">
                What’s included
              </h1>
              <p>
                Stellar is not only a pretty face; it comes equipped with over
                ten pre-designed pages, ready-made components, actionable
                elements, and UX patterns that serve multiple use cases and
                needs. With Stellar, you don’t need to be a professional
                designer to create a landing page that looks like some notable
                players in the industry and amazes your customers from the first
                interaction.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-base tracking-tight text-black font-semibold">
                Built for
              </h1>
              <p>
                This template is designed for modern tech startups and software
                that need a contemporary look and a unique visual presence.
              </p>
            </div>
          </div>

          <div className="w-full flex py-20 gap-2 flex-col">
            <h1 className="text-lg tracking-tight text-black font-semibold">
              FAQ&apos;s
            </h1>
            {/* <hr className="my-4" /> */}
            <div className="flex font-uncut w-full flex-col flex-wrap">
              {faqItems.map((item, index) => (
                <div key={index}>
                  <p
                    onClick={() => toggleAnswer(index)}
                    className="flex my-3 flex-row gap-2 items-center cursor-pointer text-gray-800"
                  >
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: item.isAnswerVisible ? 90 : 0,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {" "}
                      <AiOutlinePlus className="text-blue-800 text-[13px] sm:text-lg" />{" "}
                    </motion.span>
                    {item.question}
                  </p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: item.isAnswerVisible ? "auto" : 0,
                      opacity: item.isAnswerVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="flex text-gray-600 text-sm flex-wrap mb-3">
                      {/* Replace with your answer content */}
                      {item.answer}
                    </p>
                  </motion.div>
                  <hr className="my-2" />
                </div>
              ))}
              <p className="text-sm text-gray-500 mt-4 mb-4">
                Other questions or requests? Send us an email to:
                rmpestokill@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col py-20 border border-gray-300 rounded-lg bg-[#1e293b] justify-center overflow-hidden items-center">
            <div className="flex flex-col items-center px-14 gap-10 ">
              <h1 className="text-4xl font-bold tracking-tighter text-white text-center">
                Not sure which template to buy? Get all of them for{" "}
                <span className="text-blue-500">$89</span>{" "}
              </h1>
              <button className="bg-blue-500  w-max transition-all hover:opacity-80 flex flex-row items-center gap-2 text-white text-sm px-4 py-3 rounded shadow-lg">
                <p>Get Unlimited Access</p>{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
        className="w-1/3 flex py-8 flex-col"
      >
        <div className="flex flex-row w-full items-end justify-between">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900">
            Homescape
          </h1>
          <p className="text-2xl tracking-tighter font-bold text-blue-500">
            $29.00
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row pl-[0/1rem] items-center py-2 gap-1">
            <div className="p-[0.2rem] bg-clip-padding border border-gray-200 rounded bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-20">
              <PiWaveSineDuotone className="text-blue-700" />
            </div>
            <h1 className={`text-gray-800 font-medium w-max tracking-tighter`}>
              Untitled <span className="text-blue-500">UI</span>
            </h1>
          </div>
          <p className="text-gray-600 tracking-tight">
            Mosaic comes with hundreds of ready-made pages and sections to let
            you create any type of web application for yourself or your clients.
          </p>
        </div>
        <div className="flex w-full flex-row gap-6 py-4 items-center">
          <Link className="w-1/2" href="https://homescape-nu.vercel.app/">
            <button className="bg-white w-full font-medium border border-gray-200 transition-all hover:opacity-80 items-center gap-2 text-gray-800 text-sm px-3 py-2 rounded shadow">
              <p>Live Demo </p>
            </button>
          </Link>
          <button className="bg-blue-500 w-1/2 font-medium transition-all hover:opacity-80 items-center gap-2 text-white text-sm px-3 py-2 rounded shadow-lg">
            <p>Buy Now - $29</p>{" "}
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex py-2 gap-6 flex-col">
          <p className="text-sm text-gray-600 font-semibold">FEATURES</p>
          <div className="flex flex-row w-full">
            <div className="flex w-1/2 items-center gap-2 flex-row">
              <div className="flex bg-sky-100 p-[0.3rem] rounded flex-row">
                <FaCheckCircle className="text-sm text-blue-500" />
              </div>
              <p>Easily customizable</p>
            </div>
            <div className="flex w-1/2 items-center gap-2 flex-row">
              <div className="flex bg-sky-100 p-[0.3rem] rounded flex-row">
                <FaCheckCircle className="text-sm text-blue-500" />
              </div>
              <p className="w-max">Accessible</p>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex w-1/2 items-center gap-2 flex-row">
              <div className="flex bg-sky-100 p-[0.3rem] rounded flex-row">
                <FaCheckCircle className="text-sm text-blue-500" />
              </div>
              <p>Fast loading times</p>
            </div>
            <div className="flex w-1/2 items-center gap-2 flex-row">
              <div className="flex bg-sky-100 p-[0.3rem] rounded flex-row">
                <FaCheckCircle className="text-sm text-blue-500" />
              </div>
              <p>SEO Friendly</p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex py-2 gap-6 flex-col">
          <p className="text-sm text-gray-600 font-semibold">TECH STACK</p>
          <div className="flex flex-row gap-3 items-center">
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
        </div>
      </motion.div>
    </div>
  );
};

export default Homescape;
