import React from "react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Law for Society",
    desc: "Governed by the Societies Registration Act, 1860, ensuring structured and legal operations for non-profits.",
    icon: "gavel",
  },
  {
    title: "Number of Persons",
    desc: "Requires a minimum of 7 members for state-level and 8 for national-level societies across India.",
    icon: "groups",
  },
  {
    title: "Bye Laws Modification",
    desc: "Easily update your objectives or governing body members via documented amendments and registrar filings.",
    icon: "edit_square",
  },
  {
    title: "Simple Registration",
    desc: "Faster and more straightforward process compared to Section 8 or Public Trust entities.",
    icon: "flash_on",
  },
  {
    title: "Stamp Duty Required",
    desc: "Memorandum filed on non-judicial stamp paper defining specific society goals and membership rules.",
    icon: "description",
  },
  {
    title: "Changes in Composition",
    desc: "Democratic setup allowing regular elections and updates to the executive committee seamlessly.",
    icon: "clinical_notes",
  },
]

const SocietyFeatures = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <h2 className="text-blue-600 font-black tracking-[0.2em] text-[10px] uppercase mb-4">
              Key Features
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-wide">
              Everything you need for <br />
              <span className="text-blue-600">Successful</span> Legal
              Operations.
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-slate-500 dark:text-slate-400 max-w-sm mb-2 font-medium leading-relaxed uppercase text-[11px]"
          >
            We handle the complexity of the Societies Registration Act so you
            can focus on making a difference in the community.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-600 dark:hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl font-bold">
                  {feature.icon}
                </span>
              </div>

              <h4 className="text-lg font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h4>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-bold uppercase text-[11px] tracking-wide">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocietyFeatures
