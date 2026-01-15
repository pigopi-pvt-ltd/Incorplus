import React from "react";
import { motion } from "framer-motion";

const Structures = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a smooth "snap"
      },
    },
  };

  const structures = [
    {
      title: "Private Limited",
      icon: "apartment",
      iconColor: "text-primary",
      desc: "Best for scalable startups looking to raise venture capital. Offers high credibility and limited liability.",
      tags: ["Popular", "Fundraising"],
    },
    {
      title: "LLP",
      icon: "handshake",
      iconColor: "text-orange-500",
      desc: "Ideal for professional services and small businesses. Lower compliance costs with limited liability benefits.",
      tags: ["Low Cost", "Services"],
    },
    {
      title: "One Person Company",
      icon: "person",
      iconColor: "text-purple-500",
      desc: "Perfect for solo founders who want corporate status and limited liability without a co-founder.",
      tags: ["Solo Founder"],
    },
    {
      title: "Partnership Firm",
      icon: "groups",
      iconColor: "text-teal-500",
      desc: "Simplest structure to set up for traditional small businesses. Unlimited liability for partners.",
      tags: ["Simple", "Traditional"],
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto bg-white dark:bg-slate-900/50 rounded-3xl my-10 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
      id="structures"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Choose the Right Legal Structure
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Selecting the right entity type is crucial for your startup's
          long-term success, tax liabilities, and funding capabilities.
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {structures.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 transition-colors group cursor-default"
          >
            {/* Icon Box */}
            <div
              className={`size-12 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center ${item.iconColor} shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all`}
            >
              <span className="material-symbols-outlined text-2xl">
                {item.icon}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Structures;
