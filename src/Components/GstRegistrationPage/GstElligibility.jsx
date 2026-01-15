import React from "react";
import { motion } from "framer-motion";

const GstEligibility = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const criteria = [
    {
      title: "Turnover > 40 Lakhs",
      icon: "currency_rupee",
      desc: "Any business engaged in the supply of goods with an annual aggregate turnover exceeding Rs. 40 Lakhs (Rs. 20 Lakhs for services/special category states).",
      lightBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      hoverBorder: "hover:border-blue-500/50",
    },
    {
      title: "E-commerce Sellers",
      icon: "shopping_cart",
      desc: "Individuals or businesses selling goods or services through e-commerce operators like Amazon, Flipkart, etc., must register regardless of turnover.",
      lightBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
      hoverBg: "group-hover:bg-orange-600",
      hoverBorder: "hover:border-orange-500/50",
    },
    {
      title: "Inter-state Suppliers",
      icon: "local_shipping",
      desc: "Businesses supplying goods from one state to another (inter-state supply) are required to register for GST immediately upon starting.",
      lightBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-600",
      hoverBorder: "hover:border-purple-500/50",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#101822] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }} // Triggers every time
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-[#0d131b] dark:text-white">
            Who Needs to Register?
          </h2>
          <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
            Mandatory criteria for GST registration in India.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }} // Triggers every time
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6 transition-all ${item.hoverBorder} hover:shadow-xl`}
            >
              <div
                className={`flex size-12 items-center justify-center rounded-lg transition-all duration-300 ${item.lightBg} ${item.iconColor} ${item.hoverBg} group-hover:text-white`}
              >
                <span className="material-symbols-outlined text-[28px]">
                  {item.icon}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0d131b] dark:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GstEligibility;
