/**
 * This code was generated by Builder.io.
 */
import React from "react";

function ServiceCard({ title, description }) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow w-full bg-white max-md:mt-8">
        <div className="flex flex-col items-start p-10 border border-solid border-neutral-200 max-md:px-5">
          <h3 className="text-xl font-semibold leading-tight text-neutral-900">
            {title}
          </h3>
          <div className="flex shrink-0 mt-1.5 bg-blue-600 h-[3px] w-[26px]" />
          <p className="self-stretch mt-6 text-base leading-6 text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
