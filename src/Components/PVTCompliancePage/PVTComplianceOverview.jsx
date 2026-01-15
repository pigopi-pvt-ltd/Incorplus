import { motion } from "framer-motion"
import { FileText, Calendar, AlertCircle } from "lucide-react"

const PVTComplianceOverview = () => {
  const complianceItems = [
    {
      icon: "description",
      title: "ROC Filing",
      description: "Regular filings with Registrar of Companies",
    },
    {
      icon: "account_balance",
      title: "Finance Statement Submission",
      description: "Detailed financial reports and balance sheets",
    },
    {
      icon: "trending_up",
      title: "Profit and Loss Statements",
      description: "Annual P&L statements for business performance",
    },
    {
      icon: "receipt_long",
      title: "Income Tax Returns",
      description: "Annual ITR filing for compliance",
    },
    {
      icon: "assignment",
      title: "Annual Returns",
      description: "Complete annual return documentation",
    },
    {
      icon: "event_note",
      title: "Minutes of Meeting",
      description: "Documentation of all board meetings",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
            Annual Compliances for Private Limited Company in India
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
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center max-w-4xl mx-auto"
          >
            Once you have registered your company, you are going to run a
            business freely. However, you still have to file annual returns to
            the MCA in order to legitimate in the eyes of law. These annual
            returns or annual compliances for private limited company are needed
            to be filed on an{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              annual, biannual, half-yearly and quarterly basis
            </span>
            .
          </motion.p>

          {/* Compliance Types Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4"
              >
                <Calendar className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Annual Compliances
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                These annual compliances for Private Company are needed to be
                filed on regular intervals. They are mandatory compliances that
                the private limited companies need to prepare for.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4"
              >
                <AlertCircle className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Event-based Compliances
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                These are compliances that are filed on certain MCA
                notifications and specific business events as they occur.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Compliance Matters Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
            >
              <FileText className="w-7 h-7" />
            </motion.div>
            <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
              Annual Compliance Matters
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {complianceItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-blue-600 text-xl">
                      {item.icon}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Expert Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
                verified_user
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Expert Compliance Assistance
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              These are legal matters that can be attended to best through the
              aid of business experts. Therefore, compliance for a private
              limited company should only be filed by these experts.{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                This is where we step in.
              </span>
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We are{" "}
                <span className="font-bold text-blue-600">
                  Incorplus Venture
                </span>
                , India's leading team of business registration and business
                compliance experts. We provide the best Annual compliance
                services for private limited company in India.
              </p>

              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-lg font-semibold text-slate-900 dark:text-white"
              >
                Just contact our experts, give us your details and leave the
                rest to us.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PVTComplianceOverview
