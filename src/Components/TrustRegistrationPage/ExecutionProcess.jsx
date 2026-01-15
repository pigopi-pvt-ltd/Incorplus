import React from "react"
import { motion } from "framer-motion"

const executionSteps = [
  {
    id: 1,
    title: "Selection of Name",
    desc: "Ensuring uniqueness and compliance with regulations.",
    borderColor: "border-blue-500",
    textColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Drafting of Deed",
    desc: "Expert legal drafting of the trust objectives.",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-500",
  },
  {
    id: 3,
    title: "Execution of Deed",
    desc: "Signing by the settlor and the witnesses.",
    borderColor: "border-purple-500",
    textColor: "text-purple-500",
  },
  {
    id: 4,
    title: "Registration",
    desc: "Official filing at the local Sub-Registrar's office.",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-500",
  },
  {
    id: 5,
    title: "Bank Account",
    desc: "Opening of operational bank account for the trust.",
    borderColor: "border-emerald-500",
    textColor: "text-white",
    isLast: true,
  },
]

const ExecutionProcess = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-wide"
          >
            Our 5-Step <span className="text-blue-600">Execution Process</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Process Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
          {/* Connector Line - Fixed Placement */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-slate-100 dark:bg-slate-800 z-0" />

          {executionSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 text-center group"
            >
              {/* Step Number Circle */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl border-2 font-black text-xl mb-6 transition-all duration-500 relative z-20 
                ${
                  step.isLast
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20 scale-110"
                    : `bg-white dark:bg-slate-950 ${step.borderColor} ${step.textColor}`
                } group-hover:scale-110 group-hover:shadow-lg`}
              >
                {step.id}
              </div>

              {/* Step Typography */}
              <h5 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                {step.title}
              </h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold leading-relaxed max-w-[150px] mx-auto uppercase">
                {step.desc}
              </p>

              {/* Mobile Vertical Connector */}
              {index !== executionSteps.length - 1 && (
                <div className="md:hidden w-0.5 h-12 bg-slate-100 dark:bg-slate-800 mx-auto my-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExecutionProcess
