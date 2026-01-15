import React from "react";
import { motion } from "framer-motion";

const HowItWorksItr = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
    },
  };

  const steps = [
    {
      title: "1. Upload Docs",
      icon: "upload_file",
      desc: "Submit your Form-16, PAN, and bank statements securely.",
    },
    {
      title: "2. Expert Review",
      icon: "manage_search",
      desc: "Our CAs analyze your finances and maximize deductions.",
    },
    {
      title: "3. Draft Approval",
      icon: "rate_review",
      desc: "Review the tax computation summary and approve it.",
    },
    {
      title: "4. Filed & Done",
      icon: "send",
      desc: "We file your ITR and share the acknowledgment receipt.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Our streamlined process ensures your taxes are filed accurately in
            just 4 simple steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.8 }}
              className="h-full bg-blue-600 origin-left shadow-[0_0_8px_rgba(37,99,235,0.4)]"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex-1 flex flex-col items-center gap-4 group w-full"
              >
                {/* Step Icon Box */}
                <motion.div
                  whileHover={{
                    y: -8,
                    borderColor: "#2563eb",
                    color: "#2563eb",
                  }}
                  className="size-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center shadow-lg transition-all duration-300 group-first:border-blue-600 group-first:text-blue-600"
                >
                  <span className="material-symbols-outlined text-3xl">
                    {step.icon}
                  </span>
                </motion.div>

                {/* Step Text */}
                <div className="bg-white dark:bg-slate-900 px-2 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksItr;
