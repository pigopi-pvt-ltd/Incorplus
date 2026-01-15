// // import React from "react";
// // import { motion } from "framer-motion";

// // const FssaiPlans = () => {
// //   const plans = [
// //     {
// //       title: "Basic Registration",
// //       range: "< ₹12 Lakhs",
// //       desc: "Best for small startups and home-based businesses.",
// //       features: [
// //         "Petty Food Manufacturers",
// //         "Small Retailers & Hawkers",
// //         "Temporary Stall Holders",
// //       ],
// //       buttonText: "Select Basic",
// //       popular: false,
// //     },
// //     {
// //       title: "State License",
// //       range: "₹12L - ₹20 Cr",
// //       desc: "For growing businesses operating within a state.",
// //       features: [
// //         "Medium Sized Manufacturers",
// //         "Transporters & Storage",
// //         "Mid-sized Hotels & Restaurants",
// //         "Branded Food Marketers",
// //       ],
// //       buttonText: "Get State License",
// //       popular: true,
// //     },
// //     {
// //       title: "Central License",
// //       range: "> ₹20 Cr",
// //       desc: "For large enterprises and importers/exporters.",
// //       features: [
// //         "Large Scale Manufacturers",
// //         "Importers & Exporters",
// //         "Central Govt Agencies",
// //       ],
// //       buttonText: "Select Central",
// //       popular: false,
// //     },
// //   ];

// //   return (
// //     <section className="py-16 bg-white dark:bg-[#1e2732]">
// //       <div className="layout-container flex flex-col items-center px-4 md:px-10 lg:px-40">
// //         <div className="layout-content-container flex flex-col max-w-[1280px] w-full">
// //           {/* Header */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="flex flex-col items-center text-center mb-12"
// //           >
// //             <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2">
// //               Choose Your Plan
// //             </span>
// //             <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
// //               Types of FSSAI Licenses
// //             </h2>
// //             <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl text-sm md:text-base">
// //               Based on your annual turnover and production capacity, choose the
// //               license that fits your business needs.
// //             </p>
// //           </motion.div>

// //           {/* Pricing Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
// //             {plans.map((plan, index) => (
// //               <motion.div
// //                 key={plan.title}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //                 className={`flex flex-col rounded-2xl p-8 relative transition-all duration-300 group ${
// //                   plan.popular
// //                     ? "border-2 border-blue-600 bg-white dark:bg-[#1e2732] shadow-2xl shadow-blue-900/10 z-10 md:-translate-y-4"
// //                     : "border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#151c24] hover:shadow-xl"
// //                 }`}
// //               >
// //                 {plan.popular ? (
// //                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
// //                     Most Popular
// //                   </div>
// //                 ) : (
// //                   <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-t-2xl group-hover:bg-blue-600 transition-colors" />
// //                 )}

// //                 <div className="flex flex-col gap-4 mb-6">
// //                   <h3
// //                     className={`text-xl font-bold ${
// //                       plan.popular
// //                         ? "text-blue-600"
// //                         : "text-[#0d131b] dark:text-white"
// //                     }`}
// //                   >
// //                     {plan.title}
// //                   </h3>
// //                   <div className="flex items-baseline gap-1 text-[#0d131b] dark:text-white">
// //                     <span className="text-2xl font-black tracking-tighter">
// //                       {plan.range}
// //                     </span>
// //                     <span className="text-xs font-medium text-slate-500">
// //                       / year
// //                     </span>
// //                   </div>
// //                   <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
// //                     {plan.desc}
// //                   </p>
// //                 </div>

// //                 <div className="flex flex-col gap-3 mb-8 flex-1">
// //                   {plan.features.map((feature) => (
// //                     <div
// //                       key={feature}
// //                       className="flex gap-3 text-[13px] font-medium text-slate-700 dark:text-slate-300 items-start"
// //                     >
// //                       <span
// //                         className={`material-symbols-outlined text-[18px] ${
// //                           plan.popular ? "text-blue-600" : "text-green-500"
// //                         }`}
// //                       >
// //                         check_circle
// //                       </span>
// //                       {feature}
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <button
// //                   className={`w-full flex items-center justify-center rounded-xl h-12 text-sm font-bold transition-all active:scale-95 ${
// //                     plan.popular
// //                       ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700"
// //                       : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-[#0d131b] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700"
// //                   }`}
// //                 >
// //                   {plan.buttonText}
// //                 </button>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FssaiPlans;
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const FssaiPlans = () => {
//   // Set "State License" (index 1) as default active
//   const [activeIndex, setActiveIndex] = useState(1);

//   const plans = [
//     {
//       title: "Basic Registration",
//       range: "< ₹12 Lakhs",
//       desc: "Best for small startups and home-based businesses.",
//       features: [
//         "Petty Food Manufacturers",
//         "Small Retailers & Hawkers",
//         "Temporary Stall Holders",
//       ],
//       buttonText: "Get Basic",
//     },
//     {
//       title: "State License",
//       range: "₹12L - ₹20 Cr",
//       desc: "For growing businesses operating within a state.",
//       features: [
//         "Medium Sized Manufacturers",
//         "Transporters & Storage",
//         "Mid-sized Hotels & Restaurants",
//         "Branded Food Marketers",
//       ],
//       buttonText: "Get State License",
//     },
//     {
//       title: "Central License",
//       range: "> ₹20 Cr",
//       desc: "For large enterprises and importers/exporters.",
//       features: [
//         "Large Scale Manufacturers",
//         "Importers & Exporters",
//         "Central Govt Agencies",
//       ],
//       buttonText: "Get Central License",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white dark:bg-[#1e2732]">
//       <div className="layout-container flex flex-col items-center px-4 md:px-10 lg:px-40">
//         <div className="layout-content-container flex flex-col max-w-[1280px] w-full">
//           {/* Header */}
//           <div className="flex flex-col items-center text-center mb-12">
//             <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2">
//               Choose Your Plan
//             </span>
//             <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
//               Types of FSSAI Licenses
//             </h2>
//           </div>

//           {/* Pricing Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
//             {plans.map((plan, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <motion.div
//                   key={plan.title}
//                   onClick={() => setActiveIndex(index)}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className={`flex flex-col rounded-2xl p-8 relative transition-all duration-500 cursor-pointer group ${
//                     isActive
//                       ? "border-2 border-blue-600 bg-white dark:bg-[#1e2732] shadow-2xl shadow-blue-900/10 z-10 md:-translate-y-4 scale-[1.02]"
//                       : "border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#151c24] opacity-80 hover:opacity-100"
//                   }`}
//                 >
//                   {/* Active Badge */}
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeBadge"
//                       className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg z-20"
//                     >
//                       Selected
//                     </motion.div>
//                   )}

//                   <div className="flex flex-col gap-4 mb-6">
//                     <h3
//                       className={`text-xl font-bold transition-colors ${
//                         isActive
//                           ? "text-blue-600"
//                           : "text-[#0d131b] dark:text-white"
//                       }`}
//                     >
//                       {plan.title}
//                     </h3>
//                     <div className="flex items-baseline gap-1 text-[#0d131b] dark:text-white">
//                       <span className="text-2xl font-black tracking-tighter">
//                         {plan.range}
//                       </span>
//                       <span className="text-xs font-medium text-slate-500">
//                         / year
//                       </span>
//                     </div>
//                     <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
//                       {plan.desc}
//                     </p>
//                   </div>

//                   <div className="flex flex-col gap-3 mb-8 flex-1">
//                     {plan.features.map((feature) => (
//                       <div
//                         key={feature}
//                         className="flex gap-3 text-[13px] font-medium text-slate-700 dark:text-slate-300 items-start"
//                       >
//                         <span
//                           className={`material-symbols-outlined text-[18px] transition-colors ${
//                             isActive ? "text-blue-600" : "text-green-500"
//                           }`}
//                         >
//                           check_circle
//                         </span>
//                         {feature}
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     className={`w-full flex items-center justify-center rounded-xl h-12 text-sm font-bold transition-all ${
//                       isActive
//                         ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
//                         : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-[#0d131b] dark:text-white"
//                     }`}
//                   >
//                     {plan.buttonText}
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FssaiPlans;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "../CommonComponents/ConsultationModal";
// import ConsultationModal from "./ConsultationModal"; // Adjust path as needed

const FssaiPlans = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("");

  const plans = [
    {
      title: "Basic Registration",
      range: "< ₹12 Lakhs",
      desc: "Best for small startups and home-based businesses.",
      features: [
        "Petty Food Manufacturers",
        "Small Retailers & Hawkers",
        "Temporary Stall Holders",
      ],
      buttonText: "Get Basic",
    },
    {
      title: "State License",
      range: "₹12L - ₹20 Cr",
      desc: "For growing businesses operating within a state.",
      features: [
        "Medium Sized Manufacturers",
        "Transporters & Storage",
        "Mid-sized Hotels & Restaurants",
        "Branded Food Marketers",
      ],
      buttonText: "Get State License",
    },
    {
      title: "Central License",
      range: "> ₹20 Cr",
      desc: "For large enterprises and importers/exporters.",
      features: [
        "Large Scale Manufacturers",
        "Importers & Exporters",
        "Central Govt Agencies",
      ],
      buttonText: "Get Central License",
    },
  ];

  const handleOpenModal = (e, planTitle) => {
    e.stopPropagation(); // Prevents card selection logic from firing
    setSelectedPlanName(planTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-white dark:bg-[#1e2732]">
      <div className="layout-container flex flex-col items-center px-4 md:px-10 lg:px-40">
        <div className="layout-content-container flex flex-col max-w-[1280px] w-full">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2">
              Pricing & Plans
            </span>
            <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
              Types of FSSAI Licenses
            </h2>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={plan.title}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col rounded-2xl p-8 relative transition-all duration-500 cursor-pointer group ${
                    isActive
                      ? "border-2 border-blue-600 bg-white dark:bg-[#1e2732] shadow-2xl shadow-blue-900/10 z-10 md:-translate-y-4 scale-[1.02]"
                      : "border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#151c24] opacity-70 hover:opacity-100"
                  }`}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeBadge"
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg z-20 whitespace-nowrap"
                      >
                        Selected Plan
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col gap-4 mb-6">
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-[#0d131b] dark:text-white"
                      }`}
                    >
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-1 text-[#0d131b] dark:text-white">
                      <span className="text-2xl font-black tracking-tighter">
                        {plan.range}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        / year
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 text-[13px] font-medium text-slate-700 dark:text-slate-300 items-start"
                      >
                        <span
                          className={`material-symbols-outlined text-[18px] transition-colors ${
                            isActive ? "text-blue-600" : "text-green-500"
                          }`}
                        >
                          check_circle
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => handleOpenModal(e, plan.title)}
                    className={`w-full flex items-center justify-center rounded-xl h-12 text-sm font-bold transition-all active:scale-95 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700"
                        : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-[#0d131b] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Internal Modal Integration */}
      {isModalOpen && (
        <ConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedPlan={selectedPlanName}
        />
      )}
    </section>
  );
};

export default FssaiPlans;
