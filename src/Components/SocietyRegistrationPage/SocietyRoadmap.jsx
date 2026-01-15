import React from "react"
import { motion } from "framer-motion"

const steps = [
  {
    id: "01",
    title: "Selection of Name",
    desc: "Unique name search and validation according to guidelines.",
    color: "border-blue-500 text-blue-500 ring-blue-500/20 hover:bg-blue-500",
  },
  {
    id: "02",
    title: "Drafting MOA",
    desc: "Preparing Memorandum of Association and governing rules.",
    color:
      "border-indigo-500 text-indigo-500 ring-indigo-500/20 hover:bg-indigo-500",
  },
  {
    id: "03",
    title: "Filing Application",
    desc: "Submission of finalized documents to the Registrar.",
    color:
      "border-purple-500 text-purple-500 ring-purple-500/20 hover:bg-purple-500",
  },
  {
    id: "04",
    title: "Verification",
    desc: "Official review of documentation and member details.",
    color: "border-cyan-500 text-cyan-500 ring-cyan-500/20 hover:bg-cyan-500",
  },
  {
    id: "05",
    title: "Certificate",
    desc: "Issuance of the official Society Registration Certificate.",
    color:
      "border-emerald-500 text-emerald-500 ring-emerald-500/20 hover:bg-emerald-500",
  },
]

const SocietyRoadmap = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4"
          >
            Roadmap
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black uppercase tracking-wide"
          >
            The Registration <span className="text-blue-600">Process</span>
          </motion.h3>
        </div>

        {/* Roadmap Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
          {/* Animated Connector Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-blue-500/0 via-slate-700 to-emerald-500/0 z-0 origin-left"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10 text-center flex flex-col items-center group"
            >
              {/* Multi-Color Step Circle */}
              <div
                className={`w-16 h-16 bg-slate-950 border-2 rounded-2xl flex items-center justify-center text-xl font-black mb-8 ring-8 transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:shadow-2xl ${step.color}`}
              >
                {step.id}
              </div>

              {/* Text Content */}
              <h5 className="text-sm font-black mb-3 uppercase tracking-wide group-hover:text-white transition-colors">
                {step.title}
              </h5>
              <p className="text-slate-500 text-[10px] font-bold uppercase leading-relaxed max-w-[140px] tracking-wide">
                {step.desc}
              </p>

              {/* Mobile Line Connector */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-[1px] h-12 bg-gradient-to-b from-slate-700 to-transparent mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocietyRoadmap
