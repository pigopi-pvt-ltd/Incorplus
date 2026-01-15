import React from "react";
import { motion } from "framer-motion";

const ProcessTimeline = () => {
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
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.2 },
    },
  };

  const steps = [
    {
      title: "1. Submit Documents",
      icon: "upload_file",
      desc: "Upload your documents on our secure portal. Our experts will verify them for accuracy.",
    },
    {
      title: "2. Application Filing",
      icon: "fact_check",
      desc: "We generate the ARN and file your application with the government portal within 24 hours.",
    },
    {
      title: "3. Certificate Issued",
      icon: "verified",
      desc: "Receive your GST Registration Certificate (GSTIN) directly via email. Ready for business!",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-[#0d131b] dark:text-white">
            Our Simplified Process
          </h2>
          <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
            Get your GSTIN in 3 easy steps with Incorplus.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="relative grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {/* Connecting Line (Desktop) - Animated Blue Line */}
          <div className="absolute top-8 left-0 hidden w-full md:block px-20">
            <div className="h-0.5 w-full bg-slate-200 dark:bg-slate-800 relative">
              <motion.div
                variants={lineVariants}
                className="absolute top-0 left-0 h-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
              />
            </div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Icon Circle - All Blue-600 */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="z-10 flex size-16 items-center justify-center rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 text-white shadow-xl transition-transform"
              >
                <span className="material-symbols-outlined text-[32px]">
                  {step.icon}
                </span>
              </motion.div>

              {/* Text Content */}
              <h3 className="mt-6 text-xl font-bold text-[#0d131b] dark:text-white group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 px-4 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
