// import React from "react"
// import { motion } from "framer-motion"

// const isoData = [
//   {
//     code: "9001:2015",
//     title: "Quality Management",
//     desc: "The latest standard for Quality Management Systems. Focuses on organizational efficiency and customer satisfaction regardless of product size.",
//     icon: "verified_user",
//   },
//   {
//     code: "14001:2015",
//     title: "Environmental Management",
//     desc: "Refers to the planning and development of resources and policies to save the environment through structured organizational implementation.",
//     icon: "eco",
//   },
//   {
//     code: "18000:2007",
//     title: "OHSAS (Health & Safety)",
//     desc: "A British standard for occupational health and safety series applicable to all company types. Comprised of 18001 and 18002 guidelines.",
//     icon: "mfg_cpu",
//   },
//   {
//     code: "22000:2005",
//     title: "Food Safety",
//     desc: "Follows a 10-clause High-Level Structure focusing on risk-based thinking for food safety management across the global supply chain.",
//     icon: "restaurant",
//   },
//   {
//     code: "13485:2016",
//     title: "Medical Devices",
//     desc: "An internationally recognized framework that specifies requirements for quality management systems within the medical device industry.",
//     icon: "medical_services",
//   },
//   {
//     code: "HACCP",
//     title: "Hazard Analysis",
//     desc: "The premier method for reducing food hazards. A critical clause of food management systems for identifying critical control points.",
//     icon: "security_update_good",
//   },
//   {
//     code: "29990:2010",
//     title: "Learning Services",
//     desc: "Provides a basic model for quality professional practice in non-formal education and training service providers.",
//     icon: "school",
//   },
//   {
//     code: "50001:2011",
//     title: "Energy Management",
//     desc: "Specifies requirements for establishing, implementing, and improving an energy management system for optimized performance.",
//     icon: "bolt",
//   },
//   {
//     code: "20000:2011",
//     title: "IT Service Management",
//     desc: "An international IT standard ensuring that ITSM processes are perfectly aligned with the specific needs of the business.",
//     icon: "settings_suggest",
//   },
//   {
//     code: "27001:2013",
//     title: "Information Security",
//     desc: "The most famous part of ISO standards for managing security. Contains essential tools and controls to improve information security.",
//     icon: "enhanced_encryption",
//   },
// ]

// const ISOTypes = () => {
//   return (
//     <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-blue-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4"
//           >
//             Certification Standards
//           </motion.h2>
//           <motion.h3
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
//           >
//             Types of <span className="text-blue-600">ISO Registration</span>
//           </motion.h3>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {isoData.map((iso, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.05 }}
//               className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300"
//             >
//               {/* Header: Icon & Code */}
//               <div className="flex justify-between items-start mb-8">
//                 <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
//                   <span className="material-symbols-outlined font-bold text-2xl">
//                     {iso.icon}
//                   </span>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">
//                     Standard
//                   </p>
//                   <p className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
//                     {iso.code}
//                   </p>
//                 </div>
//               </div>

//               {/* Body */}
//               <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-3">
//                 {iso.title}
//               </h4>
//               <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase leading-relaxed tracking-wide">
//                 {iso.desc}
//               </p>

//               {/* Footer Decoration */}
//               <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
//                 <span className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.2em]">
//                   International Compliance
//                 </span>
//                 <div className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-600 transition-colors" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ISOTypes
import React from "react"
import { motion } from "framer-motion"

const isoData = [
  {
    code: "9001:2015",
    title: "Quality Management",
    desc: "The latest standard for Quality Management Systems. Focuses on organizational efficiency and customer satisfaction regardless of product size.",
    icon: "verified_user",
  },
  {
    code: "14001:2015",
    title: "Environmental Management",
    desc: "Refers to the planning and development of resources and policies to save the environment through structured organizational implementation.",
    icon: "eco",
  },
  {
    code: "18000:2007",
    title: "OHSAS (Health & Safety)",
    desc: "A British standard for occupational health and safety series applicable to all company types. Comprised of 18001 and 18002 guidelines.",
    icon: "factory",
  },
  {
    code: "22000:2005",
    title: "Food Safety",
    desc: "Follows a 10-clause High-Level Structure focusing on risk-based thinking for food safety management across the global supply chain.",
    icon: "restaurant",
  },
  {
    code: "13485:2016",
    title: "Medical Devices",
    desc: "An internationally recognized framework that specifies requirements for quality management systems within the medical device industry.",
    icon: "medical_services",
  },
  {
    code: "HACCP",
    title: "Hazard Analysis",
    desc: "The premier method for reducing food hazards. A critical clause of food management systems for identifying critical control points.",
    icon: "security_update_good",
  },
  {
    code: "29990:2010",
    title: "Learning Services",
    desc: "Provides a basic model for quality professional practice in non-formal education and training service providers.",
    icon: "school",
  },
  {
    code: "50001:2011",
    title: "Energy Management",
    desc: "Specifies requirements for establishing, implementing, and improving an energy management system for optimized performance.",
    icon: "bolt",
  },
  {
    code: "20000:2011",
    title: "IT Service Management",
    desc: "An international IT standard ensuring that ITSM processes are perfectly aligned with the specific needs of the business.",
    icon: "settings_suggest",
  },
  {
    code: "27001:2013",
    title: "Information Security",
    desc: "The most famous part of ISO standards for managing security. Contains essential tools and controls to improve information security.",
    icon: "enhanced_encryption",
  },
]

const ISOTypes = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.4em] text-[10px] uppercase mb-4"
          >
            Certification Standards
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Types of <span className="text-blue-600">ISO Registration</span>
          </motion.h3>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isoData.map((iso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:border-blue-600 dark:hover:border-blue-600 transition-all duration-300"
            >
              {/* Header: Icon & Code */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined font-bold text-2xl">
                    {iso.icon}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">
                    Standard
                  </p>
                  <p className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                    {iso.code}
                  </p>
                </div>
              </div>

              {/* Body */}
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-3">
                {iso.title}
              </h4>
              <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase leading-relaxed tracking-wide">
                {iso.desc}
              </p>

              {/* Footer Decoration */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.2em]">
                  International Compliance
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-600 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ISOTypes
