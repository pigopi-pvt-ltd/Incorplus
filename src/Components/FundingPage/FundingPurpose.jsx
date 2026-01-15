import React from "react";
import { motion } from "framer-motion";

const FundingPurpose = () => {
  // Your exact data points mapped to icons
  const purposes = [
    {
      title: "Product Development",
      desc: "Prototype creation, product development, website/app development",
      icon: "deployed_code",
    },
    { title: "Team Building", desc: "Team hiring", icon: "person_add" },
    {
      title: "Professional Services",
      desc: "Legal and consulting services for your startup",
      icon: "gavel",
    },
    {
      title: "Infrastructure",
      desc: "Raw materials and equipment",
      icon: "factory",
    },
    {
      title: "Certifications",
      desc: "Licenses and certifications",
      icon: "verified",
    },
    {
      title: "Working Capital",
      desc: "Day-to-day operational liquidity",
      icon: "account_balance_wallet",
    },
    {
      title: "Growth & Sales",
      desc: "Marketing and Sales",
      icon: "trending_up",
    },
    {
      title: "Administration",
      desc: "Office space and other admin expenses",
      icon: "corporate_fare",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header using your exact text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            1. Why is Funding Required?
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-2 mb-6"></div>
          <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            A startup might require funding for one, a few, or all of the
            following purposes. It is important that you, as an entrepreneur,
            are clear about why you are raising funds. You should have a
            detailed financial and business plan before you approach investors.
          </p>
        </motion.div>

        {/* Purpose Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {purposes.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-600/50 transition-all duration-300 shadow-sm group"
            >
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-900 dark:text-white font-bold text-sm leading-snug">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FundingPurpose;
