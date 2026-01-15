import { motion } from "framer-motion"
import { FileText, CheckCircle } from "lucide-react"

const ROCRequiredDocuments = () => {
  const documents = [
    {
      icon: "description",
      title: "Copy of MoA, AoA",
      description:
        "Memorandum of Association and Articles of Association documents of the company.",
    },
    {
      icon: "gavel",
      title: "Copy of Board Resolution",
      description:
        "Official board resolution authorizing the annual filing and compliance.",
    },
    {
      icon: "groups",
      title: "List of Shareholders with Holdings",
      description:
        "Complete list of all shareholders along with their shareholding details and percentages.",
    },
    {
      icon: "account_balance",
      title: "Details of Board Composition",
      description:
        "Information about board members, directors, and their roles in the company.",
    },
    {
      icon: "fact_check",
      title: "Secretarial Audit Report",
      description:
        "Audit report conducted by a practicing company secretary for statutory compliance.",
    },
    {
      icon: "receipt_long",
      title: "Last Year's Tax Return",
      description:
        "Previous year's income tax return and financial statements for reference.",
    },
    {
      icon: "handshake",
      title: "LLP Partnership Deed",
      description:
        "Partnership deed document (applicable for Limited Liability Partnerships).",
    },
    {
      icon: "warning",
      title: "Particulars of Penalties or Compounding Offences",
      description:
        "Details of any penalties imposed or compounding offences (if applicable).",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
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
            Documents Required for ROC Filing
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            Ensure you have all the necessary documents ready for seamless ROC
            compliance filing
          </p>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group"
            >
              {/* Background Gradient on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Number */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {doc.icon}
                    </span>
                  </motion.div>

                  {/* Document Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.05,
                    }}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {doc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {doc.description}
                </p>

                {/* Check Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-2 mt-4 text-green-600 dark:text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">Required</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/30"
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
              className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-white text-2xl">
                info
              </span>
            </motion.div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                Document Preparation Assistance
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our experts will guide you through the entire documentation
                process. We ensure all documents are properly prepared,
                verified, and submitted to ROC for maintaining compliance with
                all regulatory requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ROCRequiredDocuments
