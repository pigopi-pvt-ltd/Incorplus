import React from "react"
import { motion } from "framer-motion"

const OPCFeatures = () => {
  const features = [
    {
      title: "One Person Company",
      icon: "person_pin",
      color: "bg-blue-50 dark:bg-blue-900/30",
      desc: "Operate as a separate legal entity with just one person, providing full control while ensuring limited liability protection for your personal assets.",
    },
    {
      title: "Single Member",
      icon: "how_to_reg",
      color: "bg-indigo-50 dark:bg-indigo-900/30",
      desc: "Simplified ownership structure with only one shareholder needed. Perfect for solo entrepreneurs who want the status of a private limited company.",
    },
    {
      title: "Nominee Appointment",
      icon: "groups",
      color: "bg-purple-50 dark:bg-purple-900/30",
      desc: "Unique feature ensuring business continuity by appointing a nominee who takes over the company in the event of the member's incapacity.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
            Key Features & Benefits
          </h2>
          <p className="text-sm text-slate-500 font-medium italic">
            Built for the solo visionary. Modern solutions for modern companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all text-center group"
            >
              <div
                className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors`}
              >
                <span className="material-symbols-outlined text-3xl text-blue-600 group-hover:text-white transition-colors">
                  {f.icon}
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-3">
                {f.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default OPCFeatures
