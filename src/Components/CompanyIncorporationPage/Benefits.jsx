import React, { useState } from "react";
import { motion } from "framer-motion";
import ConsultationModal from "../CommonComponents/ConsultationModal";

const Benefits = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textSideVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const benefitsData = [
    {
      title: "Limited Liability",
      desc: "Protect your personal assets. Your liability is limited to your share in the company.",
      icon: "shield",
      color: "text-blue-500",
    },
    {
      title: "Funding Ready",
      desc: "Essential structure for raising funds from VCs, Angel Investors, or Banks.",
      icon: "payments",
      color: "text-green-500",
    },
    {
      title: "Tax Benefits",
      desc: "Avail lower corporate tax rates and exclusive 'Startup India' tax holidays.",
      icon: "stars",
      color: "text-purple-500",
    },
    {
      title: "Brand Value",
      desc: "Enhance trust with customers, vendors, and top talent by being a registered entity.",
      icon: "public",
      color: "text-orange-500",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto overflow-hidden"
        id="benefits"
      >
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Content */}
          <motion.div
            className="md:w-1/3 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            variants={textSideVariants}
          >
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Why Incorporate with Incorplus?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              We simplify the complex legal landscape so you can focus on
              building your business. Incorporation opens doors to funding,
              government schemes, and global credibility.
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="w-fit text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Talk to an expert
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </motion.button>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4 transition-shadow hover:shadow-md"
              >
                <div className="mt-1">
                  <span
                    className={`material-symbols-outlined ${benefit.color} text-3xl`}
                  >
                    {benefit.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default Benefits;
