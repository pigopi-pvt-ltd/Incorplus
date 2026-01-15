import React from "react"
import { motion } from "framer-motion"

const RequiredDocuments = () => {
  const categories = [
    {
      title: "Company Details",
      borderColor: "border-blue-600",
      iconColor: "text-blue-600",
      items: [
        { icon: "description", text: "Two unique names (priority based)" },
        { icon: "assignment", text: "Main business objectives" },
        {
          icon: "account_balance",
          text: "Capital details (Authorized & Paid-up)",
        },
      ],
    },
    {
      title: "Registered Address",
      borderColor: "border-pink-500",
      iconColor: "text-pink-500",
      items: [
        {
          icon: "receipt",
          text: "Utility bill (Electricity/Phone/Gas) < 2 months old",
        },
        { icon: "home", text: "No Objection Certificate (NOC) from owner" },
        { icon: "history_edu", text: "Rent agreement (if applicable)" },
      ],
    },
    {
      title: "Director Details",
      borderColor: "border-indigo-500",
      iconColor: "text-indigo-500",
      items: [
        { icon: "credit_card", text: "PAN Card & Aadhaar Card copies" },
        { icon: "portrait", text: "Recent passport size photographs" },
        { icon: "contact_page", text: "Voter ID / Passport / Driving License" },
      ],
    },
  ]

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-black font-display mb-4 text-slate-900 dark:text-white tracking-tight">
            Documents Required
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Keep these handy for a hassle-free registration process.
          </p>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`bg-white dark:bg-slate-900 p-8 rounded-2xl border-t-4 ${cat.borderColor} shadow-xl shadow-slate-200/50 dark:shadow-none dark:border-opacity-100 transition-all`}
            >
              <h4 className="text-xl font-black mb-8 text-slate-900 dark:text-white">
                {cat.title}
              </h4>

              <ul className="space-y-6">
                {cat.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <span
                      className={`material-symbols-outlined ${cat.iconColor} mt-0.5 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-snug">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default RequiredDocuments
