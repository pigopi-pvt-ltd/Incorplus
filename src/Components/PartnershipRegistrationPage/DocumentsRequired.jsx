import React from "react"
import { motion } from "framer-motion"
import { Info, Building2, MapPin, UserCheck, CheckCircle2 } from "lucide-react"

const DocumentsRequired = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <h2 className="text-4xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
              Documents Required for <br />
              <span className="text-blue-600">Registration</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Gather these documents to ensure a smooth and speedy registration
              process. Our team will verify each for accuracy.
            </p>

            <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 backdrop-blur-sm">
              <p className="text-blue-600 font-bold flex items-center gap-2 mb-2">
                <Info size={18} />
                Pro Tip
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                Scanned copies must be clear and legible. Original documents
                should be kept handy for verification if needed.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Document Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-8 grid md:grid-cols-2 gap-6"
          >
            {/* Column 1 */}
            <div className="space-y-6">
              <motion.div
                variants={cardVariants}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <h4 className="text-lg font-bold mb-6 text-blue-600 flex items-center gap-2">
                  <Building2 size={20} /> Firm Details
                </h4>
                <ul className="space-y-4">
                  {[
                    "Proposed Partnership Name",
                    "Business Objectives & Main Objects",
                    "Capital Contribution Details",
                    "Profit & Loss Sharing Ratio",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 text-blue-500/40"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <h4 className="text-lg font-bold mb-6 text-emerald-500 flex items-center gap-2">
                  <MapPin size={20} /> Address Proof
                </h4>
                <ul className="space-y-4">
                  {[
                    "Utility Bill (Electricity/Water)",
                    "Property Tax Receipt / Sale Deed",
                    "Rent Agreement (if on lease)",
                    "NOC from Property Owner",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 text-emerald-500/40"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Column 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <h4 className="text-lg font-bold mb-6 text-purple-600 flex items-center gap-2">
                <UserCheck size={20} /> Partner KYC (Min. 2)
              </h4>
              <div className="space-y-4">
                {[
                  {
                    title: "Identity Proof",
                    desc: "Self-attested PAN Card (Mandatory)",
                  },
                  {
                    title: "Address Proof",
                    desc: "Aadhar / Voter ID / Passport",
                  },
                  {
                    title: "Contact Info",
                    desc: "Active Email & Mobile linked to Aadhar",
                  },
                  {
                    title: "Photographs",
                    desc: "2 Passport size photos per partner",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50"
                  >
                    <p className="font-bold text-slate-900 dark:text-slate-200 text-xs mb-1 uppercase tracking-wider">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DocumentsRequired
