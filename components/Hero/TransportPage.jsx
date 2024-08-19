import React from "react";
import HeroSection from "./HeroSection";

function TransportPage() {
  const heroContent = {
    title: "Transport & Logistics",
    description:
      "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
    buttons: [
      { text: "About us", primary: true },
      { text: "Services", primary: false },
    ],
  };

  return (
    <main className="relative flex flex-col py-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.mixkit.co/videos/30979/30979-720.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection
          title={heroContent.title}
          description={heroContent.description}
          buttons={heroContent.buttons}
          className="custom-class" // Optional: Additional custom classes can be added
        />
      </div>

      {/* Optional: Add an overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </main>
  );
}

export default TransportPage;
