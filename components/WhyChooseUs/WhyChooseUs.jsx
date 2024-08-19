import Image from "next/image";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiShipFill } from "react-icons/ri";
import { FaShip } from "react-icons/fa6";
const FeaturesSection = () => {
  return (
    <section
      id="servicest"
      className="relative pt-24 pb-24 md:pb-20 lg:pt-32 overflow-hidden"
    >
      {/* Main Container */}
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
              <div className="relative pb-20 lg:pb-0">
                {/* First Card */}
                <div className="absolute top-0 left-0 -mt-8 md:mt-9 inline-flex p-4 bg-white rounded-3xl shadow-xl">
                  <Image
                    src="/Avatar/a1.jpg"
                    alt="avater"
                    width={56}
                    height={56}
                    className="w-10 h-10 rounded-full mx-auto object-cover"
                  />
                  <div className="mx-3">
                    <span className="font-semibold">Received $450.00</span>
                    <span className="block text-sm text-gray-500">
                      From Angelilce Neisa!
                    </span>
                  </div>
                  <div className="items-start">
                    <Image
                      src="/Blue_Badge.png"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                {/* Second Card */}
                <div className="absolute bottom-0 right-0 max-w-xs lg:-mb-16">
                  <div className="px-6 pt-6 pb-6 lg:pr-16 bg-white rounded-3xl shadow-xl">
                    <div className="inline-flex mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200">
                        <FaShippingFast />
                      </div>
                      <div className="mx-3">
                        <span className="text-sm font-semibold">
                          Sign Up for Free
                        </span>
                        <span className="block text-xs text-gray-500">
                          Sign up our app for free
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-200">
                        <RiShipFill />
                      </div>
                      <div className="mx-3">
                        <span className="text-sm font-semibold">
                          Sign Up for Free
                        </span>
                        <span className="block text-xs text-gray-500">
                          Sign up our app for free
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200">
                        <FaShip />
                      </div>
                      <div className="mx-3">
                        <span className="text-sm font-semibold">
                          Sign Up for Free
                        </span>
                        <span className="block text-xs text-gray-500">
                          Sign up our app for free
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Main Image */}
                <div className="">
                  <Image
                    src="/bg.png"
                    alt=""
                    width={500}
                    height={400}
                    layout="responsive"
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-1/2 px-4 mb-24 lg:mb-0">
              <div className="max-w-lg mx-auto lg:mr-0">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                  TRANSPORT
                </span>
                <h1 className="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-6">
                  <span>Safe and Easy</span> <br />
                  <span className="font-serif italic">Transportation</span>{" "}
                  <br />
                  <span>Services</span>
                </h1>
                <p className="text-lg font-semibold mb-6">
                  The transportation system is fast and reliable, helping you
                  with secure travel and goods transportation.
                </p>
                <p className="text-gray-400">
                  We use modern technology to make your goods transportation
                  easy and dependable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
