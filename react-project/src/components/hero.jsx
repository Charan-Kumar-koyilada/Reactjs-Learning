import React from "react";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <section className="relative w-full h-[650px] rounded-xl overflow-hidden">
      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C3F] via-[#14265C] to-[#0B1738]"></div>

      {/* VERTICAL LIGHT BARS */}
      <div
        className="absolute inset-0 opacity-30 
        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] 
        bg-[length:80px_100%]"
      ></div>

      {/* RADIAL GLOW */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_30%_40%,rgba(120,160,255,0.25),transparent_40%)]"
      ></div>

      {/* CONTENT */}
      <div className="relative z-10 text-white h-full">
        {/* NAVBAR */}
        <Navbar />

        {/* HERO CONTENT */}
        <div className="flex items-center justify-between px-16 mt-20">
          {/* LEFT SIDE */}
          <div className="max-w-[520px]">
            <p className="text-sm opacity-80 mb-4">Placeholder Tagline</p>

            <h1 className="text-5xl font-bold leading-tight">
              Placeholder Main Heading
            </h1>

            <p className="mt-6 opacity-80">
              Placeholder description text explaining the product and its
              benefits.
            </p>

            <button className="mt-6 px-6 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-100 transition">
              Placeholder Button
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[420px] h-[300px] bg-white/10 rounded-xl flex items-center justify-center text-white backdrop-blur-sm">
            Placeholder Visual
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
