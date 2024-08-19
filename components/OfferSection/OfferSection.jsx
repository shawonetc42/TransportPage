import React from "react";
import OfferCard from "./OfferCard";

const offerData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e115576cb22ed20857c815ec671abecd842faf98166148a8c2833d286de213d3?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    title: "Customer Support",
    description:
      "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1415e48f340e656ecb560fac693ac77843696a7cd687afba223e130b61e2bb6?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    title: "Delivery On time",
    description:
      "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8620c59068d88f97dc882c8d7a78a480056a8b32da350aa2727a55b695e32dc8?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    title: "Solid Dedication",
    description:
      "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/736921377d769fb2652f72ab4d14253acc6c95a01e677e848b393e2aff5fd8a9?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
    title: "Professional Culture",
    description:
      "Sed quia non numquam eius modi tempo ra incidunt ut labore et dolore magnam aliq uam quaera.",
  },
];

function OfferSection() {
  return (
    <section className="overflow-hidden px-4 py-8 mx-auto max-w-screen-xl">
      <div className="flex gap-5 max-md:flex-col justify-center items-center">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3fdff9f6f47a573c5f23cf5d7d752638f68233c1030ebed373c3a9e0520651?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
            alt="Offer Image"
            className="object-contain w-full aspect-[1.53] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-3xl font-bold leading-tight text-slate-900">
              What we offer
            </h2>
            <p className="mt-8 text-base leading-7 text-neutral-500 max-md:mr-2 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
              <br />
              magna aliqua ut enim ad minim veniam.
            </p>
            <div className="flex flex-wrap md:flex-auto gap-10 mt-16 w-full max-md:mt-10 max-md:max-w-full">
              {offerData.slice(0, 2).map((offer, index) => (
                <OfferCard key={index} {...offer} />
              ))}
            </div>
            <div className="flex flex-wrap gap-10 mt-20 w-full max-md:mt-10 max-md:max-w-full">
              {offerData.slice(2).map((offer, index) => (
                <OfferCard key={index + 2} {...offer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
