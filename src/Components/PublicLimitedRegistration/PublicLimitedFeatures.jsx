import React from "react"
import { motion } from "framer-motion"

const PublicLimitedFeatures = () => {
  const features = [
    {
      title: "Business Credibility",
      desc: "Enhance your trust with investors, suppliers, and customers through public disclosures and transparency.",
      icon: "verified",
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Fewer Risks",
      desc: "Shares are easily transferable to the public, reducing the magnitude of unsystematic market risks for founders.",
      icon: "shield",
      color: "text-indigo-600",
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      title: "Limited Liability",
      desc: "Personal assets are protected. Liability is limited only to the amount unpaid on shares held by members.",
      icon: "account_balance",
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Globalize Your Business",
      desc: "Foreign Direct Investment (FDI) is often easier, with 100% automatic route available for most sectors.",
      icon: "public",
      color: "text-emerald-600",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      title: "Easy Exit Plan",
      desc: "Exit strategies are straightforward. Shares can be listed and sold on stock exchanges for liquidity.",
      icon: "exit_to_app",
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      title: "Attract Funding",
      desc: "Easier access to venture capital, private equity, and public markets to fuel rapid expansion.",
      icon: "rocket_launch",
      color: "text-pink-600",
      bg: "bg-pink-100 dark:bg-pink-900/30",
    },
  ]

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
    <section
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            Key Features & <span className="text-blue-600">Benefits</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
            Unlock massive corporate advantages with a Public Limited entity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${f.bg} rounded-2xl flex items-center justify-center ${f.color} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                <span className="material-symbols-outlined text-3xl font-bold">
                  {f.icon}
                </span>
              </div>

              <h4 className="text-xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {f.title}
              </h4>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PublicLimitedFeatures
