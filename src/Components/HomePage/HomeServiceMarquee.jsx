import favicon from "../../assets/incpFavicon.png";

import React from "react";
import { motion } from "framer-motion";

// --- Data Arrays ---
const topRow = [
  {
    name: "Funding",
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Project Report",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Business Registration",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "DPIIT Registration",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&h=400&auto=format&fit=crop",
  },
];

const bottomRow = [
  {
    name: "Compliance",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Website Development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "App Development",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=400&h=400&auto=format&fit=crop",
  },
];

const ServiceCard = ({ service }) => (
  <div className="flex-shrink-0 w-60 md:w-64 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform-gpu">
    <div className="aspect-square w-full overflow-hidden">
      <img
        src={service.img}
        alt={service.name}
        loading="lazy"
        className="w-full h-full object-cover grayscale-[40%]"
      />
    </div>
    <div className="p-4 bg-black relative z-10">
      <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest block">
        {service.name}
      </span>
    </div>
  </div>
);

const ScrollingRow = ({ items, direction = "left" }) => {
  // Reduced duplication for better mobile performance
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full mask-edges">
      <motion.div
        className="flex flex-nowrap gap-4 md:gap-6 py-4 will-change-transform"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ perspective: 1000, backfaceVisibility: "hidden" }}
      >
        {duplicatedItems.map((item, idx) => (
          <ServiceCard key={idx} service={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default function ServiceMarquee() {
  return (
    <section className="bg-black py-12 overflow-hidden relative min-h-screen flex flex-col justify-center">
      {/* Optimized Background Glow (Single div instead of multiple) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 transform-gpu">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 mb-8 relative z-10">
        <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter text-center uppercase">
          Our{" "}
          <span className="text-blue-500 font-serif italic lowercase tracking-normal">
            expertise
          </span>
        </h2>
      </div>

      <div className="flex flex-col relative z-10 space-y-2">
        <ScrollingRow items={topRow} direction="right" />

        {/* --- PERFORMANCE OPTIMIZED BADGE --- */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transform-gpu">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center bg-black/80 rounded-full border border-white/10 shadow-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full overflow-visible"
            >
              <defs>
                {/* Radius 38: Circumference is ~238px. This gives enough room for the text. */}
                <path
                  id="circlePathMobile"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text className="fill-blue-400 text-[8.5px] font-bold uppercase tracking-[1.1px]">
                <textPath xlinkHref="#circlePathMobile" startOffset="0%">
                  {/* Spelling Corrected: Incorplus Ventures */}
                  Incorplus Venture • Incorplus Venture •
                </textPath>
              </text>
            </svg>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <img
                src={favicon}
                alt="logo"
                className="w-10 h-10 md:w-16 md:h-16 object-contain"
              />
            </div>
          </motion.div>
        </div>

        <ScrollingRow items={bottomRow} direction="left" />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          transform: translateZ(0); /* Fixes flickering on iOS */
        }
      `,
        }}
      />
    </section>
  );
}
