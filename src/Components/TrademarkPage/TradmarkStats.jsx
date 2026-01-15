// import React from "react";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect, useRef } from "react";

// const Counter = ({ value, suffix = "" }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
//   const ref = useRef(null);

//   useEffect(() => {
//     const controls = animate(count, parseInt(value), {
//       duration: 2,
//       ease: "easeOut",
//     });
//     return controls.stop;
//   }, [value, count]);

//   return (
//     <motion.p className="text-3xl font-bold text-blue-600">{rounded}</motion.p>
//   );
// };

// const TrademarkStats = () => {
//   const stats = [
//     { number: "500", suffix: "+", label: "Trademarks Registered" },
//     { number: "95", suffix: "%", label: "Success Rate" },
//     { number: "10", suffix: "+", label: "Years Experience" },
//     { number: "24", suffix: "h", label: "Application Filing" },
//   ];

//   return (
//     <section className="w-full px-4 py-8 lg:px-40 flex justify-center bg-slate-50 dark:bg-[#151c24] border-y border-[#e7ecf3] dark:border-gray-800">
//       <div className="max-w-[960px] w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="flex flex-col gap-1 items-center md:items-start p-5 rounded-xl bg-white dark:bg-[#101822] border border-[#cfd9e7] dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
//           >
//             <Counter value={stat.number} suffix={stat.suffix} />
//             <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrademarkStats;
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref); // Detects whenever the element enters the viewport

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to value whenever it comes into view
      const controls = animate(count, parseInt(value), {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    } else {
      // Reset to 0 when it leaves the view so it can re-animate
      count.set(0);
    }
  }, [value, count, isInView]);

  return (
    <motion.p ref={ref} className="text-3xl font-bold text-blue-600">
      {rounded}
    </motion.p>
  );
};

const TrademarkStats = () => {
  const stats = [
    { number: "97", suffix: "%", label: "On Time Delivery" },
    { number: "95", suffix: "%", label: "Success Rate" },
    { number: "1200", suffix: "+", label: "Hours of Research" },
    { number: "24", suffix: "h", label: "Application Filing" },
  ];

  return (
    <section className="w-full px-4 py-8 lg:px-40 flex justify-center bg-slate-50 dark:bg-[#151c24] border-y border-[#e7ecf3] dark:border-gray-800">
      <div className="max-w-[960px] w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            // Removed once: true here
            className="flex flex-col gap-1 items-center md:items-start p-5 rounded-xl bg-white dark:bg-[#101822] border border-[#cfd9e7] dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <Counter value={stat.number} suffix={stat.suffix} />
            <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrademarkStats;
