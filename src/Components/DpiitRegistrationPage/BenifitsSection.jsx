import React from "react";
import { motion } from "framer-motion";
// Note: Ensure you have Google Material Symbols CSS loaded in your project
// or replace the spans with an icon library like Lucide-React.

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Exemption from Income Tax",
      description:
        "Eligible startups can avail of a 100% tax holiday for 3 consecutive financial years out of their first 10 years of incorporation.",
      icon: "payments",
    },
    {
      title: "Exemption from Angel Tax",
      description:
        "Startups recognized by DPIIT are eligible for exemption from the provisions of section 56(2)(viib) of the Income Tax Act.",
      icon: "savings",
    },
    {
      title: "Reduced IPR Registration Fees",
      description:
        "Get up to 80% rebate on patent filing and 50% on trademark filing fees. Benefit from fast-tracked IP applications.",
      icon: "gavel",
    },
    {
      title: "Government Tenders",
      description:
        "Exemption from prior experience and turnover criteria while bidding for government procurement tenders.",
      icon: "business_center",
    },
    {
      title: "Fund of Funds",
      description:
        "DPIIT provides access to funds through a dedicated Rs. 10,000 Crore corpus managed by SIDBI specifically for startups.",
      icon: "account_balance_wallet",
    },
    {
      title: "Fast-Track Exit",
      description:
        "Startups can wind up their business within 90 days of application, ensuring a hassle-free transition if needed.",
      icon: "speed",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Key Features &amp; Benefits
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Take your business to the next level with government-backed
            incentives and exemptions.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // "once: true" removed as requested
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-blue-500/50 transition-colors shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/5"
            >
              <div className="size-14 rounded-2xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
