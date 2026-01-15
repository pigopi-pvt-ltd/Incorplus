import React from "react"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Primary Proof",
    desc: "It is a primary requirement for any entity looking to import or export goods/services legally across borders.",
    icon: "fingerprint",
  },
  {
    title: "Govt. Incentives",
    desc: "Claim various benefits and subsidies offered by DGFT, Customs, and Export Promotion Councils with ease.",
    icon: "account_balance",
  },
  {
    title: "Lifetime Validity",
    desc: "Once obtained, the IEC is valid for the lifetime of the business and does not require periodic renewal fees.",
    icon: "history",
  },
  {
    title: "Easy Compliance",
    desc: "Zero annual filings or compliance hassles once you have the registration certificate in your possession.",
    icon: "edit_document",
  },
  {
    title: "Reduced Fees",
    desc: "Enjoy reduced government fees for trademark and patent applications for firms registered under IEC.",
    icon: "currency_rupee",
  },
  {
    title: "Global Expansion",
    desc: "Take your products and services to international markets with full legal recognition and global credibility.",
    icon: "public",
  },
]

const IECBenefits = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase"
          >
            Advantages
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-wide"
          >
            Benefits of <span className="text-blue-600">IEC Registration</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-bold uppercase text-[11px] tracking-widest"
          >
            Unlock global opportunities and government incentives with a single
            lifetime registration.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-3xl font-bold">
                  {benefit.icon}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h4>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase leading-relaxed flex-grow tracking-wide">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IECBenefits
