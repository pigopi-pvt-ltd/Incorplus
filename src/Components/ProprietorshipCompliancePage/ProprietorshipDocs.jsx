import React from "react"
import { motion } from "framer-motion"

const docList = [
  {
    title: "Financial Records",
    desc: "Critical transactional documents required for auditing.",
    icon: "receipt_long",
    items: [
      "Purchase / Sale Invoices",
      "Expense Invoices",
      "All business-related receipts",
    ],
  },
  {
    title: "Banking & Credit",
    desc: "Complete financial trail for the proprietorship.",
    icon: "account_balance",
    items: [
      "Bank Statement (1 April to 31 March)",
      "Covers all accounts in Proprietor's name",
      "Credit Card Statements (for business expenses)",
    ],
  },
  {
    title: "Taxation Docs",
    desc: "Proof of tax compliance and historical filings.",
    icon: "payments",
    items: [
      "Copy of TDS Challans deposited",
      "Copy of TDS Returns (if any)",
      "Previous ITR acknowledgments",
    ],
  },
  {
    title: "Identity & Proof",
    desc: "Mandatory KYC and registration documents.",
    icon: "badge",
    items: [
      "PAN & Aadhaar of Proprietor",
      "GST Certificate / Shop Act",
      "MSME / Udyam Registration",
    ],
  },
]

const ProprietorshipDocs = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Documentation
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Required <span className="text-blue-600">Documents</span>
          </motion.h3>
        </div>

        {/* Document Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docList.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined text-blue-600 group-hover:text-white font-bold transition-colors">
                  {doc.icon}
                </span>
              </div>

              <h5 className="text-lg font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
                {doc.title}
              </h5>

              <ul className="space-y-3">
                {doc.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-tight"
                  >
                    <span className="text-blue-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Secure Note */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600/5 rounded-full border border-blue-600/10">
            <span className="material-symbols-outlined text-blue-600 text-sm font-black">
              encrypted
            </span>
            <p className="text-[10px] font-black text-slate-500 dark:text-blue-400 uppercase tracking-widest">
              Digital submission enabled via secure encrypted portal
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default ProprietorshipDocs
