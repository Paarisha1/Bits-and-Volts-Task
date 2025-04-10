import React from "react";
import img1 from "../assets/img1.png"
const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
          Navigating the <br /> digital landscape <br /> for success
        </h2>
        <p className="text-gray-700">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Book a consultation
        </button>
      </div>
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={img1}
          alt="Hero Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
