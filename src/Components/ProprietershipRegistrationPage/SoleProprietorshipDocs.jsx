import React from "react"
import { motion } from "framer-motion"

const SoleProprietorshipDocs = () => {
  const identityDocs = [
    { title: "Aadhar Card", desc: "Mandatory for MSME registration" },
    { title: "PAN Card", desc: "Essential for GST and Bank A/C" },
    { title: "Passport Photo", desc: "Required for application forms" },
  ]

  const addressDocs = [
    { title: "Electricity Bill", desc: "Not older than 2 months" },
    { title: "Rental Agreement", desc: "Required if premises is rented" },
    { title: "NOC from Owner", desc: "Permission to use the address" },
  ]

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase"
          >
            Checklist
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-wide"
          >
            Documents <span className="text-blue-600">Required</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Identity Proof (Light Theme Influence) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-blue-50/50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-blue-100 dark:border-slate-800 transition-all hover:shadow-xl hover:shadow-blue-500/5"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <span className="material-symbols-outlined text-3xl font-bold">
                  badge
                </span>
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Identity <br /> Proof
              </h4>
            </div>

            <ul className="space-y-8">
              {identityDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-5 group">
                  <span className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-black shrink-0 mt-1 transition-transform group-hover:scale-110">
                    {idx + 1}
                  </span>
                  <div>
                    <h5 className="font-black text-slate-900 dark:text-white uppercase text-sm tracking-wide group-hover:text-blue-600 transition-colors">
                      {doc.title}
                    </h5>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                      {doc.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Address Proof (Dark Theme Influence) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900 dark:bg-blue-600/5 p-10 rounded-[2.5rem] border border-slate-800 dark:border-blue-900/30 text-white"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-white/10 dark:bg-blue-600 rounded-2xl flex items-center justify-center text-white border border-white/20">
                <span className="material-symbols-outlined text-3xl font-bold">
                  home_pin
                </span>
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight">
                Address <br /> Proof
              </h4>
            </div>

            <ul className="space-y-8">
              {addressDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-5 group">
                  <span className="w-7 h-7 bg-white/10 dark:bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-black shrink-0 mt-1 transition-transform group-hover:scale-110 border border-white/10">
                    {idx + 1}
                  </span>
                  <div>
                    <h5 className="font-black uppercase text-sm tracking-wide group-hover:text-blue-400 transition-colors">
                      {doc.title}
                    </h5>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider mt-1">
                      {doc.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SoleProprietorshipDocs
