import React from "react"
import { motion } from "framer-motion"

const documentCategories = [
  {
    title: "Company Details",
    accent: "indigo",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    textColor: "text-indigo-600 dark:text-indigo-400",
    bulletColor: "bg-indigo-500",
    items: [
      "Proposed Name of NGO",
      "Main Object of the Company",
      "Capital Structure Details",
    ],
  },
  {
    title: "Registered Office",
    accent: "sky",
    bgColor: "bg-sky-50 dark:bg-sky-900/20",
    textColor: "text-sky-600 dark:text-sky-400",
    bulletColor: "bg-sky-500",
    items: [
      "Latest Utility Bill (Electric/Gas)",
      "Property Ownership Docs",
      "Rent Agreement (if rented)",
    ],
  },
  {
    title: "Directors/Shareholders",
    accent: "rose",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-600 dark:text-rose-400",
    bulletColor: "bg-rose-500",
    items: [
      "Copy of PAN Card",
      "Identity Proof (Aadhar/Voter/DL)",
      "Self-Attested Bank Statement",
    ],
  },
]

const Section8Documents = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Required <span className="text-blue-600">Documents</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest"
          >
            Everything you need to keep ready for a smooth process
          </motion.p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {documentCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${category.bgColor} p-8 rounded-[2rem] border border-transparent hover:border-white/20 transition-all duration-300 shadow-sm`}
            >
              <h4
                className={`${category.textColor} font-black text-xl mb-8 uppercase tracking-tight`}
              >
                {category.title}
              </h4>

              <ul className="space-y-5">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-tight leading-snug"
                  >
                    <span
                      className={`mt-1.5 w-2 h-2 ${category.bulletColor} rounded-full shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pro-Tip Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]"
        >
          Note: All documents must be clear scanned copies of the originals and
          Self Attested wherever required
        </motion.p>
      </div>
    </section>
  )
}

export default Section8Documents
