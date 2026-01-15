import React from "react";
import { motion } from "framer-motion";

const TrademarkDocuments = () => {
  const docs = [
    {
      title: "Brand Identifier",
      desc: "Logo or word proposed to be registered in high resolution.",
      icon: "draw",
    },
    {
      title: "Business Objectives",
      desc: "Main object details of your business to ascertain the correct class.",
      icon: "category",
    },
    {
      title: "Proof of Identity",
      desc: "Aadhaar, PAN, or Address proof of the individual applicant/director.",
      icon: "badge",
    },
    {
      title: "Entity Certificates",
      desc: "MSME or Startup India certificates to avail 50% government fee concession.",
      icon: "verified",
    },
  ];

  return (
    <section className="w-full px-4 py-16 lg:px-40 flex justify-center bg-white dark:bg-[#101822]">
      <div className="max-w-[960px] w-full flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0d131b] dark:text-white">
            Required Documents
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Prepare these essentials for a smooth application process. Proper
            documentation speeds up the filing.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="flex gap-5 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 items-start group shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Icon Container */}
              <div className="size-14 min-w-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-2xl">
                  {doc.icon}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5">
                <h4 className="font-bold text-[#0d131b] dark:text-white text-lg">
                  {doc.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {doc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrademarkDocuments;
