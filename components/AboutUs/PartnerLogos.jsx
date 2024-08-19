import Image from "next/image";
import React from "react";

const logos = [
  {
    src: "/About/1.png",
    alt: "Partner logo 1",
    width: 130,
    height: 130,
    aspect: 1.88,
  },
  {
    src: "/About/2.png",
    alt: "Partner logo 2",
    width: 130,
    height: 130,
    aspect: 1.88,
  },
  {
    src: "/About/3.png",
    alt: "Partner logo 4",
    width: 129,
    height: 129,
    aspect: 1.87,
  },
  {
    src: "/About/4.png",
    alt: "Partner logo 4",
    width: 129,
    height: 129,
    aspect: 1.87,
  },
];

function PartnerLogos() {
  return (
    <div className="flex flex-wrap gap-5 mt-9">
      {logos.map((logo, index) => (
        <Image
          key={index}
          loading="lazy"
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`object-contain shrink-0 max-w-full w-[${logo.width}px]`}
          style={{ aspectRatio: logo.aspect }}
        />
      ))}
    </div>
  );
}

export default PartnerLogos;
