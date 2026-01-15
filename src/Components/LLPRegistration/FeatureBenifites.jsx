import React from "react"
import { motion } from "framer-motion"

const FeaturesBenefits = () => {
  const features = [
    {
      title: "Business Credibility",
      desc: "LLP information is available in a publicly searchable database, significantly increasing trust and professional credibility.",
      icon: "verified",
      color: "text-blue-600 bg-blue-50 dark:bg-blue-900/30",
      border: "hover:border-blue-500/50",
    },
    {
      title: "Separate Legal Entity",
      desc: "An LLP firm is a distinct legal entity from its partners. It possesses its own PAN, bank accounts, and authority to own property.",
      icon: "account_balance",
      color: "text-purple-600 bg-purple-50 dark:bg-purple-900/30",
      border: "hover:border-purple-500/50",
    },
    {
      title: "Limited Liability",
      desc: "Partners are protected from personal liability for the firm's debts, ensuring that personal assets remain secure from business risks.",
      icon: "security",
      color: "text-amber-600 bg-amber-50 dark:bg-amber-900/30",
      border: "hover:border-amber-500/50",
    },
    {
      title: "Organizational Flexibility",
      desc: "LLPs have fewer compliance requirements compared to companies, making day-to-day management simpler and cost-effective.",
      icon: "dynamic_form",
      color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-900/30",
      border: "hover:border-cyan-500/50",
    },
    {
      title: "Auditing Provision",
      desc: "No mandatory audit is required if annual turnover stays below 40 Lakhs, reducing recurring professional and compliance costs.",
      icon: "assignment_turned_in",
      color: "text-rose-600 bg-rose-50 dark:bg-rose-900/30",
      border: "hover:border-rose-500/50",
    },
    {
      title: "No Minimum Capital",
      desc: "An LLP can be started with any amount of capital contribution, providing massive ease for bootstrapping startups.",
      icon: "savings",
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30",
      border: "hover:border-emerald-500/50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl text-left"
          >
            <h2 className="text-3xl font-black mb-3 text-slate-900 dark:text-white">
              Key Features & Benefits
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Experience the advantages of structural clarity and legal
              protection with a modern corporate structure tailored for growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <span className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
              Why Choose LLP?
            </span>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl ${feature.border}`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesBenefits
