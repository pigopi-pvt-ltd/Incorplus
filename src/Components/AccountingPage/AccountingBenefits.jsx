import { motion } from "framer-motion"
import { TrendingUp, Eye, RotateCcw, Building2, FileText } from "lucide-react"

const AccountingBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Gauge Income and Expenditure",
      description:
        "To ensure a smooth and transparent business, every individual, firm or a corporation is required to know about the income and expenditure incurred or generated. This helps them to plan and strategize their financial resources and exploit them accordingly.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Timely Access to Operational Information",
      description:
        "Up to date records provide access to operational information to the management. Although business owner(s) or managers are not directly associated with all transactions, accounting and bookkeeping help them to keep an eye on all the transactions from time to time.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <RotateCcw className="w-7 h-7" />,
      title: "Regular Reconciliation Rationalize Decisions",
      description:
        "Accounting comes with the reconciliation of data periodically. Monthly or quarterly reconciliation helps management to analyze the beneficial or detrimental aspects of the business. Hence, futuristic decisions can be rationalized with the analysis of loss and profit.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Attract Investors with Accurate Financials",
      description:
        "Investing in any business would be followed only after complete analysis of business and its financial condition. While approaching investors, you need to make sure that your books of accounts are up-to-date and accurate. Inconsistency may refrain investors to jump into the business.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Ready to Furnish Data for Timely Compliance",
      description:
        "Accounting makes it easy to extract data and submit it on time for regular return filing, compliance or scrutiny for the businesses.",
      gradient: "from-teal-500 to-teal-600",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
            Benefits of Accounting & Bookkeeping
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4">
            Unlock these key advantages for your business with professional
            accounting services
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden group"
            >
              {/* Gradient Top Bar */}
              <motion.div
                className={`h-2 bg-gradient-to-r ${benefit.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />

              {/* Card Content */}
              <div className="p-8">
                {/* Number Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + index * 0.05,
                  }}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-lg"
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white mb-6`}
                >
                  {benefit.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800/30"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4"
            >
              <span className="material-symbols-outlined text-white text-3xl">
                verified
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Transform Your Business with Professional Accounting
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Professional accounting and bookkeeping services provide the
              foundation for informed decision-making, investor confidence, and
              regulatory compliance.
            </p>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 pt-6"
            >
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check_circle
                  </span>
                </div>
                <span className="text-sm font-semibold">Accurate Records</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-sm">
                    schedule
                  </span>
                </div>
                <span className="text-sm font-semibold">Timely Updates</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-600 text-sm">
                    analytics
                  </span>
                </div>
                <span className="text-sm font-semibold">
                  Strategic Insights
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AccountingBenefits
