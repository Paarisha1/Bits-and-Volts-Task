import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img3 from "../assets/img3.png";
import img2 from "../assets/img2.png";

const services = [
  {
    title: "Search engine optimization",
    desc: "Learn more",
    bg: "bg-[#F3F3F3]",
    imgs: [img3],
  },
  {
    title: "Pay-per-click advertising",
    desc: "Learn more",
    bg: "bg-[#B9FF66]",
    imgs: [img2],
  },
];

const Services = () => {
  return (
    <section className="px-6 lg:px-20 py-10">
      <h3 className="text-2xl font-bold mb-2 text-black">Services</h3>
      <p className="text-sm text-gray-700 mb-6 max-w-xl">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-[30px] p-8 min-h-[300px] ${service.bg} shadow-md flex flex-col justify-between relative overflow-hidden border-[3px] border-black`}
          >
            <div>
              <h4 className="text-lg font-semibold text-black mb-2 bg-[#B9FF66] w-fit px-2 py-1 rounded">
                {service.title}
              </h4>
              <button className="flex items-center gap-2 mt-2 text-sm font-medium">
                {service.desc} <FaArrowRight />
              </button>
            </div>
            <div className="absolute bottom-4 right-4 w-36">
              <img
                src={service.imgs[0]}
                alt={service.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
