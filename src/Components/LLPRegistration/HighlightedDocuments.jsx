import React from "react"
import { motion } from "framer-motion"

const HighlightedDocuments = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-black mb-4 text-slate-900 dark:text-white">
            Documents Checklist
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Keep these digital copies ready for a smooth registration process.
            All documents should be self-attested where applicable.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {/* Card 1: LLP Details */}
          <motion.div
            variants={cardVariants}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                <span className="material-symbols-outlined text-2xl">
                  description
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                LLP Details
              </h3>
            </div>
            <ul className="space-y-4 flex-grow">
              {[
                "Proposed name of the LLP",
                "Description of business activities",
                "Capital contribution details",
                "Profit sharing ratio",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 text-xs mt-1">
                    arrow_forward
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Partner Details (Highlighted) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-500/20 lg:-translate-y-4 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">badge</span>
              </div>
              <h3 className="text-lg font-bold">Partner Details</h3>
            </div>
            <ul className="space-y-4 flex-grow">
              {[
                "Self-Attested PAN Card copy",
                "Voter ID / Passport / DL copy",
                "Bank Statement / Utility Bill",
                "Passport sized photographs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-200 text-sm">
                    check_circle
                  </span>
                  <span className="text-xs font-medium leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Address Proof */}
          <motion.div
            variants={cardVariants}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                <span className="material-symbols-outlined text-2xl">
                  location_on
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Address Proof
              </h3>
            </div>
            <ul className="space-y-4 flex-grow">
              {[
                "Utility bill for registered office",
                "NOC from the owner of property",
                "Rent agreement (if rented)",
                "Property Tax Receipt",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 text-xs mt-1">
                    arrow_forward
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HighlightedDocuments
