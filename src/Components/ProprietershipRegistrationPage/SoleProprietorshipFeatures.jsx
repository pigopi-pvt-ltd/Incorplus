import React from "react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Formation And Management",
    desc: "A cost-effective solution with simple management. Ideal for small scale ventures where operational overhead needs to be minimal.",
    icon: "account_balance",
  },
  {
    title: "Quick & Easy Formation",
    desc: "Minimal legal formalities allow for a swift setup process. Start your operations almost immediately with very few documents.",
    icon: "bolt",
  },
  {
    title: "Secrecy & Privacy",
    desc: "Enjoy full privacy with no legal obligation to publish or share your financial accounts with any third party or public domain.",
    icon: "lock",
  },
  {
    title: "Better Control",
    desc: "As the sole decision maker, you have complete authority over every business decision, ensuring fast pivots and total control.",
    icon: "settings_accessibility",
  },
  {
    title: "Least Regulated Entity",
    desc: "This is the least regulated type of entity, meaning minimal government interference and reduced compliance paperwork.",
    icon: "gavel",
  },
  {
    title: "Easy Dissolution",
    desc: "A simple and hassle-free closure process. You can wrap up operations as easily as you started them, whenever you choose.",
    icon: "logout",
  },
]

const SoleProprietorshipFeatures = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase"
          >
            Key Features & Benefits
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-wide"
          >
            Why Choose{" "}
            <span className="text-blue-600">Sole Proprietorship?</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-bold uppercase text-[11px] tracking-wide"
          >
            Everything you need to know about starting your entrepreneurial
            journey with maximum efficiency and minimal red tape.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                <span className="material-symbols-outlined text-3xl font-bold">
                  {feature.icon}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase leading-relaxed flex-grow tracking-wide">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoleProprietorshipFeatures
