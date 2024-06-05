import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQ = () => {
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
    <div className="flex w-full pt-[7rem] pb-10 px-4 md:px-14 flex-row flex-wrap items-center justify-center">
      <div className="w-full flex gap-2 flex-col">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-800 md:text-5xl text-center">
          Got Questions? We&apos;ve got Answers!
        </h1>
        <p className="text-gray-800 font-uncut tracking-tight text-center">
          Some frequently asked questions
        </p>
        <div className="flex font-uncut w-full flex-col mt-9 px-0 md:px-36 flex-wrap">
          {faqItems.map((item, index) => (
            <div key={index}>
              <p
                onClick={() => toggleAnswer(index)}
                className="flex m-4 flex-row gap-2 text-lg sm:text-xl items-center cursor-pointer text-gray-800"
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
                <p className="flex text-gray-600 text-sm flex-wrap mb-3 mr-2 ml-[2.4rem] md:ml-[2.7rem]">
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
    </div>
  );
};

export default FAQ;
