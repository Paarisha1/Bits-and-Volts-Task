import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-[#191A23] text-white px-6 lg:px-20 py-16 rounded-t-3xl">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
        <h3 className="text-2xl font-bold bg-[#B9FF66] text-black w-fit px-2 py-1 rounded">
          Testimonials
        </h3>
        <p className="text-sm text-white max-w-md mt-2 lg:mt-0">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border border-[#B9FF66] rounded-2xl p-6 bg-[#191A23] text-white relative"
            >
              <div className="absolute top-0 left-4 w-5 h-5 border-l-2 border-t-2 border-[#B9FF66] rotate-45 bg-[#191A23] -translate-y-1/2"></div>
              <p className="text-sm leading-relaxed">
                “We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence.”
              </p>
              <div className="mt-4">
                <p className="text-[#B9FF66] font-bold">John Smith</p>
                <p className="text-xs">Marketing Director at XYZ Corp</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {[0, 1, 2, 3, 4].map((dot, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === 1 ? "bg-[#B9FF66]" : "bg-white"
              }`}
            ></span>
          ))}
        </div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-lg cursor-pointer">
          <FaArrowLeft className="mx-2" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-lg cursor-pointer">
          <FaArrowRight className="mx-2" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
