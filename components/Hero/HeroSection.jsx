import React from "react";
import ActionButton from "./ActionButton";

function HeroSection({ title, description, buttons, className }) {
  return (
    <section
      className={`flex relative flex-col items-start py-10 px-3 mt-80 mr-auto ml-auto md:ml-96 max-w-full text-base w-[588px] max-md:mt-10 ${className}`}
    >
      <h1 className="text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
      <p className="mt-5 leading-7 text-white max-md:max-w-full">
        {description}
      </p>
      <div className="flex justify-center gap-2.5 mt-12 font-medium leading-none max-md:mt-10">
        {buttons.map((button, index) => (
          <ActionButton
            key={index}
            text={button.text}
            primary={button.primary}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
