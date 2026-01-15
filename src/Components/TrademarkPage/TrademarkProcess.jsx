import React from "react";
import { motion } from "framer-motion";

const TrademarkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Trademark Search",
      desc: "We conduct a thorough search to ensure your brand name is available.",
      active: true,
    },
    {
      id: 2,
      title: "Class Selection",
      desc: "Identifying the correct Nice Classification for your goods/services.",
      active: false,
    },
    {
      id: 3,
      title: "Filing Application",
      desc: "Preparation and submission of Form TM-A with the registry.",
      active: false,
    },
    {
      id: 4,
      title: "Objection Handling",
      desc: "Our experts handle any queries raised by the trademark registrar.",
      active: false,
    },
  ];

  return (
    <section className="w-full px-4 py-16 lg:px-40 flex justify-center bg-slate-50 dark:bg-[#151c24] border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[960px] w-full flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[#0d131b] dark:text-white">
            Our 4-Step Registration Process
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Simple, transparent, and completely online.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-blue-600"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center gap-6 bg-transparent relative z-10 group"
            >
              {/* Step Circle */}
              <div
                className={`size-12 rounded-full flex items-center justify-center font-bold text-xl border-4 transition-all duration-500 ${
                  index === 0
                    ? "bg-blue-600 text-white border-white dark:border-[#151c24] shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-slate-800 text-[#0d131b] dark:text-white border-white dark:border-[#151c24] ring-2 ring-blue-600/20 group-hover:ring-blue-600/50"
                }`}
              >
                {step.id}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 px-2">
                <h4 className="font-bold text-lg text-[#0d131b] dark:text-white group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrademarkProcess;
