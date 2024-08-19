import React from "react";
import QuoteForm from "./QuoteForm";
import PartnerLogos from "./PartnerLogos";

function AboutUs() {
  return (
    <section
      id="about"
      className="flex overflow-hidden flex-col bg-slate-900 bg-opacity-90"
    >
      <div className="flex relative flex-col w-full min-h-[629px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aa78bb6d068dac5b1bcc6e4447b62d9b49f9d3ac76c85d43c5d2d27e6f19e9d?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div
          className="flex relative flex-col items-center px-16 w-full bg-slate-900 bg-opacity-90 
        max-md:px-5 max-md:max-w-full"
        >
          <div className=" max-w-screen-xl ">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                  <h2 className="self-start text-base font-semibold leading-tight text-blue-600">
                    ABOUT US
                  </h2>
                  <h3 className="self-start mt-3.5 text-3xl font-semibold leading-9 text-white max-md:max-w-full">
                    We are the face of transportation <br /> industry in the
                    world
                  </h3>
                  <p className="mt-8 text-base leading-7 text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incidi <br /> dunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exerci{" "}
                    <br /> tation ullamco. Laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in <br /> repre henderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <PartnerLogos />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
