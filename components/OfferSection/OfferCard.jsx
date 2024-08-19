import React from "react";

function OfferCard({ icon, title, description }) {
  return (
    <div className="flex overflow-auto flex-row  flex-auto gap-5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 aspect-square rounded-[85px] w-[71px]"
      />
      <div className="flex flex-col mt-1">
        <h3 className="self-start text-xl font-semibold leading-tight text-neutral-900">
          {title}
        </h3>
        <p className="mt-2.5 text-base leading-6 text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OfferCard;
