import React from "react"
import { motion } from "framer-motion"

const RequiredDocuments = () => {
  const documentGroups = [
    {
      title: "Company & Promoters",
      icon: "people",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-100 dark:border-blue-500/20",
      items: [
        "Photo & Identity Proof of each Promoter (Aadhar/Voter ID)",
        "Address Proof of each Promoter (Passport/Driving License)",
        "PAN Card of each Promoter (Mandatory)",
      ],
    },
    {
      title: "Registered Address",
      icon: "home_work",
      color: "text-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-100 dark:border-indigo-500/20",
      items: [
        "Proof of Registered Office (Rental Agreement/Sale Deed)",
        "Latest Utility Bill (Electricity/Water/Gas)",
        "NOC from the owner of the premises",
      ],
    },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tight"
          >
            Required <span className="text-blue-600">Documents</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Prepare these to fast-track your application process.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {documentGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border ${group.borderColor} hover:border-transparent hover:ring-2 hover:ring-offset-4 hover:ring-blue-500/20 dark:hover:ring-offset-slate-950 transition-all duration-300`}
            >
              <div className="flex items-center space-x-5 mb-10">
                <div
                  className={`w-14 h-14 ${group.bgColor} ${group.color} rounded-2xl flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-3xl font-bold">
                    {group.icon}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {group.title}
                </h4>
              </div>

              <ul className="space-y-5">
                {group.items.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="flex items-start group/item"
                  >
                    <div
                      className={`mt-1 mr-4 transition-transform group-hover/item:scale-110`}
                    >
                      <span
                        className={`material-symbols-outlined ${group.color} text-xl`}
                      >
                        task_alt
                      </span>
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Info Note */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex items-center justify-center p-4 bg-blue-50/50 dark:bg-blue-500/5 rounded-2xl border border-blue-100/50 dark:border-blue-500/10"
        >
          <span className="material-symbols-outlined text-blue-600 mr-2">
            info
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-bold">
            All documents must be clear scanned copies in PDF or JPEG format.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}

export default RequiredDocuments
