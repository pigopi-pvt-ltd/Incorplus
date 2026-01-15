import React from "react";
import { motion } from "framer-motion";

const TrademarkBenefits = () => {
  const benefits = [
    {
      title: "Legal Protection",
      desc: "Legal right to sue for infringement and protect your market share against copycats.",
      icon: "gavel",
    },
    {
      title: "Brand Asset",
      desc: "Trademarks are intangible assets that can be valued, licensed, and sold, increasing company valuation.",
      icon: "trending_up",
    },
    {
      title: "Exclusive Rights",
      desc: "Gain the exclusive right to use the ® symbol and prevent others from using similar names.",
      icon: "verified",
    },
  ];

  return (
    <section className="w-full px-4 py-16 lg:px-40 flex justify-center bg-white dark:bg-[#101822]">
      <div className="max-w-[960px] w-full flex flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0d131b] dark:text-white">
            Why Register Your Trademark?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Safeguard your intellectual property and build measurable brand
            value in the Indian market.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.15, // Stagger effect
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }} // Subtle lift on hover
              className="flex flex-col gap-4 rounded-xl border border-[#cfd9e7] dark:border-gray-700 bg-slate-50 dark:bg-gray-800/50 p-6 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-2xl">
                  {benefit.icon}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#0d131b] dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrademarkBenefits;
