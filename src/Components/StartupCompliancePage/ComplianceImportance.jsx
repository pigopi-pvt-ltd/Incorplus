import React from "react"
import { motion } from "framer-motion"

const ComplianceImportance = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[1.1] mb-8">
              Compliance <br />
              <span className="text-blue-600">And Its Importance</span>
            </h2>

            {/* Bold Underline Accent */}
            <div className="h-2 w-20 bg-blue-600 rounded-full mb-12" />

            {/* Visual Indicator for Scaling */}
            <div className="hidden lg:block">
              <span className="material-symbols-outlined text-[100px] text-slate-200 dark:text-slate-800 font-thin rotate-12 opacity-50">
                scale
              </span>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative pl-8 border-l-4 border-slate-200 dark:border-slate-800">
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Startups often overlook the importance of compliance due to a
                lack of specialized knowledge. To thrive in the competitive
                Indian market, adhering to governmental rules and regulations is
                not just
                <span className="text-slate-900 dark:text-white font-bold ml-1">
                  mandatory, but a strategic advantage.
                </span>
              </p>
            </div>

            <div className="space-y-6 text-lg text-slate-500 dark:text-slate-500 leading-relaxed font-medium">
              <p>
                Initiatives like{" "}
                <span className="text-blue-600 font-bold">'Startup India'</span>{" "}
                have simplified these processes, yet the complexity grows as
                your business scales. From hiring to expansion, every step is
                governed by the laws of the land.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Benefit 01
                  </span>
                  <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                    Investor Trust
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Benefit 02
                  </span>
                  <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                    Legal Safety
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ComplianceImportance
