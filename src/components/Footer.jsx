import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191A23] text-white px-6 lg:px-20 py-10 rounded-t-3xl">
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold whitespace-nowrap">Positivus</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <button className="hover:underline">About us</button>
            <button className="hover:underline">Services</button>
            <button className="hover:underline">Use Cases</button>
            <button className="hover:underline">Pricing</button>
            <button className="hover:underline">Blog</button>
          </div>
          <div className="flex gap-4 text-white text-xl">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <p className="bg-[#B9FF66] text-black font-semibold inline-block px-2 py-1 rounded mb-3">
              Contact us:
            </p>
            <p className="text-sm">Email: info@positivus.com</p>
            <p className="text-sm">Phone: 555-667-8901</p>
            <p className="text-sm">
              Address: 1234 Main St, Moonstone City, Stardust State 12345
            </p>
          </div>

          <div className="bg-[#2D2D2D] p-4 rounded-lg w-full lg:w-1/2">
            <div className="flex flex-row gap-4 items-center">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg text-white border border-white bg-transparent flex-1"
              />
              <button className="bg-[#B9FF66] text-black px-6 py-3 rounded-lg font-medium whitespace-nowrap">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 text-xs text-gray-400 gap-2">
          <p>© 2025 Positivus. All Rights Reserved.</p>
          <button className="underline">Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
