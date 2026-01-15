import React from "react"
import { motion } from "framer-motion"

const SocietyDocumentation = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4"
          >
            Documentation
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-wide"
          >
            What You'll <span className="text-blue-600">Need</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: For Society Members */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] shadow-sm border-l-8 border-blue-600 group"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl font-bold">
                  group_add
                </span>
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                For Society <br /> Registration
              </h4>
            </div>

            <ul className="space-y-6">
              {[
                "Photographs of all founder members",
                "PAN Card copy of all members",
                "Valid Address Proof (Aadhar/Voter ID)",
                "Signed Memorandum of Association",
                "Affidavit by the President or Secretary",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0 animate-pulse" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: For Registered Address */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] shadow-sm border-l-8 border-indigo-500 group"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl font-bold">
                  home_work
                </span>
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                For Registered <br /> Address
              </h4>
            </div>

            <ul className="space-y-6">
              {[
                "Proof of Ownership or Rental Agreement",
                "Utility Bill (Electricity/Water) < 2 months",
                "NOC from the Owner of the premises",
                "Valid Property Tax Receipt",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0 animate-pulse" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SocietyDocumentation
