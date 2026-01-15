import React from "react"
import { motion } from "framer-motion"

const provisions = [
  {
    title: "Law for Trust Registration",
    desc: "Governed under the Indian Trusts Act, 1882, ensuring legal protection and perpetual succession for charitable objectives.",
    icon: "balance",
  },
  {
    title: "Number of Persons",
    desc: "A minimum of two trustees are required to establish a public charitable trust. No upper limit on the number of trustees.",
    icon: "groups",
  },
  {
    title: "Stamp Duty",
    desc: "Varies by state based on the value of property or initial corpus dedicated to the trust at the time of execution.",
    icon: "description",
  },
  {
    title: "Trust Deed",
    desc: "The foundational document defining the trust's objectives, rules, and administrative powers of the board.",
    icon: "history_edu",
  },
  {
    title: "Changes in Composition",
    desc: "Protocol for induction or resignation of trustees, ensuring the trust's continuity and compliance with original bylaws.",
    icon: "edit_note",
  },
  {
    title: "Main Object Alteration",
    desc: "Legal procedures for amending the trust's primary objectives through supplementary deeds and registrar approval.",
    icon: "settings_suggest",
  },
]

const TrustProvisions = () => {
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
            Core Registration <span className="text-blue-600">Provisions</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        {/* Provisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {provisions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <span className="material-symbols-outlined text-blue-600 group-hover:text-white text-3xl transition-colors">
                  {item.icon}
                </span>
              </div>

              <h4 className="text-lg font-black mb-3 text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium uppercase text-[11px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustProvisions
