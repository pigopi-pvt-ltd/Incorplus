import { motion } from "framer-motion"
import { FileText, TrendingUp, Calculator } from "lucide-react"

const GSTOverview = () => {
  const keyPoints = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: "GST Return Filing",
      description:
        "Taxpayers intimate the Goods and Service Tax Network (GSTN) about the inflow and outflow of supplies including the amount of tax paid and collected through online GST return filing.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Tax Payment & ITC",
      description:
        "Taxpayers are required to pay the amount of tax collected from outward supplier of goods or services after the deduction of Input Tax Credit (ITC) while recording taxable transactions.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Calculator className="w-7 h-7" />,
      title: "Bookkeeping & Accounting",
      description:
        "Bookkeeping records financial affairs while accounting prepares financial accounts. Both are essential for maintaining accurate books as per accounting standards and avoiding financial muddles.",
      gradient: "from-purple-500 to-purple-600",
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
            Understanding GST Compliance
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-3xl">
                account_balance
              </span>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                GST Law in India
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Goods and Service Tax law now governs the major portion of the
                indirect tax system in India. The suppliers registered under
                this regime need to fulfill the compliance requirement
                regularly.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Based on the{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  turnover and the activities
                </span>
                , the requirements and period of filing returns are prescribed
                under law.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Points Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {keyPoints.map((point, index) => (
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
                className={`h-2 bg-gradient-to-r ${point.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />

              {/* Card Content */}
              <div className="p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center text-white mb-6`}
                >
                  {point.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {point.description}
                </p>

                {/* Hover Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Importance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800/30"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2,
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6"
            >
              <span className="material-symbols-outlined text-white text-3xl">
                checklist
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Importance of Accurate Accounting
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Accounting for Small business is mandatory unless it is a Sole
                proprietorship with certain exceptions. Apart from compulsion,
                it is better to keep accounts updated with accuracy to avoid
                financial muddles.
              </p>

              <p>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Expertise knowledge of accounting is essential
                </span>{" "}
                even in the case of accounting for small businesses, to ensure
                the books are maintained as per the accounting standards.
              </p>

              <p>
                Maintenance of accounts is as an essential requirement for a
                home run business as it is to an industrialist.
              </p>
            </div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            >
              <div className="flex items-start gap-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-white text-sm">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    GSTN Compliance
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Regular intimation to Goods and Service Tax Network
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-white text-sm">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    ITC Management
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Proper Input Tax Credit deduction and payment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-white text-sm">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Financial Accuracy
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Maintain books as per accounting standards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-white text-sm">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Expert Assistance
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    CA guided filing and bookkeeping support
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GSTOverview
