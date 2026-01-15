import React from "react"
import { motion } from "framer-motion"

const docs = [
  {
    title: "Business Proof",
    desc: "Proof of business entity such as Certificate of Incorporation, GST Registration, MSME, or Trade License.",
    icon: "apartment",
  },
  {
    title: "Corporate Identity",
    desc: "Official company letterhead or visiting card clearly stating the business name for certification records.",
    icon: "contact_page",
  },
  {
    title: "Transaction Proof",
    desc: "Recent sales and purchase invoices evidencing the nature and volume of your ongoing business activity.",
    icon: "receipt_long",
  },
]

const ISODocuments = () => {
  return (
    <section className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase"
          >
            Checklist
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Documents <span className="text-blue-500">Required</span>
          </motion.h3>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-600/20 group-hover:rotate-6 transition-transform duration-500">
                <span className="material-symbols-outlined text-4xl text-white font-bold">
                  {doc.icon}
                </span>
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
                {doc.title}
              </h4>
              <p className="text-slate-400 text-[11px] font-bold uppercase leading-relaxed tracking-wider">
                {doc.desc}
              </p>

              {/* Status Indicator */}
              <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">
                  Mandatory
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ISODocuments
