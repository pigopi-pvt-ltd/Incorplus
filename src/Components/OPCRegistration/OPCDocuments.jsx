import React from "react"
import { motion } from "framer-motion"

const OPCDocuments = () => {
  const docGroups = [
    {
      title: "Company Details",
      icon: "apartment",
      items: [
        "Proposed name of company",
        "Main object of business",
        "Capital structure details",
        "Registered office address",
      ],
    },
    {
      title: "Address Proof",
      icon: "location_on",
      items: [
        "Utility Bill (Electricity/Water)",
        "NOC from owner of property",
        "Rent Agreement (if rented)",
        "Property tax receipt",
      ],
    },
    {
      title: "Director/Nominee",
      icon: "assignment_ind",
      items: [
        "PAN Card & Aadhaar Copy",
        "Latest Passport Size Photo",
        "Bank Statement/Phone Bill",
        "Voter ID / Passport / DL",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-center text-slate-900 dark:text-white uppercase tracking-tighter mb-12"
        >
          Required Documents
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {docGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-600/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined text-blue-600 group-hover:text-white transition-colors">
                  {group.icon}
                </span>
              </div>

              <h5 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6">
                {group.title}
              </h5>

              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-[18px] shrink-0">
                      check_circle
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-tight uppercase tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OPCDocuments
