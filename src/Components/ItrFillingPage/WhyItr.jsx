// import React from "react";
// import { motion } from "framer-motion";

// const WhyItr = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const reasons = [
//     {
//       title: "Avoid Penalties",
//       icon: "gavel",
//       desc: "Save money by filing before the due date and avoiding late fees under Section 234F which can go up to ₹5,000.",
//     },
//     {
//       title: "Easy Loan Approval",
//       icon: "account_balance",
//       desc: "ITR receipts are crucial proof of income when applying for business loans, car loans, or credit lines.",
//     },
//     {
//       title: "Visa Processing",
//       icon: "public",
//       desc: "Foreign embassies often require the last 3 years of ITR for visa approvals to US, UK, Canada and Europe.",
//     },
//     {
//       title: "Carry Forward Losses",
//       icon: "trending_up",
//       desc: "Claim tax benefits by carrying forward business losses to future years for set-off against profits.",
//     },
//   ];

//   return (
//     <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row gap-12 items-start">
//           {/* Left Side: Sticky Header */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ amount: 0.5 }}
//             className="md:w-1/3 flex flex-col gap-6 md:sticky md:top-24"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
//               Why Timely ITR Filing Matters
//             </h2>
//             <p className="text-slate-600 dark:text-slate-300 text-lg">
//               Filing your Income Tax Returns on time is not just a legal
//               obligation but a strategic financial move for your business
//               growth.
//             </p>
//             <motion.button
//               whileHover={{ x: 5 }}
//               className="w-fit flex items-center gap-2 text-blue-600 font-bold transition-all"
//             >
//               Learn more about compliance
//               <span className="material-symbols-outlined text-sm">
//                 arrow_forward
//               </span>
//             </motion.button>
//           </motion.div>

//           {/* Right Side: Animated Grid */}

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ amount: 0.2 }}
//             className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
//           >
//             {reasons.map((reason, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover={{
//                   y: -5,
//                   shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//                 }}
//                 className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
//               >
//                 <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
//                   <span className="material-symbols-outlined">
//                     {reason.icon}
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
//                     {reason.title}
//                   </h3>
//                   <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
//                     {reason.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyItr;
import React from "react";
import { motion } from "framer-motion";

const WhyItr = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const reasons = [
    {
      title: "Avoid Penalties",
      icon: "gavel",
      desc: "Save money by filing before the due date and avoiding late fees under Section 234F which can go up to ₹5,000.",
      tint: "bg-blue-500/10",
      text: "text-blue-600",
      border: "hover:border-blue-500/50",
    },
    {
      title: "Easy Loan Approval",
      icon: "account_balance",
      desc: "ITR receipts are crucial proof of income when applying for business loans, car loans, or credit lines.",
      tint: "bg-emerald-500/10",
      text: "text-emerald-600",
      border: "hover:border-emerald-500/50",
    },
    {
      title: "Visa Processing",
      icon: "public",
      desc: "Foreign embassies often require the last 3 years of ITR for visa approvals to US, UK, Canada and Europe.",
      tint: "bg-amber-500/10",
      text: "text-amber-600",
      border: "hover:border-amber-500/50",
    },
    {
      title: "Carry Forward Losses",
      icon: "trending_up",
      desc: "Claim tax benefits by carrying forward business losses to future years for set-off against profits.",
      tint: "bg-rose-500/10",
      text: "text-rose-600",
      border: "hover:border-rose-500/50",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side: Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            className="md:w-1/3 flex flex-col gap-6 md:sticky md:top-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Why Timely ITR Filing Matters
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Filing your Income Tax Returns on time is not just a legal
              obligation but a strategic financial move for your business
              growth.
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              className="w-fit flex items-center gap-2 text-blue-600 font-bold transition-all"
            >
              Check Compliance Calendar
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </motion.button>
          </motion.div>

          {/* Right Side: Animated Color-Coded Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all ${reason.border} hover:shadow-xl`}
              >
                {/* Dynamic Icon Tint */}
                <div
                  className={`size-12 rounded-lg ${reason.tint} flex items-center justify-center ${reason.text} group-hover:scale-110 transition-transform`}
                >
                  <span className="material-symbols-outlined">
                    {reason.icon}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyItr;
