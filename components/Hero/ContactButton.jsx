import React from "react";

function ContactButton() {
  return (
    <div className="relative flex items-center justify-center w-52 h-14 text-base font-medium leading-4 text-white rounded-md overflow-hidden max-md:w-full">
      {/* Background Image */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41eba896d00ed33f2c8a8a639023380a47f174e6274d1978b14f9b6ed6432c86?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Contact Text */}
      <span className="relative z-10">+123 (4567) 890</span>

      {/* Hover effect */}
      <div className="absolute inset-0 transition-opacity duration-300 ease-in-out hover:bg-black hover:bg-opacity-20" />
    </div>
  );
}

export default ContactButton;
