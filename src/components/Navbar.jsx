import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-black">Positivus</h1>
      <ul className="hidden lg:flex gap-8 text-gray-800 font-medium">
        <li className="hover:text-green-400 cursor-pointer">About us</li>
        <li className="hover:text-green-400 cursor-pointer">Services</li>
        <li className="hover:text-green-400 cursor-pointer">Use Cases</li>
        <li className="hover:text-green-400 cursor-pointer">Pricing</li>
        <li className="hover:text-green-400 cursor-pointer">Blog</li>
      </ul>
      <button className="hidden lg:block bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
        Request a quote
      </button>
      <div className="lg:hidden">
        <button className="text-black font-bold text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
