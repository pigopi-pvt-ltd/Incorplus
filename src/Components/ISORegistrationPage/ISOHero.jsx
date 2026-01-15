// // import React from "react"
// // import { motion } from "framer-motion"

// // const ISOHero = () => {
// //   return (
// //     <section className="relative overflow-hidden pt-12 pb-20 bg-white dark:bg-slate-950 transition-colors duration-500">
// //       {/* Background Decorative Element */}
// //       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

// //       <div className="max-w-6xl mx-auto px-6">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           {/* Left Column: Content */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="space-y-8"
// //           >
// //             {/* Headline */}
// //             <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 dark:text-white uppercase tracking-tighter">
// //               Get ISO Certified <br />
// //               <span className="text-blue-600">In 24 Working Hours</span>
// //             </h1>

// //             {/* Description */}
// //             <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
// //               Secure your business credibility globally. We provide end-to-end
// //               support for{" "}
// //               <span className="text-slate-900 dark:text-white font-bold">
// //                 ISO Registration
// //               </span>{" "}
// //               and Certification with zero compliance hurdles.
// //             </p>

// //             {/* CTA Group */}
// //             <div className="flex flex-wrap gap-4 pt-4">
// //               <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 flex items-center gap-3 group">
// //                 Start Application
// //                 <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
// //                   arrow_forward
// //                 </span>
// //               </button>
// //               <button className="bg-white dark:bg-slate-900 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-600 transition-all">
// //                 View Standards
// //               </button>
// //             </div>
// //           </motion.div>

// //           {/* Right Column: Visual Component */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.6 }}
// //             className="relative"
// //           >
// //             {/* Background Glow */}
// //             <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-3xl -rotate-6 scale-95" />

// //             {/* Main Visual Placeholder */}
// //             <div className="relative aspect-square  bg-slate-100 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl">
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <span className="material-symbols-outlined text-[120px] text-slate-200 dark:text-slate-800 font-thin">
// //                   verified_user
// //                 </span>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default ISOHero
// import React, { useState } from "react"
// import { motion } from "framer-motion"
// import ConsultationModal from "../CommonComponents/ConsultationModal" // Importing your existing modal

// const ISOHero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   return (
//     <section className="relative overflow-hidden pt-12 pb-20 bg-white dark:bg-slate-950 transition-colors duration-500">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Column: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             {/* Headline */}
//             <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 dark:text-white uppercase tracking-tighter">
//               Get ISO Certified <br />
//               <span className="text-blue-600">In 24 Working Hours</span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
//               Secure your business credibility globally. We provide end-to-end
//               support for{" "}
//               <span className="text-slate-900 dark:text-white font-bold">
//                 ISO Registration
//               </span>{" "}
//               and Certification with zero compliance hurdles.
//             </p>

//             {/* CTA Group */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 flex items-center gap-3 group"
//               >
//                 Start Application
//                 <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
//                   arrow_forward
//                 </span>
//               </button>
//               <button className="bg-white dark:bg-slate-900 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-600 transition-all">
//                 View Standards
//               </button>
//             </div>
//           </motion.div>

//           {/* Right Column: Visual Component */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             {/* Background Glow */}
//             <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-3xl -rotate-6 scale-95" />

//             {/* Main Visual Placeholder */}
//             <div className="relative aspect-square bg-slate-100 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
//               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
//                 <span className="material-symbols-outlined text-[120px] text-slate-200 dark:text-slate-800 font-thin mb-4">
//                   verified_user
//                 </span>
//                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600">
//                   Global Standard Verification
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Integration of the external Modal */}
//       <ConsultationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </section>
//   )
// }

// export default ISOHero
// import React, { useState } from "react"
// import { motion } from "framer-motion"
// import ConsultationModal from "../CommonComponents/ConsultationModal"

// const ISOHero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   return (
//     <section className="relative overflow-hidden pt-12 pb-20 bg-white dark:bg-slate-950 transition-colors duration-500">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Column: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 dark:text-white uppercase tracking-tighter">
//               Get ISO Certified <br />
//               <span className="text-blue-600">In 24 Working Hours</span>
//             </h1>

//             <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
//               Secure your business credibility globally. We provide end-to-end
//               support for{" "}
//               <span className="text-slate-900 dark:text-white font-bold">
//                 ISO Registration
//               </span>{" "}
//               and Certification with zero compliance hurdles.
//             </p>

//             {/* CTA Group */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 flex items-center gap-3 group"
//               >
//                 Start Application
//                 <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
//                   arrow_forward
//                 </span>
//               </button>
//               <button className="bg-white dark:bg-slate-900 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-600 transition-all">
//                 View Standards
//               </button>
//             </div>
//           </motion.div>

//           {/* Right Column: Visual Component */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             {/* Background Glow */}
//             <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-3xl -rotate-6 scale-95" />

//             {/* Main Visual with Image */}
//             <div className="relative aspect-square bg-slate-100 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1573163281514-0675239e2646?q=80&w=2069&auto=format&fit=crop"
//                 alt="ISO Certification Global Quality"
//                 className="w-full h-full object-cover opacity-80 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
//               />

//               {/* Overlay elements */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

//               <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
//                 <div className="flex flex-col">
//                   <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
//                     Global Standards
//                   </span>
//                   <span className="text-white font-black uppercase tracking-tighter">
//                     Verified Certification
//                   </span>
//                 </div>
//                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
//                   <span className="material-symbols-outlined text-blue-600 font-bold">
//                     verified
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Floating ISO Tag */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl border-4 border-white dark:border-slate-950"
//             >
//               <p className="text-2xl font-black leading-none uppercase tracking-tighter">
//                 ISO
//               </p>
//               <p className="text-[10px] font-black uppercase tracking-widest opacity-80">
//                 Certified
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* External Modal Integration */}
//       <ConsultationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </section>
//   )
// }

// export default ISOHero
import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import isoVerified from "../../assets/isoVerified.jpg"

const ISOHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-12 pb-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 dark:text-white uppercase tracking-tighter">
              Get ISO Certified <br />
              <span className="text-blue-600">In 24 Working Hours</span>
            </h1>

            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              Secure your business credibility globally. We provide end-to-end
              support for{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                ISO Registration
              </span>{" "}
              and Certification with zero compliance hurdles.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 flex items-center gap-3 group"
              >
                Start Application
                <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              {/* <button className="bg-white dark:bg-slate-900 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-600 transition-all">
                View Standards
              </button> */}
            </div>
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background Glow - Increased opacity for depth */}
            <div className="absolute inset-0 bg-blue-600/30 rounded-[3rem] blur-3xl -rotate-6 scale-95" />

            {/* Main Visual with Image */}
            <div className="relative aspect-square bg-slate-200 dark:bg-slate-800 rounded-[3rem] border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl z-10">
              <img
                src={isoVerified}
                alt="ISO Certification Global Quality"
                className="w-full h-full object-cover opacity-100  transition-all duration-700 hover:scale-110"
              />

              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-20">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                    Global Standards
                  </span>
                  <span className="text-white font-black uppercase tracking-tighter text-lg">
                    Verified Certification
                  </span>
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-blue-600 font-bold">
                    verified
                  </span>
                </div>
              </div>
            </div>

            {/* Floating ISO Tag - Higher Z-Index */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl border-4 border-white dark:border-slate-950 z-30"
            >
              <p className="text-2xl font-black leading-none uppercase tracking-tighter">
                ISO
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80">
                Certified
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"ISO Certification"}
      />
    </section>
  )
}

export default ISOHero
