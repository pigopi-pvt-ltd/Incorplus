import React from "react";
import { motion } from "framer-motion";

const MsmeWorkflow = () => {
  const steps = [
    {
      title: "Fill Simple Form",
      desc: "Enter your basic business details and upload the required documents on our secure portal.",
    },
    {
      title: "Expert Verification & Filing",
      desc: "Our compliance experts verify your data to prevent rejection and file the application on the government Udyam portal.",
    },
    {
      title: "Get Certificate",
      desc: "Receive your digitally signed Udyam Registration Certificate via email within 2-3 business days.",
    },
  ];

  const documents = [
    "Aadhaar Card (Linked with Mobile)",
    "PAN Card of Applicant/Company",
    "Bank Account Details (IFSC Code)",
    "Business Address Proof (if applicable)",
  ];

  return (
    <section className="py-16 px-4 lg:px-10 bg-white dark:bg-[#101822]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Workflow Section */}
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-8 text-3xl font-bold text-[#0d131b] dark:text-white"
            >
              How It Works
            </motion.h2>

            <div className="relative flex flex-col gap-8 pl-4">
              {/* Vertical Connecting Line with Fill Animation */}
              <div className="absolute left-[27px] top-4 h-[80%] w-0.5 bg-gray-100 dark:bg-gray-800">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full bg-blue-600 origin-top"
                />
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex gap-6 z-10 group"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white ring-4 ring-white dark:ring-[#101822] shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  <div className="flex flex-col pb-2">
                    <h3 className="text-xl font-bold text-[#0d131b] dark:text-white group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Documents Checklist Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-gray-100 bg-slate-50 p-8 dark:border-gray-800 dark:bg-gray-900/50 shadow-sm"
          >
            <h2 className="mb-6 text-2xl font-bold text-[#0d131b] dark:text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-600">
                inventory
              </span>
              Required Documents
            </h2>
            <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
              Keep these handy for a smooth process. Digital copies are
              preferred.
            </p>

            <ul className="flex flex-col gap-4">
              {documents.map((doc, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-slate-50 dark:bg-[#101822] dark:border-slate-800 transition-all cursor-default"
                >
                  <span className="material-symbols-outlined text-green-500 font-bold">
                    check_circle
                  </span>
                  <span className="font-medium text-[#0d131b] dark:text-slate-200">
                    {doc}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30"
            >
              <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                <strong>Note:</strong> Mobile number must be linked with Aadhaar
                to receive the OTP for verification.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MsmeWorkflow;
