import { motion } from "framer-motion"
import { Gavel, Calendar, AlertTriangle } from "lucide-react"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import { useState } from "react"

const LLPCompliancesSection = () => {
  const statutoryCompliances = [
    {
      title: "Meetings",
      description:
        "Regular intervals as per LLP agreement to discuss business performance and decision-making.",
    },
    {
      title: "Minute Books",
      description:
        "Maintenance of official record books for all meetings and resolutions passed by partners.",
    },
    {
      title: "Books of Accounts",
      description:
        "Recording all receipts, payments, and financial transactions on an accrual or cash basis.",
    },
    {
      title: "Audit Triggers",
      description:
        "Mandatory if turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs.",
    },
  ]

  const annualCompliances = [
    {
      number: "01",
      title: "Annual Return (ROC Filing)",
      description:
        "Must be filed with the Registrar of Companies (ROC) via Form 11 within 60 days of the close of the financial year (Due date: 30th May).",
    },
    {
      number: "02",
      title: "Statement of Accounts & Solvency",
      description:
        "Form 8 containing financial info must be filed within 30 days of the expiry of six months of the financial year (Due date: 30th October).",
    },
    {
      number: "03",
      title: "Income Tax Return (ITR) Filing",
      description:
        "LLPs must file their ITR annually. If an audit is required, the due date is 30th September; otherwise, it is 31st July.",
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const complianceItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
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
              LLP Compliances
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-blue-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="space-y-24">
            {/* Statutory Compliances */}
            <div>
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
                  <Gavel className="w-7 h-7" />
                </motion.div>
                <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                  Statutory Compliances
                </h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {statutoryCompliances.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <motion.h4
                      whileHover={{ scale: 1.05 }}
                      className="font-bold text-blue-600 mb-3"
                    >
                      {item.title}
                    </motion.h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Section Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"
            />

            {/* Annual Compliances */}
            <div>
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
                  <Calendar className="w-7 h-7" />
                </motion.div>
                <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                  Annual Compliances
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Compliance Items */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  className="lg:col-span-2 space-y-6"
                >
                  {annualCompliances.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={complianceItemVariants}
                      whileHover={{
                        x: 8,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold"
                      >
                        {item.number}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {item.description.split("Form").map((part, i) => (
                            <span key={i}>
                              {i > 0 && (
                                <strong className="text-slate-900 dark:text-white">
                                  Form
                                </strong>
                              )}
                              {part}
                            </span>
                          ))}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Penalties Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="bg-blue-600/5 dark:bg-blue-600/10 rounded-3xl p-8 border border-blue-600/20"
                >
                  <motion.div
                    className="flex items-center gap-2 text-blue-600 font-bold mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <AlertTriangle className="w-5 h-5" />
                    </motion.div>
                    <span className="uppercase tracking-widest text-xs">
                      Penalties
                    </span>
                  </motion.div>

                  <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    Delay Costs
                  </h4>

                  <div className="space-y-4">
                    <div className="pb-4 border-b border-blue-600/10">
                      <p className="text-sm text-slate-500 mb-1">
                        Government Fee Penalty
                      </p>
                      <motion.p
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl font-bold text-slate-900 dark:text-white"
                      >
                        ₹ 100{" "}
                        <span className="text-sm font-normal opacity-70">
                          per day / per form
                        </span>
                      </motion.p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                      Failure to file can lead to the LLP being declared defunct
                      and heavy personal liabilities for designated partners.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setOpenModal(true)}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-full mt-4 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-600/20"
                    >
                      Book Consultation Now
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedPlan={"LLP Compliance"}
      />
    </>
  )
}

export default LLPCompliancesSection
