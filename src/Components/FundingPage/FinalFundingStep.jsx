import { motion, AnimatePresence } from "framer-motion";
const FinalFundingStep = () => {
  const steps = [
    "Assessing Need & Readiness",
    "Pitchdeck Preparation",
    "Investor Targeting",
    "Due Diligence",
    "Finalization",
  ];
  const states = [
    { s: "Karnataka", g: "Idea2PoC (Up to 50L)" },
    { s: "Gujarat", g: "Sustenance & Marketing (10L)" },
    { s: "J&K / Rajasthan", g: "Seed Capital / Monthly Allowance" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Step Process */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 italic text-slate-900 dark:text-white">
            4. Raising Process
          </h2>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-4 border-blue-600"
              >
                <span className="text-xs font-black text-blue-600">
                  0{i + 1}
                </span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* State Policies */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 italic text-slate-900 dark:text-white">
            State Initiatives
          </h2>
          <div className="grid gap-3">
            {states.map((state, i) => (
              <div
                key={i}
                className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl flex justify-between items-center"
              >
                <span className="text-xs font-black uppercase text-slate-500">
                  {state.s}
                </span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  {state.g}
                </span>
              </div>
            ))}
            {/* <div className="mt-4 p-4 bg-blue-600 rounded-xl text-center">
              <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                Ready to list?
              </p>
              <button className="text-white border border-white/30 px-6 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-white hover:text-blue-600 transition-all">
                Explore IPO Readiness
              </button>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalFundingStep;
