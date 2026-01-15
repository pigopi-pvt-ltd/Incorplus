import React from "react";
import { motion } from "framer-motion";

const FundingTypes = () => {
  // Categorizing the broad types mentioned in your data
  const types = [
    {
      id: "01",
      name: "Equity Funding",
      detail:
        "Raising capital by selling shares of the company to investors like Angels and VCs.",
      icon: "pie_chart",
    },
    {
      id: "02",
      name: "Debt Funding",
      detail:
        "Borrowing money from banks or NBFCs to be repaid with interest over time.",
      icon: "account_balance",
    },
    {
      id: "03",
      name: "Grants & Incentives",
      detail:
        "Non-repayable funds provided by the government or institutes for specific startup goals.",
      icon: "redeem",
    },
    {
      id: "04",
      name: "Alternative Funding",
      detail:
        "Crowdfunding, TReDS, and Pitch events where funds are raised via community or trade.",
      icon: "hub",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            2. Types of <span className="text-blue-600">Funding</span>
          </h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-3 italic">
            Choosing the right financial instrument for your business
          </p>
        </motion.div>

        {/* Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {types.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              {/* Animated Accent Background */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-blue-600/5 rounded-full group-hover:bg-blue-600/10 transition-colors" />

              <div className="relative z-10">
                <span className="text-[10px] font-black text-blue-600/40 uppercase mb-4 block">
                  Type {type.id}
                </span>
                <span className="material-symbols-outlined text-blue-600 mb-3">
                  {type.icon}
                </span>
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                  {type.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {type.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingTypes;
