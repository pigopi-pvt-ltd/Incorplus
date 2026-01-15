// const FundingStages = () => {
//   const stages = [
//     {
//       title: "Ideation / Pre-Seed",
//       sources: "Bootstrapping, Friends & Family, Business Plan Events",
//       desc: "This the stage where you, the entrepreneur, has an idea and are working on bringing it to life.",
//     },
//     {
//       title: "Validation / Seed",
//       sources:
//         "Incubators, Government Loan Schemes, Angel Investors, Crowdfunding",
//       desc: "Your startup has a prototype ready and you need to validate potential demand (Proof of Concept).",
//     },
//     {
//       title: "Early Traction / Series A",
//       sources: "Venture Capital Funds, Banks/NBFCs, Venture Debt, TReDS",
//       desc: "Products launched. Key indicators like customer base and revenue become important.",
//     },
//     {
//       title: "Scaling / Series B & Above",
//       sources: "Venture Capital, Private Equity / Investment Firms",
//       desc: "Experiencing fast rate of market growth and increasing revenues.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white dark:bg-slate-950">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-10 border-l-4 border-blue-600 pl-4">
//           3. Stages & Sources of Funding
//         </h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {stages.map((stage, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
//             >
//               <h3 className="text-blue-600 font-black uppercase text-sm mb-2">
//                 {stage.title}
//               </h3>
//               <p className="text-slate-900 dark:text-white font-bold text-sm mb-3">
//                 {stage.desc}
//               </p>
//               <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
//                 <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
//                   Common Sources:
//                 </p>
//                 <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
//                   {stage.sources}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FundingStages;
import React from "react";
import { motion } from "framer-motion";

const FundingStages = () => {
  const stages = [
    {
      title: "Ideation / Pre-Seed Stage",
      desc: "This the stage where you, the entrepreneur, has an idea and are working on bringing it to life. At this stage, the amount of funds needed is usually small.",
      sources:
        "Bootstrapping/Self-financing, Friends and Family, Business Plan/Pitching Events",
    },
    {
      title: "Validation / Seed Stage",
      desc: "Your startup has a prototype ready and you need to validate the potential demand. This is called conducting a ‘Proof of Concept (PoC)’, after which comes the market launch.",
      sources:
        "Incubators, Government Loan Schemes, Angel Investors, Crowd funding",
    },
    {
      title: "Early Traction / Series A Stage",
      desc: "Products or services launched. Key indicators like customer base and revenue become important. Funds are raised to further grow user base and expand geographies.",
      sources: "Venture Capital Funds, Banks/NBFCs, Venture Debt Funds, TReDS",
    },
    {
      title: "Scaling / Series B & Above Stage",
      desc: "At this stage, the startup is experiencing fast rate of market growth and increasing revenues.",
      sources:
        "Venture Capital Funds (Large ticket), Private Equity / Investment Firms",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter border-l-4 border-blue-600 pl-4">
            3. Stages of Startups and Sources of Funding
          </h2>
          <p className="mt-4 text-sm text-slate-500 max-w-2xl font-medium">
            The source of funding should typically match the stage of operations
            of the startup. Note that raising funds can easily take over 6
            months to convert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600/50 transition-colors shadow-sm"
            >
              <h3 className="text-blue-600 font-black uppercase text-xs tracking-widest mb-3 italic">
                {stage.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 font-medium">
                {stage.desc}
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-1">
                  Common Sources
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-bold italic">
                  {stage.sources}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FundingStages;
