// import React from "react"
// import { motion } from "framer-motion"

// const RegistrationProcess = () => {
//   const steps = [
//     {
//       num: "01",
//       title: "Digital Signature",
//       desc: "Obtaining DSC for all directors and shareholders to enable secure digital filing.",
//     },
//     {
//       num: "02",
//       title: "Name Approval",
//       desc: "Checking availability and booking your unique company name via the RUN service.",
//     },
//     {
//       num: "03",
//       title: "Filing SPICe+",
//       desc: "Comprehensive submission of the main incorporation documents directly to the MCA.",
//     },
//     {
//       num: "04",
//       title: "PAN & TAN",
//       desc: "Automatic allotment of Tax Registration numbers alongside the incorporation process.",
//     },
//     {
//       num: "05",
//       title: "E-form Submission",
//       desc: "Final verification and filing of AOA, MOA, and necessary supporting documentation.",
//     },
//     {
//       num: "06",
//       title: "COI Issuance",
//       desc: "The Registrar grants your official Certificate of Incorporation. You are now a legal entity!",
//     },
//   ]

//   return (
//     <section
//       className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
//       id="process"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tight"
//           >
//             Seamless Registration <span className="text-blue-600">Journey</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-500 dark:text-slate-400 font-medium"
//           >
//             Our streamlined 6-step process to get your Public Limited Company
//             incorporated.
//           </motion.p>
//         </div>
//         {/* Process Grid */}
//         <div className="grid md:grid-cols-3 gap-y-16 gap-x-12 relative">
//           {steps.map((step, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ delay: idx * 0.1, duration: 0.5 }}
//               className="relative text-center group"
//             >
//               {/* Step Number Circle */}
//               <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center shadow-inner border border-slate-200 dark:border-slate-800 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-500">
//                 <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white group-hover:text-white">
//                   {step.num}
//                 </span>
//               </div>

//               {/* Text Content */}
//               <h5 className="text-xl font-black mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
//                 {step.title}
//               </h5>
//               <p className="text-sm text-slate-500 dark:text-slate-400 px-4 leading-relaxed font-medium">
//                 {step.desc}
//               </p>

//               {/* Decorative Connector (Hidden on Mobile) */}
//               {idx % 3 !== 2 && (
//                 <div className="hidden lg:block absolute top-10 -right-6 w-12 h-[2px] bg-slate-100 dark:bg-slate-800" />
//               )}
//             </motion.div>
//           ))}
//         </div>
//         {/* Bottom CTA or Summary
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           className="mt-20 p-8 rounded-[2rem] bg-slate-900 dark:bg-blue-600 text-center relative overflow-hidden"
//         >
//           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
//             <div className="text-left">
//               <h4 className="text-white text-xl font-bold">
//                 Ready to start the journey?
//               </h4>
//               <p className="text-blue-100/70 text-sm font-medium">
//                 Most registrations are completed within 15-20 working days.
//               </p>
//             </div>
//             <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors">
//               Consult an Expert
//             </button>
//           </div>
//           Abstract background shape for the CTA
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
//         </motion.div> */}
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
      num: "01",
      title: "Digital Signature",
      desc: "Obtaining DSC for all directors and shareholders to enable secure digital filing.",
      color: "border-blue-500",
      shadow: "shadow-blue-500/20",
      glow: "group-hover:bg-blue-500",
    },
    {
      num: "02",
      title: "Name Approval",
      desc: "Checking availability and booking your unique company name via the RUN service.",
      color: "border-emerald-500",
      shadow: "shadow-emerald-500/20",
      glow: "group-hover:bg-emerald-500",
    },
    {
      num: "03",
      title: "Filing SPICe+",
      desc: "Comprehensive submission of the main incorporation documents directly to the MCA.",
      color: "border-purple-500",
      shadow: "shadow-purple-500/20",
      glow: "group-hover:bg-purple-500",
    },
    {
      num: "04",
      title: "PAN & TAN",
      desc: "Automatic allotment of Tax Registration numbers alongside the incorporation process.",
      color: "border-orange-500",
      shadow: "shadow-orange-500/20",
      glow: "group-hover:bg-orange-500",
    },
    {
      num: "05",
      title: "E-form Submission",
      desc: "Final verification and filing of AOA, MOA, and necessary supporting documentation.",
      color: "border-pink-500",
      shadow: "shadow-pink-500/20",
      glow: "group-hover:bg-pink-500",
    },
    {
      num: "06",
      title: "COI Issuance",
      desc: "The Registrar grants your official Certificate of Incorporation. You are now a legal entity!",
      color: "border-cyan-500",
      shadow: "shadow-cyan-500/20",
      glow: "group-hover:bg-cyan-500",
    },
  ]

  return (
    <section
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
      id="process"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tight"
          >
            Seamless Registration <span className="text-blue-600">Journey</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">
            Visualizing your 6-step path to corporate success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-y-20 gap-x-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative text-center group"
            >
              {/* Colored Ring Container */}
              <div
                className={`w-24 h-24 mx-auto rounded-full border-4 ${step.color} ${step.shadow} 
                flex items-center justify-center mb-8 relative z-10 
                bg-white dark:bg-slate-900 shadow-xl transition-all duration-500 
                ${step.glow} group-hover:scale-110 group-hover:shadow-2xl`}
              >
                <span className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300">
                  {step.num}
                </span>

                {/* Secondary Outer Pulsing Ring (Dark Mode Only) */}
                <div
                  className={`absolute -inset-2 rounded-full border border-dashed opacity-20 dark:opacity-40 animate-spin-slow ${step.color} hidden dark:block`}
                ></div>
              </div>

              {/* Text */}
              <h5 className="text-xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">
                {step.title}
              </h5>
              <p className="text-sm text-slate-500 dark:text-slate-400 px-2 leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Floating Background Number (Subtle) */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-slate-100 dark:text-slate-900/40 -z-0 pointer-events-none select-none">
                {step.num}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Adding a global style for the spin animation if not already in your tailwind config */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default RegistrationProcess
