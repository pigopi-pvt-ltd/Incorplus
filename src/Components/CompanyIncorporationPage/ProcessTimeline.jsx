// import React from "react";
// import { motion } from "framer-motion";

// const ProcessTimeline = () => {
//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3, // Delay between each step appearing
//       },
//     },
//   };

//   const stepVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const lineVariants = {
//     hidden: { width: 0 },
//     visible: {
//       width: "100%",
//       transition: { duration: 1.2, ease: "easeInOut", delay: 0.2 },
//     },
//   };

//   const steps = [
//     {
//       title: "1. DSC & DIN",
//       icon: "fingerprint",
//       desc: "We apply for Digital Signature Certificates and Director Identification Numbers for all directors.",
//       timeline: "Day 1-2",
//       active: true,
//     },
//     {
//       title: "2. Name Approval",
//       icon: "badge",
//       desc: "Checking availability and reserving your unique company name through the RUN service.",
//       timeline: "Day 3-4",
//     },
//     {
//       title: "3. Filing SPICe+",
//       icon: "description",
//       desc: "Submission of Incorporation Form, MoA (Memorandum) and AoA (Articles) to the MCA.",
//       timeline: "Day 5-9",
//     },
//     {
//       title: "4. Incorporation",
//       icon: "card_membership",
//       desc: "Receipt of Certificate of Incorporation, PAN, and TAN. Your company is now live!",
//       timeline: "Day 10+",
//     },
//   ];

//   return (
//     <section
//       className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto bg-slate-100 dark:bg-slate-900 overflow-hidden"
//       id="process"
//     >
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ amount: 0.5 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
//           4 Steps to Incorporation
//         </h2>
//         <p className="text-slate-600 dark:text-slate-400">
//           A completely digital process. No physical visits required.
//         </p>
//       </motion.div>

//       {/* Timeline Grid */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ amount: 0.2 }}
//         className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
//       >
//         {/* Connecting Line (Desktop) */}
//         <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700 -z-0">
//           <motion.div variants={lineVariants} className="h-full bg-primary" />
//         </div>

//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             variants={stepVariants}
//             className="relative z-10 flex flex-col items-center text-center"
//           >
//             {/* Step Circle */}
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className={`size-24 rounded-full bg-white dark:bg-slate-800 border-4 ${
//                 step.active
//                   ? "border-primary"
//                   : "border-slate-300 dark:border-slate-600"
//               } flex items-center justify-center mb-6 shadow-lg transition-colors duration-500`}
//             >
//               <span
//                 className={`material-symbols-outlined text-3xl ${
//                   step.active
//                     ? "text-primary"
//                     : "text-slate-600 dark:text-slate-300"
//                 }`}
//               >
//                 {step.icon}
//               </span>
//             </motion.div>

//             {/* Content */}
//             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
//               {step.title}
//             </h3>
//             <p className="text-sm text-slate-600 dark:text-slate-400">
//               {step.desc}
//             </p>

//             {/* Timeline Badge */}
//             <span className="mt-4 text-xs font-bold text-slate-500 dark:text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">
//               {step.timeline}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default ProcessTimeline;
import React from "react";
import { motion } from "framer-motion";

const ProcessTimeline = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.1 },
    },
  };

  const steps = [
    {
      title: "1. DSC & DIN",
      icon: "fingerprint",
      desc: "We apply for Digital Signature Certificates and Director Identification Numbers for all directors.",
      timeline: "Day 1-2",
    },
    {
      title: "2. Name Approval",
      icon: "badge",
      desc: "Checking availability and reserving your unique company name through the RUN service.",
      timeline: "Day 3-4",
    },
    {
      title: "3. Filing SPICe+",
      icon: "description",
      desc: "Submission of Incorporation Form, MoA (Memorandum) and AoA (Articles) to the MCA.",
      timeline: "Day 5-9",
    },
    {
      title: "4. Incorporation",
      icon: "card_membership",
      desc: "Receipt of Certificate of Incorporation, PAN, and TAN. Your company is now live!",
      timeline: "Day 10+",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto bg-slate-100 dark:bg-slate-900 overflow-hidden"
      id="process"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          4 Steps to Incorporation
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          A completely digital process. No physical visits required.
        </p>
      </motion.div>

      {/* Timeline Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
      >
        {/* Connecting Line (Desktop) - Now fully blue */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-700 -z-0">
          <motion.div variants={lineVariants} className="h-full bg-blue-600" />
        </div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={stepVariants}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Step Circle - Forced to Blue-600 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="size-24 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-300 flex items-center justify-center mb-6 shadow-lg"
            >
              <span className="material-symbols-outlined text-3xl text-blue-600">
                {step.icon}
              </span>
            </motion.div>

            {/* Content */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {step.desc}
            </p>

            {/* Timeline Badge */}
            <span className="mt-4 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
              {step.timeline}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProcessTimeline;
