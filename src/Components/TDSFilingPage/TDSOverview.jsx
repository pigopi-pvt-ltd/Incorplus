import { motion } from "framer-motion"
import { FileText, Users, CreditCard } from "lucide-react"

const TDSOverview = () => {
  const tdsRequirements = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Who Must Deduct TDS?",
      description:
        "Entities (both corporate and non-corporate deductors) making payments specified under Income Tax Act to third parties (deductees) are required to deduct tax at source.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Section 44AB Applicability",
      description:
        "An Individual or HUF whose total sale, gross receipts or turnover from business or profession exceeds the monetary limits under Clause (a) or (b) of Sec.44AB during the preceding financial year.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <CreditCard className="w-7 h-7" />,
      title: "TAN Requirement",
      description:
        "All persons deducting or collecting Tax at source are required to apply for and obtain a Tax Deduction/Collection Account Number (TAN).",
      gradient: "from-purple-500 to-purple-600",
    },
  ]

  const applicableSections = [
    {
      section: "194A",
      description: "Interest other than Interest on Securities",
    },
    { section: "194C", description: "Payment to Contractors" },
    { section: "194H", description: "Commission or Brokerage" },
    { section: "194I", description: "Rent" },
    {
      section: "194J",
      description: "Fees for Professional or Technical Services",
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
            TDS Return Filing
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {tdsRequirements.map((item, index) => (
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
                className={`h-2 bg-gradient-to-r ${item.gradient}`}
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
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6`}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Applicable Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-2xl">
                assignment
              </span>
            </motion.div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Applicable TDS Sections
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Individuals and HUFs are liable to deduct tax under the following
            sections:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applicableSections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {item.section}
                  </span>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold mb-1">
                    Section {item.section}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quarterly Filing Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800/30"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2,
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4"
            >
              <span className="material-symbols-outlined text-white text-3xl">
                calendar_month
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Quarterly Return Filing
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              All persons deducting or collecting Tax at source are required to
              file quarterly returns with the Income Tax Department. Our experts
              ensure timely and accurate filing to keep you compliant.
            </p>
            {/* 
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 pt-6"
            >
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check_circle
                  </span>
                </div>
                <span className="text-sm font-semibold">Q1: Apr-Jun</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check_circle
                  </span>
                </div>
                <span className="text-sm font-semibold">Q2: Jul-Sep</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check_circle
                  </span>
                </div>
                <span className="text-sm font-semibold">Q3: Oct-Dec</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check_circle
                  </span>
                </div>
                <span className="text-sm font-semibold">Q4: Jan-Mar</span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TDSOverview
