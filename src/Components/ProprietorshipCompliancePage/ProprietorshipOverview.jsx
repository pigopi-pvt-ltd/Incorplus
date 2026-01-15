import React from "react"
import { motion } from "framer-motion"

const overviewData = [
  {
    title: "Financial Statements",
    desc: "Maintain accurate profit and loss accounts and balance sheets. We ensure your financial records reflect the true state of your business while staying audit-ready at all times.",
    icon: "account_balance",
  },
  {
    title: "GST Regulations",
    desc: "Navigate the complexities of GST with ease. We handle monthly or quarterly filings, reconciliation of inputs, and annual returns to avoid heavy penalties and interest.",
    icon: "receipt_long",
  },
  {
    title: "TDS & Income Tax",
    desc: "Expert management of Tax Deducted at Source (TDS) and yearly Income Tax Returns (ITR). We ensure timely payments and filings to maintain your high credit score.",
    icon: "payments",
  },
]

const ProprietorshipOverview = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Deep Dive
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none"
          >
            Compliance <span className="text-blue-600">Overview</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 mt-8 font-medium leading-relaxed"
          >
            Everything you need to keep your business records clean and your
            operations running smoothly within Indian regulatory frameworks.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
          {overviewData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-600/20 text-blue-600 group-hover:text-white">
                <span className="material-symbols-outlined text-3xl font-bold">
                  {item.icon}
                </span>
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase leading-relaxed tracking-wider">
                {item.desc}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-12 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProprietorshipOverview
