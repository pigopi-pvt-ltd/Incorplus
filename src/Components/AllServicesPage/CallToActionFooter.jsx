// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import ConsultationModal from "../CommonComponents/ConsultationModal";

// // const CallToActionFooter = () => {
// //   // Animation Variants
// //   const containerVariants = {
// //     hidden: { opacity: 0, scale: 0.95 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// //   };

// //   const statVariants = {
// //     hidden: { opacity: 0, scale: 0.5 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: { type: "spring", stiffness: 100, damping: 10 },
// //     },
// //   };
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   return (
// //     <>
// //       <section className="bg-primary py-16 px-4 overflow-hidden">
// //         <motion.div
// //           className="layout-container max-w-[960px] mx-auto text-center"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ amount: 0.3 }}
// //         >
// //           {/* Main Text Content */}
// //           <motion.h2
// //             variants={itemVariants}
// //             className="text-white text-3xl font-black tracking-tight mb-4"
// //           >
// //             Unsure which service you need?
// //           </motion.h2>

// //           <motion.p
// //             variants={itemVariants}
// //             className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
// //           >
// //             Our consultants are here to guide you through the compliance maze.
// //             Book a free 15-minute discovery call today.
// //           </motion.p>

// //           {/* Buttons */}
// //           <motion.div
// //             variants={itemVariants}
// //             className="flex flex-col sm:flex-row gap-4 justify-center"
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => {
// //                 setIsModalOpen(true);
// //               }}
// //               className="px-8 py-3 bg-white text-primary rounded-lg font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
// //             >
// //               Book Free Consultation
// //             </motion.button>

// //             {/* <motion.button
// //               whileHover={{
// //                 scale: 1.05,
// //                 backgroundColor: "rgba(255,255,255,0.1)",
// //               }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-lg font-bold text-base transition-colors"
// //             >
// //               View Pricing
// //             </motion.button> */}
// //           </motion.div>

// //           {/* Stats Section */}
// //           {/* <motion.div
// //             className="mt-12 flex items-center justify-center gap-8 opacity-70"
// //             variants={containerVariants}
// //           >
// //             <motion.div
// //               variants={statVariants}
// //               className="flex flex-col items-center"
// //             >
// //               <span className="text-2xl font-bold text-white">98%</span>
// //               <span className="text-xs text-white uppercase tracking-wider">
// //                 Happy Customers
// //               </span>
// //             </motion.div>

// //             <motion.div
// //               variants={itemVariants}
// //               className="w-px h-8 bg-white/30 hidden sm:block"
// //             ></motion.div>

// //             <motion.div
// //               variants={statVariants}
// //               className="flex flex-col items-center"
// //             >
// //               <span className="text-2xl font-bold text-white">98%</span>
// //               <span className="text-xs text-white uppercase tracking-wider">
// //                 Success
// //               </span>
// //             </motion.div>

// //             <motion.div
// //               variants={itemVariants}
// //               className="w-px h-8 bg-white/30 hidden sm:block"
// //             ></motion.div>

// //             <motion.div
// //               variants={statVariants}
// //               className="flex flex-col items-center"
// //             >
// //               <span className="text-2xl font-bold text-white">1200+</span>
// //               <span className="text-xs text-white uppercase tracking-wider">
// //                 Hours Of Research
// //               </span>
// //             </motion.div> */}
// //           {/* </motion.div> */}
// //         </motion.div>
// //       </section>
// //       <ConsultationModal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //       />
// //     </>
// //   );
// // };

// // export default CallToActionFooter;
// import React, { useState } from "react"
// import { motion } from "framer-motion"
// import ConsultationModal from "../CommonComponents/ConsultationModal"

// const CallToActionFooter = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   // Sticking to repeating animations (removed viewport once: true)
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   return (
//     <>
//       {/* CHANGE: Swapped bg-primary for a theme-adaptive background.
//         Light mode: Deep Black/Navy
//         Dark mode: Pure Black with a subtle white border
//       */}
//       <section className="bg-slate-950 dark:bg-black py-20 px-4 overflow-hidden border-t border-white/5">
//         <motion.div
//           className="max-w-[960px] mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.3 }}
//         >
//           {/* Main Text Content */}
//           <motion.h2
//             variants={itemVariants}
//             className="text-white text-4xl font-black tracking-tighter mb-4 uppercase"
//           >
//             Unsure which service you need?
//           </motion.h2>

//           <motion.p
//             variants={itemVariants}
//             className="text-white/60 text-sm md:text-base mb-10 max-w-xl mx-auto font-medium"
//           >
//             Our consultants are here to guide you through the compliance maze.
//             Book a free 15-minute discovery call today.
//           </motion.p>

//           {/* Buttons: High Contrast Style */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsModalOpen(true)}
//               className="px-10 py-4 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all shadow-xl shadow-white/5"
//             >
//               Book Free Consultation
//             </motion.button>

//             <motion.a
//               href="tel:+91XXXXXXXXXX" // Add your actual contact
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-black text-xs uppercase tracking-widest hover:border-white transition-all"
//             >
//               Contact Support
//             </motion.a>
//           </motion.div>

//           {/* Optional: Subtle Trust Badge */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-10 text-[10px] text-white/30 uppercase font-bold tracking-[0.2em]"
//           >
//             Trusted by 5,000+ Solo Visionaries across India
//           </motion.p>
//         </motion.div>
//       </section>

//       <ConsultationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   )
// }

// export default CallToActionFooter
import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const CallToActionFooter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Animation Variants (Restored your original logic)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <>
      {/* FIXED: Changed bg-primary to bg-black for high contrast.
          This makes the section look sharp in both light and dark mode.
      */}
      <section className="bg-black py-16 px-4 overflow-hidden border-t border-white/10">
        <motion.div
          className="layout-container max-w-[960px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {/* Main Text Content (Restored original sizes) */}
          <motion.h2
            variants={itemVariants}
            className="text-white text-3xl font-black tracking-tight mb-4"
          >
            Unsure which service you need?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            Our consultants are here to guide you through the maze. Book a free
            15-minute discovery call today.
          </motion.p>

          {/* Buttons (Restored original rounded-lg shape and styles) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-white text-black rounded-lg font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Free Consultation
            </motion.button>

            {/* Added a secondary high-contrast button for 'Contact' since pricing was commented out */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-lg font-bold text-base transition-colors hover:bg-white/10"
            >
              Contact Support
            </motion.button> */}
          </motion.div>
        </motion.div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default CallToActionFooter
