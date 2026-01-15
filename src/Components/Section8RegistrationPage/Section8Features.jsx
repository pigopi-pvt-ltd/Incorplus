import React from "react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Firms As Members",
    description:
      "Apart from individuals, associations of persons can also join as members.",
    icon: "group_add",
  },
  {
    title: "No Min Share Capital",
    description:
      "Unlike other entities, no minimum prescribed capital is required to start.",
    icon: "account_balance",
  },
  {
    title: "Limited Liability",
    description:
      "Members enjoy protection and are only liable for their unpaid contribution.",
    icon: "shield",
  },
  {
    title: "Government License",
    description:
      "Operate with authority through a license granted by the Central Government.",
    icon: "gavel",
  },
  {
    title: "Privileges",
    description:
      "Benefit from various exemptions under the Companies Act for social work.",
    icon: "stars",
  },
  {
    title: "Charitable Objects",
    description:
      "Pure focus on promoting science, art, religion, and social welfare.",
    icon: "volunteer_activism",
  },
]

const Section8Features = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
      {/* Container aligned to Hero width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Key Features & <span className="text-blue-600">Benefits</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest"
          >
            Why choose a Section 8 company structure?
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-2xl font-bold">
                  {feature.icon}
                </span>
              </div>

              <h3 className="text-lg font-black mb-3 text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section8Features
