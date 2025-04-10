import React from "react";

const Brands = () => {
  const logos = ["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"];
  return (
    <section className="flex justify-around flex-wrap px-6 py-6 gap-6">
      {logos.map((brand, idx) => (
        <span key={idx} className="text-lg font-semibold capitalize">
          {brand}
        </span>
      ))}
    </section>
  );
};

export default Brands;
