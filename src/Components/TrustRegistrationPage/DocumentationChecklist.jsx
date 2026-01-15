import React from "react"
import { motion } from "framer-motion"

const DocumentationChecklist = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-wide"
          >
            Documentation <span className="text-blue-600">Checklist</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: For Trust & Trustee */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-950 p-8 lg:p-10 rounded-[2rem] shadow-sm border-l-8 border-blue-600"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 font-bold">
                  person_outline
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                For Trust & Trustee
              </h3>
            </div>

            <ul className="space-y-5">
              {[
                "ID Proof of Settlor & Trustees (PAN Card)",
                "Address Proof (Aadhar Card/Passport)",
                "Passport size Photographs of all parties",
                "Witness Details (ID & Address Proof)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="material-symbols-outlined text-blue-600 text-xl font-black group-hover:scale-110 transition-transform">
                    check_circle
                  </span>
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: For Registered Address */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-950 p-8 lg:p-10 rounded-[2rem] shadow-sm border-l-8 border-indigo-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-indigo-500 font-bold">
                  location_on
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                For Registered Address
              </h3>
            </div>

            <ul className="space-y-5">
              {[
                "Electricity Bill or Water Bill (Latest)",
                "No Objection Certificate (NOC) from Owner",
                "Ownership Proof (Property Tax Receipt)",
                "Rent Agreement (if property is leased)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="material-symbols-outlined text-indigo-500 text-xl font-black group-hover:scale-110 transition-transform">
                    check_circle
                  </span>
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight leading-snug">
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

export default DocumentationChecklist
