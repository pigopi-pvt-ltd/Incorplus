import React from "react";
import { motion } from "framer-motion";

const ItrCategories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const categories = [
    {
      title: "Individual ITR Filing",
      icon: "person",
      desc: "Tailored for salaried employees, homeowners, and freelancers looking for seamless tax returns.",
      accent: "blue",
      items: [
        {
          name: "ITR-1 (Sahaj)",
          detail: "Income up to ₹50L, Salary, One House Property",
        },
        {
          name: "ITR-2",
          detail: "Capital Gains, Foreign Income, More than one House",
        },
        {
          name: "ITR-3",
          detail: "Business Income, Professional Gains, Partner in Firm",
        },
        {
          name: "ITR-4 (Sugam)",
          detail: "Presumptive Income Scheme (44AD, 44ADA)",
        },
      ],
    },
    {
      title: "Business ITR Filing",
      icon: "storefront",
      desc: "Comprehensive solutions for MSMEs, Startups, and LLPs ensuring total compliance.",
      accent: "purple",
      items: [
        { name: "ITR-5", detail: "For firms, LLPs, AOPs, BOIs" },
        {
          name: "ITR-6",
          detail: "For Companies other than those claiming exemption u/s 11",
        },
        {
          name: "ITR-7",
          detail: "For Trusts",
        },
        {
          name: "Audit Reports",
          detail: "Lorem Impsum Ipsimj dFwde EEc SDFR der ERre dfdfef dfrf",
        },
      ],
    },
    {
      title: "Tax Planning",
      icon: "savings",
      desc: "Strategic advisory to help you save more and invest smarter for the future.",
      accent: "green",
      items: [
        {
          name: "Deduction Analysis",
          detail: "80C, 80D, HRA & more optimization",
        },
        {
          name: "Capital Gains Advisory",
          detail: "Offset losses & plan asset sales efficiently",
        },
        {
          name: "Advance Tax Calculation",
          detail: "Estimate liabilities to avoid interest penalties",
        },
        {
          name: "Compliance Advisory",
          detail: "Lorem Impsum Ipsimj dFwde EEc SDFR der ERre dfdfef dfrf",
        },
      ],
    },
  ];

  const colorMap = {
    blue: {
      icon: "bg-blue-100 dark:bg-blue-900/40 text-blue-600",
      itemIcon: "text-blue-600",
    },
    purple: {
      icon: "bg-purple-100 dark:bg-purple-900/40 text-purple-600",
      itemIcon: "text-purple-600",
    },
    green: {
      icon: "bg-green-100 dark:bg-green-900/40 text-green-600",
      itemIcon: "text-green-600",
    },
  };

  return (
    <section className="pb-15 mt-10  px-6 bg-slate-50 dark:bg-slate-900/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Find Your ITR Category
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">
            Select the filing category that matches your financial profile.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                  colorMap[cat.accent].icon
                }`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {cat.icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {cat.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                {cat.desc}
              </p>

              <div className="space-y-4">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  >
                    <span
                      className={`material-symbols-outlined mt-0.5 text-lg ${
                        colorMap[cat.accent].itemIcon
                      }`}
                    >
                      {cat.accent === "green" ? "check_circle" : "description"}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ItrCategories;
