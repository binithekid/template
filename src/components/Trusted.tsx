import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const Trusted = () => {
  return (
    <div className="flex w-full py-[7rem] gap-10 relative z-50 flex-col bg-[rgb(30,41,59)]">
      <div className="px-40 flex items-center justify-center flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tighter text-white md:text-5xl text-center">
          Trusted by founders and developers alike
        </h1>
        <p className="text-xl text-gray-200">
          Loved by over 1,500 happy customers 👌
        </p>
      </div>
      <div className="px-40 flex flex-col md:flex-row gap-3">
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              We really appreciate the pest control services you have provided
              to us for the past two years. The professionalism shown by you and
              your staff is extremely importantin the small business world. I
              look forward to my next annual inspection this year!
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Robert Maxwell</p>
            <div className="flex  mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              RM Pesto Kill Company did a quick and excellent job ridding us of
              an infestation and has kept us pest free ever since 2016. I would
              highly recommend their services to anyone or any company that
              needs it.
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Maria Robinson</p>
            <div className="flex mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between shadow bg-white rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              Thank you so much for your outstanding service and the follow-up
              treatments making sure things were okay. Also, I appreciate you
              working around my work schedule to get the job done. I will use
              your services again in the future
            </p>
          </div>

          <div className="w-full mt-4 flex items-center justify-between">
            <p className="font-semibold">Kristina Bellis</p>
            <div className="flex flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-40 flex flex-col md:flex-row gap-3">
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              We really appreciate the pest control services you have provided
              to us for the past two years. The professionalism shown by you and
              your staff is extremely importantin the small business world. I
              look forward to my next annual inspection this year!
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Robert Maxwell</p>
            <div className="flex  mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              RM Pesto Kill Company did a quick and excellent job ridding us of
              an infestation and has kept us pest free ever since 2016. I would
              highly recommend their services to anyone or any company that
              needs it.
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Maria Robinson</p>
            <div className="flex mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between shadow bg-white rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              Thank you so much for your outstanding service and the follow-up
              treatments making sure things were okay. Also, I appreciate you
              working around my work schedule to get the job done. I will use
              your services again in the future
            </p>
          </div>

          <div className="w-full mt-4 flex items-center justify-between">
            <p className="font-semibold">Kristina Bellis</p>
            <div className="flex flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
