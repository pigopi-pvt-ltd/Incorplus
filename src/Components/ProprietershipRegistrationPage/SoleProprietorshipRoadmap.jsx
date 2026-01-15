import React from "react"
import { motion } from "framer-motion"

const steps = [
  {
    id: "01",
    title: "Online Application",
    desc: "Submit basic details & identity proofs online via our secure portal.",
    color: "border-blue-500 text-blue-500 ring-blue-500/20 hover:bg-blue-500",
  },
  {
    id: "02",
    title: "Expert Review",
    desc: "Our legal team verifies all documents for 100% accuracy.",
    color:
      "border-indigo-500 text-indigo-500 ring-indigo-500/20 hover:bg-indigo-500",
  },
  {
    id: "03",
    title: "Govt. Filing",
    desc: "Direct filing of registration with official MSME & GST departments.",
    color:
      "border-purple-500 text-purple-500 ring-purple-500/20 hover:bg-purple-500",
  },
  {
    id: "04",
    title: "Approval & Bank",
    desc: "Receive your certificates and open your business current account.",
    color:
      "border-emerald-500 text-emerald-500 ring-emerald-500/20 hover:bg-emerald-500",
  },
]

const SoleProprietorshipRoadmap = () => {
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
            The Roadmap
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black uppercase tracking-wide"
          >
            The Registration <span className="text-blue-600">Journey</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest"
          >
            Streamlined process from application to operation
          </motion.p>
        </div>

        {/* Roadmap Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-4">
          {/* Animated Connector Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-blue-500/0 via-slate-700 to-emerald-500/0 z-0 origin-left"
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
              <h5 className="text-sm font-black mb-3 uppercase tracking-tight group-hover:text-white transition-colors">
                {step.title}
              </h5>
              <p className="text-slate-500 text-[10px] font-bold uppercase leading-relaxed max-w-[180px] tracking-wide">
                {step.desc}
              </p>

              {/* Mobile Line Connector */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden w-[1px] h-12 bg-gradient-to-b from-slate-700 to-transparent mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoleProprietorshipRoadmap
