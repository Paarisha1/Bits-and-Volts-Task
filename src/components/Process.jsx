import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    desc: "We’ll research your market and competitors and develop a custom strategy to help you meet your goals.",
  },
];

const Process = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 lg:px-20 py-10">
      <div className="lg:flex lg:items-end lg:justify-between mb-6">
        <h3 className="text-2xl font-bold text-black bg-[#B9FF66] w-fit px-2 py-1 rounded mb-2 lg:mb-0">
          Our Working Process
        </h3>
        <p className="text-sm text-gray-700 lg:ml-4">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`rounded-2xl border-2 border-black shadow-md transition-all duration-300 ${
              openIndex === i ? "bg-[#B9FF66]" : "bg-white"
            }`}
          >
            <div
              className="flex items-center justify-between p-6 cursor-pointer"
              onClick={() => toggleStep(i)}
            >
              <h4 className="text-xl font-semibold text-black">
                <span className="mr-3 font-extrabold text-2xl">
                  {step.number}
                </span>
                {step.title}
              </h4>
              <span className="text-xl text-black">
                {openIndex === i ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {openIndex === i && (
              <p className="px-6 pb-6 pt-0 text-sm text-black">{step.desc}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
