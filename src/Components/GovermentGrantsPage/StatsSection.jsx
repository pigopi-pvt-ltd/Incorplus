// import React from "react";
// import { motion } from "framer-motion";

// const StatsSection = () => {
//   // Container variants for staggered entrance of children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   // Individual card variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div className="relative flex flex-col bg-slate-50 dark:bg-background-dark">
//       <div className="layout-container flex h-full grow flex-col">
//         <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
//           <motion.div
//             className="layout-content-container flex flex-col max-w-[960px] flex-1"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ amount: 0.3 }} // Re-animates every time it's 30% visible
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
//               {/* Success Rate Card */}
//               <motion.div
//                 variants={cardVariants}
//                 whileHover={{ y: -5 }}
//                 className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm border border-[#e7ecf3] dark:border-slate-700 transition-shadow hover:shadow-md"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600">
//                     <span className="material-symbols-outlined">
//                       trending_up
//                     </span>
//                   </div>
//                   <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-medium leading-normal">
//                     Success Rate
//                   </p>
//                 </div>
//                 <p className="text-[#0d131b] dark:text-white tracking-light text-3xl font-bold leading-tight mt-2">
//                   95%
//                 </p>
//               </motion.div>

//               {/* Funds Raised Card */}
//               <motion.div
//                 variants={cardVariants}
//                 whileHover={{ y: -5 }}
//                 className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm border border-[#e7ecf3] dark:border-slate-700 transition-shadow hover:shadow-md"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-primary">
//                     <span className="material-symbols-outlined">
//                       currency_rupee
//                     </span>
//                   </div>
//                   <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-medium leading-normal">
//                     Funds Raised
//                   </p>
//                 </div>
//                 <p className="text-[#0d131b] dark:text-white tracking-light text-3xl font-bold leading-tight mt-2">
//                   ₹20Cr+
//                 </p>
//               </motion.div>

//               {/* Happy Clients Card */}
//               <motion.div
//                 variants={cardVariants}
//                 whileHover={{ y: -5 }}
//                 className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm border border-[#e7ecf3] dark:border-slate-700 transition-shadow hover:shadow-md"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full text-orange-600">
//                     <span className="material-symbols-outlined">
//                       sentiment_satisfied
//                     </span>
//                   </div>
//                   <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-medium leading-normal">
//                     Happy Clients
//                   </p>
//                 </div>
//                 <p className="text-[#0d131b] dark:text-white tracking-light text-3xl font-bold leading-tight mt-2">
//                   500+
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const CountUp = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(
    rounded,
    (latest) => `${prefix}${latest}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    } else {
      count.set(0); // Reset when out of view so it restarts
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{displayText}</motion.span>;
};

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative flex flex-col bg-slate-50 dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <motion.div
            className="layout-content-container flex flex-col max-w-[960px] flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
              {/* Success Rate Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm border border-[#e7ecf3] dark:border-slate-700 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600">
                    <span className="material-symbols-outlined">
                      trending_up
                    </span>
                  </div>
                  <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-medium leading-normal">
                    Success Rate
                  </p>
                </div>
                <p className="text-[#0d131b] dark:text-white tracking-light text-3xl font-bold leading-tight mt-2">
                  <CountUp value={95} suffix="%" />
                </p>
              </motion.div>

              {/* Funds Raised Card */}
              {/* <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm border border-[#e7ecf3] dark:border-slate-700 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-primary">
                    <span className="material-symbols-outlined">
                      currency_rupee
                    </span>
                  </div>
                  <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-medium leading-normal">
                    Team Support
                  </p>
                </div>
                <p className="text-[#0d131b] dark:text-white tracking-light text-3xl font-bold leading-tight mt-2">
                  <CountUp value={100}  suffix="%" />
                </p>
              </motion.div> */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm border border-[#e7ecf3] dark:border-slate-700 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  {/* Updated background to green-100 for a "Service/Support" feel */}
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full text-teal-600 dark:text-teal-400">
                    <span className="material-symbols-outlined">
                      support_agent
                    </span>
                  </div>
                  <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-medium leading-normal">
                    Team Support
                  </p>
                </div>
                <p className="text-[#0d131b] dark:text-white tracking-light text-3xl font-bold leading-tight mt-2">
                  <CountUp value={100} suffix="%" />
                </p>
              </motion.div>
              {/* Happy Clients Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800 shadow-sm border border-[#e7ecf3] dark:border-slate-700 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full text-orange-600">
                    <span className="material-symbols-outlined">
                      sentiment_satisfied
                    </span>
                  </div>
                  <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-medium leading-normal">
                    Satisfied Clients
                  </p>
                </div>
                <p className="text-[#0d131b] dark:text-white tracking-light text-3xl font-bold leading-tight mt-2">
                  <CountUp value={95} suffix="%" />
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
