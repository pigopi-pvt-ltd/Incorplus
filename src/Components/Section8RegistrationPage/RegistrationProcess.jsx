// // import React from "react"
// // import { motion } from "framer-motion"

// // const steps = [
// //   {
// //     id: 1,
// //     title: "Name Approval",
// //     desc: "Checking availability of proposed name via RUN",
// //   },
// //   {
// //     id: 2,
// //     title: "DSC Setup",
// //     desc: "Obtaining Digital Signature Certificates",
// //   },
// //   {
// //     id: 3,
// //     title: "Drafting",
// //     desc: "Preparation of MOA, AOA and declarations",
// //   },
// //   {
// //     id: 4,
// //     title: "Spice Filing",
// //     desc: "Submission of Incorporation Form (SPICe+)",
// //   },
// //   {
// //     id: 5,
// //     title: "Certificate",
// //     desc: "Issuance of license and incorporation cert",
// //   },
// // ]

// // const RegistrationProcess = () => {
// //   return (
// //     <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
// //       <div className="max-w-6xl mx-auto px-6">
// //         {/* Section Header */}
// //         <div className="text-center mb-20">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter"
// //           >
// //             Registration <span className="text-blue-600">Process</span>
// //           </motion.h2>
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.1 }}
// //             className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest"
// //           >
// //             A simple 5-step journey to your NGO formation
// //           </motion.p>
// //         </div>

// //         {/* Steps Grid */}
// //         <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
// //           {/* Decorative Background Line (Desktop only) */}
// //           <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 z-0" />

// //           {steps.map((step, index) => (
// //             <motion.div
// //               key={step.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.1 }}
// //               className="relative z-10 text-center group"
// //             >
// //               {/* Step Number Circle */}
// //               <div
// //                 className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl border-2 font-black text-xl mb-6 transition-all duration-300
// //                 ${
// //                   index === 4
// //                     ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110"
// //                     : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 group-hover:border-blue-600 group-hover:text-blue-600"
// //                 }`}
// //               >
// //                 {step.id}
// //               </div>

// //               {/* Step Content */}
// //               <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
// //                 {step.title}
// //               </h4>
// //               <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-[150px] mx-auto uppercase">
// //                 {step.desc}
// //               </p>

// //               {/* Mobile Connector Line */}
// //               {index !== steps.length - 1 && (
// //                 <div className="md:hidden w-0.5 h-12 bg-slate-100 dark:bg-slate-800 mx-auto my-4" />
// //               )}
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default RegistrationProcess
// import React from "react"
// import { motion } from "framer-motion"

// const steps = [
//   {
//     id: 1,
//     title: "Name Approval",
//     desc: "Checking availability of proposed name via RUN",
//     color: "border-blue-500 text-blue-500 bg-blue-50/50 dark:bg-blue-500/10",
//   },
//   {
//     id: 2,
//     title: "DSC Setup",
//     desc: "Obtaining Digital Signature Certificates",
//     color:
//       "border-indigo-500 text-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10",
//   },
//   {
//     id: 3,
//     title: "Drafting",
//     desc: "Preparation of MOA, AOA and declarations",
//     color:
//       "border-purple-500 text-purple-500 bg-purple-50/50 dark:bg-purple-500/10",
//   },
//   {
//     id: 4,
//     title: "Spice Filing",
//     desc: "Submission of Incorporation Form (SPICe+)",
//     color: "border-cyan-500 text-cyan-500 bg-cyan-50/50 dark:bg-cyan-500/10",
//   },
//   {
//     id: 5,
//     title: "Certificate",
//     desc: "Issuance of license and incorporation cert",
//     color:
//       "bg-green-600 border-green-600 text-white shadow-lg shadow-green-500/30",
//   },
// ]

// const RegistrationProcess = () => {
//   return (
//     <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter"
//           >
//             Registration <span className="text-blue-600">Process</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest"
//           >
//             A simple 5-step journey to your NGO formation
//           </motion.p>
//         </div>

//         {/* Steps Grid */}
//         <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
//           {/* Background Connector Line */}
//           <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 z-0" />

//           {steps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="relative z-10 text-center group"
//             >
//               {/* Step Number Circle with Dynamic Colors */}
//               <div
//                 className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl border-2 font-black text-xl mb-6 transition-all duration-500 group-hover:scale-110 ${step.color}`}
//               >
//                 {step.id}
//               </div>

//               {/* Step Content */}
//               <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
//                 {step.title}
//               </h4>
//               <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-[150px] mx-auto uppercase">
//                 {step.desc}
//               </p>

//               {/* Mobile Connector */}
//               {index !== steps.length - 1 && (
//                 <div className="md:hidden w-0.5 h-12 bg-slate-100 dark:bg-slate-800 mx-auto my-4" />
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default RegistrationProcess
import React from "react"
import { motion } from "framer-motion"

const steps = [
  {
    id: 1,
    title: "Name Approval",
    desc: "Checking availability of proposed name via RUN",
    borderColor: "border-blue-500",
    textColor: "text-blue-500",
  },
  {
    id: 2,
    title: "DSC Setup",
    desc: "Obtaining Digital Signature Certificates",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-500",
  },
  {
    id: 3,
    title: "Drafting",
    desc: "Preparation of MOA, AOA and declarations",
    borderColor: "border-purple-500",
    textColor: "text-purple-500",
  },
  {
    id: 4,
    title: "Spice Filing",
    desc: "Submission of Incorporation Form (SPICe+)",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-500",
  },
  {
    id: 5,
    title: "Certificate",
    desc: "Issuance of license and incorporation cert",
    borderColor: "border-green-600",
    textColor: "text-white",
    isLast: true,
  },
]

const RegistrationProcess = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Registration <span className="text-blue-600">Process</span>
          </motion.h2>
          <motion.p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
            A simple 5-step journey to your NGO formation
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
          {/* THE FIX: Connector Line positioned exactly behind the middle of the circles */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-slate-100 dark:bg-slate-800 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 text-center group"
            >
              {/* Step Number Circle */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl border-2 font-black text-xl mb-6 transition-all duration-300 relative z-20 
                ${
                  step.isLast
                    ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-500/20"
                    : `bg-white dark:bg-slate-950 ${step.borderColor} ${step.textColor}`
                } group-hover:scale-110`}
              >
                {step.id}
              </div>

              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                {step.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-[150px] mx-auto uppercase">
                {step.desc}
              </p>

              {/* Mobile Vertical Line */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-0.5 h-12 bg-slate-100 dark:bg-slate-800 mx-auto my-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegistrationProcess
