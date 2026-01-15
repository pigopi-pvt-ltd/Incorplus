import React from "react";
import { motion } from "framer-motion";

const FssaiProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Document Collection",
      desc: "Submit your basic KYC and business documents on our secure portal.",
      icon: "1",
    },
    {
      id: 2,
      title: "Application Filing",
      desc: "Our experts verify documents and file Form A or Form B accurately.",
      icon: "2",
    },
    {
      id: 3,
      title: "Inspection",
      desc: "We handle queries and guide you through the inspection process if required.",
      icon: "3",
    },
    {
      id: 4,
      title: "License Issued",
      desc: "Receive your 14-digit FSSAI number and digital certificate via email.",
      icon: "check",
    },
  ];

  const checklist = [
    {
      title: "FBO Photo Identity",
      desc: "Passport size photo of the operator.",
      icon: "account_circle",
    },
    {
      title: "Identity Proof",
      desc: "Aadhaar, PAN, Voter ID, or Passport.",
      icon: "badge",
    },
    {
      title: "Product List",
      desc: "List of food products to be manufactured.",
      icon: "inventory_2",
    },
    {
      title: "Business Constitution",
      desc: "Partnership Deed, COI, MOA, or AOA.",
      icon: "corporate_fare",
    },
    {
      title: "Premises Proof",
      desc: "Rental agreement or property proof.",
      icon: "store",
    },
    {
      title: "FSMS Plan",
      desc: "Food Safety Management System plan.",
      icon: "security",
    },
    {
      title: "Supporting Docs",
      desc: "NOC from Municipality or Panchayat.",
      icon: "description",
    },
    {
      title: "Water Report",
      desc: "Test report from a recognized lab.",
      icon: "water_drop",
    },
    {
      title: "Equipment List",
      desc: "Details of installed machinery.",
      icon: "kitchen",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#151c24]">
      <div className="layout-container flex flex-col items-center px-4 md:px-10 lg:px-40">
        <div className="layout-content-container flex flex-col max-w-[1280px] w-full gap-24">
          {/* Section 1: Process Steps */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
                How It Works
              </span>
              <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-2">
                Simplified FSSAI Licensing Process
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mt-4">
                We handle the complex regulatory requirements while you focus on
                building your food business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-slate-200 dark:bg-slate-700 z-0" />

              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center gap-5 group"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      step.id === 4
                        ? "bg-green-500 text-white shadow-green-500/30"
                        : step.id === 1
                        ? "bg-blue-600 text-white shadow-blue-500/30"
                        : "bg-white dark:bg-slate-800 border-2 border-blue-600 text-blue-600"
                    }`}
                  >
                    {step.id === 4 ? (
                      <span className="material-symbols-outlined text-xl">
                        check
                      </span>
                    ) : (
                      <span className="text-lg">{step.icon}</span>
                    )}
                  </div>
                  <div className="bg-white dark:bg-[#1e2732] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm w-full h-full group-hover:shadow-md transition-shadow">
                    <h3 className="text-base font-bold text-[#0d131b] dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 2: Documents Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8 bg-white dark:bg-[#1e2732] rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 dark:border-slate-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-50 dark:border-slate-800/50 pb-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0d131b] dark:text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600">
                    <span className="material-symbols-outlined">
                      folder_managed
                    </span>
                  </span>
                  Required Document Checklist
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  Please ensure these documents are ready for a smooth
                  application process.
                </p>
              </div>
              {/* <button className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-5 py-2.5 rounded-xl text-blue-600 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-sm">
                  download
                </span>
                Download PDF
              </button> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {checklist.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-[#151c24] border border-slate-100 dark:border-slate-800 items-start transition-colors hover:border-blue-200 dark:hover:border-blue-900"
                >
                  <span className="material-symbols-outlined text-blue-600 text-xl mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-[#0d131b] dark:text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-[11px] leading-normal text-slate-500 dark:text-slate-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FssaiProcess;
