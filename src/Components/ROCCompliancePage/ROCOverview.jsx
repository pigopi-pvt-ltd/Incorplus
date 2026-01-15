import { motion } from "framer-motion"
import { FileText, Calendar, Shield } from "lucide-react"

const ROCOverview = () => {
  const forms = [
    {
      formName: "E-form AOC-4",
      title: "Financial Statements",
      timeline: "Within 30 days of AGM",
      icon: "account_balance_wallet",
      includes: [
        "Profit & Loss Account",
        "Balance Sheet",
        "Cash Flow Statements",
      ],
      description:
        "This form mainly contains financial statements which reveal all financial information of the company.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      formName: "E-form MGT-7",
      title: "Annual Return",
      timeline: "Within 60 days of AGM",
      icon: "description",
      includes: [
        "Directors' Details",
        "Various Meetings Held",
        "Remuneration of Directors and KMP",
        "Shareholding Pattern",
      ],
      description:
        "This form is used for filing Annual Return which contains both financial as well as non-financial information of the company.",
      color: "green",
      gradient: "from-green-500 to-green-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">
            Annual Return Filing for Company
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="space-y-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
              >
                <FileText className="w-7 h-7" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  What is Annual Filing?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Annual filing means submitting companies' financial and
                  non-financial information to Companies regulatory authority
                  i.e.{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    ROC (Registrar of Companies)
                  </span>{" "}
                  of the concerned state where the registered office of the
                  company is situated within the stipulated time period.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Annual filing ensures the transparency in the working of the
                  companies. Since it is a mandatory requirement, therefore,
                  companies cannot hide its financial information.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Information Provided */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Information Provided by Annual Filing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Company's Business Activities",
                "Capital Structure",
                "Cash Flow & Liquidity",
                "Profitability Analysis",
                "Transactions with Related Parties",
                "Shareholding Pattern",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Forms Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What Forms are Included?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Under Companies Act, there are only two forms prescribed for
              annual filing. Both forms are filed online to ROC.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {forms.map((form, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden group"
              >
                {/* Gradient Top Bar */}
                <motion.div
                  className={`h-2 bg-gradient-to-r ${form.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />

                {/* Card Content */}
                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${form.gradient} flex items-center justify-center text-white mb-6`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {form.icon}
                    </span>
                  </motion.div>

                  {/* Form Name */}
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {form.formName}
                    </h4>
                    <p className="text-lg font-semibold text-blue-600">
                      {form.title}
                    </p>
                  </div>

                  {/* Timeline Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                    <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {form.timeline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {form.description}
                  </p>

                  {/* Includes List */}
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {form.includes.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ amount: 0.5 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${form.gradient}`}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${form.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Certificate Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-800/30"
        >
          <div className="flex items-start gap-4">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-white text-2xl">
                verified
              </span>
            </motion.div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">
                Additional Certificate Requirement (Form MGT-8)
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Annual Return shall also contain a certificate as per{" "}
                <span className="font-semibold">Form No. MGT 8</span> duly
                authenticated by Company Secretary in practice in case of:
              </p>
              <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>A listed company, OR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>
                    Company having paid up share capital of ₹10 Crore or more,
                    OR
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Turnover of ₹50 Crore or more</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ROCOverview
