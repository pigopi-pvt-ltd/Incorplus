// // // import React from "react"
// // // import { motion } from "framer-motion"

// // // const RegistrationProcess = () => {
// // //   const steps = [
// // //     { id: 1, title: "Choose Firm Name", active: true },
// // //     { id: 2, title: "Draft Deed", active: false },
// // //     { id: 3, title: "Apply for PAN", active: false },
// // //     { id: 4, title: "File Application", active: false },
// // //     { id: 5, title: "Submit Docs", active: false },
// // //     { id: 6, title: "Finalize Deed", active: false },
// // //     { id: 7, title: "Certification", active: "accent" },
// // //   ]

// // //   // Animation for the step circles
// // //   const stepVariants = {
// // //     hidden: { opacity: 0, scale: 0.5, y: 10 },
// // //     visible: (i) => ({
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: {
// // //         delay: i * 0.1,
// // //         duration: 0.4,
// // //         ease: "backOut",
// // //       },
// // //     }),
// // //   }

// // //   // Animation for the connecting line
// // //   const lineVariants = {
// // //     hidden: { scaleX: 0 },
// // //     visible: {
// // //       scaleX: 1,
// // //       transition: { duration: 1, ease: "easeInOut" },
// // //     },
// // //   }

// // //   return (
// // //     <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
// // //       <div className="max-w-6xl mx-auto px-6">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ amount: 0.5 }} // Triggers when 50% visible
// // //           className="text-center mb-16"
// // //         >
// // //           <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
// // //             Process of Registration
// // //           </h2>
// // //           <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm lg:text-base">
// // //             Simple, transparent, and hassle-free. We guide you through every
// // //             step of your business legal journey.
// // //           </p>
// // //         </motion.div>

// // //         <div className="relative">
// // //           {/* Connecting Line - Now repeats every time you scroll into view */}
// // //           <motion.div
// // //             variants={lineVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-slate-100 dark:bg-slate-800 z-0 origin-left"
// // //           />

// // //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-4 relative z-10">
// // //             {steps.map((step, index) => (
// // //               <div key={step.id} className="text-center">
// // //                 <motion.div
// // //                   custom={index}
// // //                   variants={stepVariants}
// // //                   initial="hidden"
// // //                   whileInView="visible"
// // //                   whileHover={{ y: -5, scale: 1.05 }}
// // //                   className={`
// // //                     w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-xl mb-4
// // //                     ring-4 ring-white dark:ring-slate-900 transition-shadow duration-300
// // //                     ${
// // //                       step.active === true
// // //                         ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
// // //                         : step.active === "accent"
// // //                         ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
// // //                         : "bg-white dark:bg-slate-800 text-slate-400 border-2 border-slate-100 dark:border-slate-700"
// // //                     }
// // //                   `}
// // //                 >
// // //                   {step.id}
// // //                 </motion.div>

// // //                 <motion.h4
// // //                   initial={{ opacity: 0 }}
// // //                   whileInView={{ opacity: 1 }}
// // //                   transition={{ delay: index * 0.1 + 0.2 }}
// // //                   className="font-bold text-[11px] lg:text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 px-1"
// // //                 >
// // //                   {step.title}
// // //                 </motion.h4>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default RegistrationProcess
// // import React from "react"
// // import { motion } from "framer-motion"

// // const RegistrationProcess = () => {
// //   const steps = [
// //     {
// //       id: 1,
// //       title: "Choose Firm Name",
// //       color: "bg-rose-500 shadow-rose-500/30",
// //     },
// //     { id: 2, title: "Draft Deed", color: "bg-orange-500 shadow-orange-500/30" },
// //     {
// //       id: 3,
// //       title: "Apply for PAN",
// //       color: "bg-amber-500 shadow-amber-500/30",
// //     },
// //     {
// //       id: 4,
// //       title: "File Application",
// //       color: "bg-emerald-500 shadow-emerald-500/30",
// //     },
// //     { id: 5, title: "Submit Docs", color: "bg-blue-500 shadow-blue-500/30" },
// //     {
// //       id: 6,
// //       title: "Finalize Deed",
// //       color: "bg-indigo-500 shadow-indigo-500/30",
// //     },
// //     {
// //       id: 7,
// //       title: "Certification",
// //       color: "bg-purple-500 shadow-purple-500/30",
// //     },
// //   ]

// //   const stepVariants = {
// //     hidden: { opacity: 0, scale: 0.3, y: 20 },
// //     visible: (i) => ({
// //       opacity: 1,
// //       scale: 1,
// //       y: 0,
// //       transition: {
// //         delay: i * 0.12,
// //         duration: 0.4,
// //         type: "spring",
// //         stiffness: 260,
// //         damping: 20,
// //       },
// //     }),
// //   }

// //   const lineVariants = {
// //     hidden: { scaleX: 0 },
// //     visible: {
// //       scaleX: 1,
// //       transition: { duration: 1.5, ease: "circOut" },
// //     },
// //   }

// //   return (
// //     <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
// //       <div className="max-w-6xl mx-auto px-6 text-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="mb-16"
// //         >
// //           <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
// //             Process of Registration
// //           </h2>
// //           <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
// //             A vibrant, step-by-step journey to getting your business legally
// //             recognized.
// //           </p>
// //         </motion.div>

// //         <div className="relative">
// //           {/* Connecting Line (Re-triggers on scroll) */}
// //           <motion.div
// //             variants={lineVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             className="hidden lg:block absolute top-10 left-10 right-10 h-[3px] bg-slate-100 dark:bg-slate-800 z-0 origin-left"
// //           />

// //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-4 relative z-10">
// //             {steps.map((step, index) => (
// //               <div key={step.id} className="flex flex-col items-center">
// //                 <motion.div
// //                   custom={index}
// //                   variants={stepVariants}
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   whileHover={{
// //                     scale: 1.15,
// //                     rotate: [0, -5, 5, 0],
// //                     transition: { duration: 0.3 },
// //                   }}
// //                   className={`
// //                     w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 text-white
// //                     shadow-lg ring-4 ring-white dark:ring-slate-900 transition-colors z-10
// //                     ${step.color}
// //                   `}
// //                 >
// //                   {step.id}
// //                 </motion.div>

// //                 <motion.h4
// //                   initial={{ opacity: 0, filter: "blur(4px)" }}
// //                   whileInView={{ opacity: 1, filter: "blur(0px)" }}
// //                   transition={{ delay: index * 0.12 + 0.3 }}
// //                   className="font-bold text-[10px] lg:text-xs uppercase tracking-tighter text-slate-700 dark:text-slate-300 max-w-[100px]"
// //                 >
// //                   {step.title}
// //                 </motion.h4>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default RegistrationProcess
// import React from "react"
// import { motion } from "framer-motion"

// const RegistrationProcess = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Choose Firm Name",
//       color: "bg-rose-500 shadow-rose-500/30",
//     },
//     { id: 2, title: "Draft Deed", color: "bg-orange-500 shadow-orange-500/30" },
//     {
//       id: 3,
//       title: "Apply for PAN",
//       color: "bg-amber-500 shadow-amber-500/30",
//     },
//     {
//       id: 4,
//       title: "File Application",
//       color: "bg-emerald-500 shadow-emerald-500/30",
//     },
//     { id: 5, title: "Submit Docs", color: "bg-blue-500 shadow-blue-500/30" },
//     {
//       id: 6,
//       title: "Finalize Deed",
//       color: "bg-indigo-500 shadow-indigo-500/30",
//     },
//     {
//       id: 7,
//       title: "Certification",
//       color: "bg-purple-500 shadow-purple-500/30",
//     },
//   ]

//   const stepVariants = {
//     hidden: { opacity: 0, scale: 0.3, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.15, // Slightly slower stagger for better sync with the line
//         duration: 0.4,
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//       },
//     }),
//   }

//   const lineVariants = {
//     hidden: { scaleX: 0 },
//     visible: {
//       scaleX: 1,
//       transition: {
//         duration: 1.8, // Slower duration so it "travels" through the steps
//         ease: "easeInOut",
//       },
//     },
//   }

//   return (
//     <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
//             Process of Registration
//           </h2>
//           <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
//             Watch the journey of your partnership deed from start to finish.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Theme Blue Connecting Line */}
//           <div className="hidden lg:block absolute top-10 left-10 right-10 h-[3px] bg-slate-100 dark:bg-slate-800 z-0">
//             <motion.div
//               variants={lineVariants}
//               initial="hidden"
//               whileInView="visible"
//               className="h-full bg-blue-600 origin-left shadow-[0_0_10px_rgba(37,99,235,0.5)]"
//             />
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-4 relative z-10">
//             {steps.map((step, index) => (
//               <div key={step.id} className="flex flex-col items-center">
//                 <motion.div
//                   custom={index}
//                   variants={stepVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover={{
//                     scale: 1.15,
//                     rotate: [0, -5, 5, 0],
//                     transition: { duration: 0.3 },
//                   }}
//                   className={`
//                     w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 text-white
//                     shadow-lg ring-4 ring-white dark:ring-slate-900 transition-colors z-10
//                     ${step.color}
//                   `}
//                 >
//                   {step.id}
//                 </motion.div>

//                 <motion.h4
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: index * 0.15 + 0.3 }}
//                   className="font-bold text-[10px] lg:text-xs uppercase tracking-tighter text-slate-700 dark:text-slate-300 max-w-[100px]"
//                 >
//                   {step.title}
//                 </motion.h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default RegistrationProcess
import React from "react"
import { motion } from "framer-motion"

const RegistrationProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Firm Name",
      borderColor: "border-rose-500",
      shadow: "shadow-rose-500/20",
    },
    {
      id: 2,
      title: "Draft Deed",
      borderColor: "border-orange-500",
      shadow: "shadow-orange-500/20",
    },
    {
      id: 3,
      title: "Apply for PAN",
      borderColor: "border-amber-500",
      shadow: "shadow-amber-500/20",
    },
    {
      id: 4,
      title: "File Application",
      borderColor: "border-emerald-500",
      shadow: "shadow-emerald-500/20",
    },
    {
      id: 5,
      title: "Submit Docs",
      borderColor: "border-blue-500",
      shadow: "shadow-blue-500/20",
    },
    {
      id: 6,
      title: "Finalize Deed",
      borderColor: "border-indigo-500",
      shadow: "shadow-indigo-500/20",
    },
    {
      id: 7,
      title: "Certification",
      borderColor: "border-purple-500",
      shadow: "shadow-purple-500/20",
    },
  ]

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 15 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
            Process of Registration
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
            Our streamlined 7-step process ensures your partnership is legally
            airtight.
          </p>
        </motion.div>

        <div className="relative">
          {/* Theme Blue Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-[2px] bg-slate-100 dark:bg-slate-800 z-0">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              className="h-full bg-blue-600 origin-left"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-4 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <motion.div
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -8 }}
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl mb-4 
                    bg-white dark:bg-slate-900 text-slate-800 dark:text-white
                    border-4 transition-all duration-300 shadow-md
                    ${step.borderColor} ${step.shadow}
                  `}
                >
                  {step.id}
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.12 + 0.3 }}
                  className="font-bold text-[10px] lg:text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 max-w-[90px] leading-tight"
                >
                  {step.title}
                </motion.h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationProcess
