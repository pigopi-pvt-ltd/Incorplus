import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "Deep dive analysis of your business model and requirements.",
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Tailored roadmap for legal structuring and financial health.",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Seamless handling of filings, registrations, and dev work.",
  },
  {
    number: "04",
    title: "Growth",
    desc: "Ongoing compliance monitoring and scaling strategies.",
  },
];

const IdeaToIpoSection = () => {
  // Animation for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  // Animation for each step
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation for the background line filling up
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
    },
  };

  return (
    <section
      className="w-full bg-white dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8"
      id="process"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-primary-600 font-bold tracking-widest uppercase text-xs"
          >
            Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mt-2 mb-4"
          >
            From Idea to IPO
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 z-0">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="h-full bg-gradient-to-r from-primary-400 via-primary-600 to-purple-600 origin-left"
            />
          </div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="group flex flex-col items-center text-center gap-6"
              >
                {/* Step Circle */}
                <div className="size-20 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 group-hover:border-primary-500 transition-colors duration-500 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <span className="text-2xl font-bold text-slate-300 group-hover:text-primary-600 transition-colors relative z-10">
                    {step.number}
                  </span>

                  {/* Circle Hover Fill */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 transition-transform duration-300"
                  />

                  {/* Subtle Pulse Effect for the active look */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-500/0 group-hover:animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary-600">
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

export default IdeaToIpoSection;
