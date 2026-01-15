// import React from "react";
// import { motion } from "framer-motion";

// const MasterySection = () => {
//   // Animation variant for the stat items
//   const itemVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="w-full bg-slate-900 text-white py-10 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           transition={{ staggerChildren: 0.1 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800/50"
//         >
//           {/* Stat 1 */}
//           <motion.div
//             variants={itemVariant}
//             transition={{ duration: 0.6 }}
//             className="text-center px-4"
//           >
//             <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
//               500+
//             </div>
//             <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
//               Ventures Launched
//             </div>
//           </motion.div>

//           {/* Stat 2 */}
//           <motion.div
//             variants={itemVariant}
//             transition={{ duration: 0.6 }}
//             className="text-center px-4"
//           >
//             <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
//               98%
//             </div>
//             <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
//               Compliance Score
//             </div>
//           </motion.div>

//           {/* Stat 3 */}
//           <motion.div
//             variants={itemVariant}
//             transition={{ duration: 0.6 }}
//             className="text-center px-4"
//           >
//             <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
//               $75Cr
//             </div>
//             <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
//               Capital Raised
//             </div>
//           </motion.div>

//           {/* Stat 4 */}
//           <motion.div
//             variants={itemVariant}
//             transition={{ duration: 0.6 }}
//             className="text-center px-4"
//           >
//             <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
//               10+
//             </div>
//             <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
//               Years Mastery
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MasterySection;
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const Counter = ({ value, suffix = "", delay = 0 }) => {
  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // If the value is large (like 500), we jump by 50 to make it look "stepped"
  // Otherwise, we count by 1s for smaller stats like 10+ or 98%
  const stepSize = value >= 500 ? 50 : 1;

  const rounded = useTransform(count, (latest) => {
    return Math.round(latest / stepSize) * stepSize;
  });

  useEffect(() => {
    if (isInView) {
      // Larger values count more slowly (4s) than smaller values (2s)
      const duration = value >= 100 ? 4 : 2;

      const controls = animate(count, value, {
        duration: duration,
        delay: delay + 0.5, // Start counting after the entry animation
        ease: "easeOut",
      });
      return controls.stop;
    } else {
      count.set(0); // Reset when scrolled away so it replays
    }
  }, [isInView, value, count, delay]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const MasterySection = () => {
  // Variants for the staggered "One-by-One" entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each box appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-slate-900 text-white py-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800/50"
        >
          {/* Stat 1 */}
          <motion.div variants={itemVariants} className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              <Counter value={100} suffix="%" delay={0} />
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              On Time Delivery
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={itemVariants} className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              <Counter value={98} suffix="%" delay={0.3} />
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              Client Satisfaction
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div variants={itemVariants} className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              <Counter value={1200} suffix="+" delay={0.6} />
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              Hours of research
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div variants={itemVariants} className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-serif font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              <Counter value={45} suffix="+" delay={0.9} />
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              Quality Checkpoints
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MasterySection;
