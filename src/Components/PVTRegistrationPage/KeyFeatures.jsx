import React from "react"
import { motion } from "framer-motion"

const KeyFeatures = () => {
  const features = [
    {
      title: "Business Credibility",
      desc: "Enhanced trust and transparency for investors and customers through official registration status.",
      icon: "verified",
    },
    {
      title: "Easy Exit Plan",
      desc: "Seamless transfer of ownership or dissolution when required, ensuring long-term flexibility.",
      icon: "exit_to_app",
    },
    {
      title: "Limited Liability",
      desc: "Protects personal assets of shareholders from company debts and legal obligations.",
      icon: "security",
    },
    {
      title: "Attract Funding",
      desc: "The preferred legal structure for VCs and Angel Investors when providing capital infusions.",
      icon: "monetization_on",
    },
    {
      title: "Build Great Team",
      desc: "Leverage ESOPs and structured contracts to attract and retain top-tier industry talent.",
      icon: "groups",
    },
    {
      title: "Globalize Business",
      desc: "Enable foreign direct investment (FDI) and expand operations across international borders.",
      icon: "language",
    },
  ]

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-black font-display mb-4 text-slate-900 dark:text-white tracking-tight">
            Key Features & Benefits
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Superior services designed for proven results
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                <span className="material-symbols-outlined text-3xl">
                  {feature.icon}
                </span>
              </div>

              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {feature.title}
              </h4>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default KeyFeatures
