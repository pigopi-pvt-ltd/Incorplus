import React from "react";
import { motion } from "framer-motion";

const MsmeBenefits = () => {
  const benefits = [
    {
      title: "Collateral-free Loans",
      desc: "Access loans up to ₹2 Crores under the CGTMSE scheme without needing to pledge assets.",
      icon: "currency_rupee",
    },
    {
      title: "Subsidy on Patents",
      desc: "Get up to 50% subsidy on patent registration fees and trademark filing.",
      icon: "verified_user",
    },
    {
      title: "Overdraft Exemption",
      desc: "Enjoy 1% exemption on interest rates on bank overdrafts, improving cash flow.",
      icon: "percent",
    },
    {
      title: "Delayed Payment Protection",
      desc: "Legal protection against delayed payments from buyers beyond 45 days.",
      icon: "schedule",
    },
    {
      title: "ISO Reimbursement",
      desc: "Reimbursement on ISO certification charges to ensure quality standards.",
      icon: "workspace_premium",
    },
    {
      title: "Electricity Bill Concession",
      desc: "Special concession on electricity bills for registered manufacturing enterprises.",
      icon: "bolt",
    },
  ];

  return (
    <section className="flex flex-col items-center py-16 px-4 lg:px-10 bg-slate-50 dark:bg-[#151c24]">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold leading-tight text-[#0d131b] dark:text-white lg:text-4xl">
            Key Benefits of Udyam Registration
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#4b5563] dark:text-gray-400">
            Government-backed incentives to help your business grow faster and
            safer.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                borderColor: "rgba(37, 99, 235, 0.4)", // Blue border glow
                transition: { duration: 0.2 },
              }}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              {/* Icon */}
              <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <span className="material-symbols-outlined text-[28px]">
                  {benefit.icon}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-[#0d131b] dark:text-white group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4c6c9a] dark:text-gray-400">
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

export default MsmeBenefits;
