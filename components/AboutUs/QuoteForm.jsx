import Image from "next/image";
import React from "react";

function QuoteForm() {
  return (
    <div className="flex relative flex-col grow px-14 pt-14 pb-28 text-base font-semibold text-white min-h-[629px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <Image
        loading="lazy"
        src="/About/blue_part.png"
        alt="blue_part"
        width={1920}
        height={1080}
        className="object-cover absolute inset-0 size-full"
      />
      <form className="relative">
        <h2 className="text-3xl leading-tight mb-7">Get A Quote</h2>
        <div className="mb-5">
          <label htmlFor="fullName" className="block leading-loose">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full h-10 bg-gray-200"
            aria-label="Full Name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block leading-loose">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full h-10 bg-gray-200"
            aria-label="Email Address"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block leading-loose">
            Phone No.
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full h-10 bg-gray-200"
            aria-label="Phone Number"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="topic" className="block leading-loose">
            Topic to discuss
          </label>
          <select
            id="topic"
            className="w-full px-5 py-3.5 mt-4 text-sm bg-gray-200 text-neutral-400"
            aria-label="Topic to discuss"
          >
            <option>Sole Proprietorship</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-16 pt-px pb-7 mt-1.5 text-sm leading-10 text-center whitespace-nowrap border-2 border-solid bg-slate-900 border-slate-900 max-md:px-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuoteForm;
