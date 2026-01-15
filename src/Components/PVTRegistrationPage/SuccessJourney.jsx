import React from "react"
import { motion } from "framer-motion"

const SuccessJourney = () => {
  const steps = [
    {
      id: 1,
      title: "Name Availability",
      desc: "Checking for unique and approved proposed names for your company.",
      color: "bg-blue-600",
      shadow: "shadow-blue-500/30",
    },
    {
      id: 2,
      title: "Obtain DSC",
      desc: "Securing Digital Signature Certificates for all directors and partners.",
      color: "bg-blue-600",
      shadow: "shadow-blue-500/30",
    },
    {
      id: 3,
      title: "Draft Documents",
      desc: "Execution and preparation of MOA, AOA, and other legal documents.",
      color: "bg-blue-600",
      shadow: "shadow-blue-500/30",
    },
    {
      id: 4,
      title: "SPICe+ Submission",
      desc: "Official filing of company incorporation forms on the MCA portal.",
      color: "bg-blue-600",
      shadow: "shadow-blue-500/30",
    },
    {
      id: 5,
      title: "Certification",
      desc: "Successful generation of the official Certificate of Incorporation.",
      color: "bg-blue-600",
      shadow: "shadow-blue-500/30",
    },
    {
      id: 6,
      title: "Ready to Launch",
      desc: "Commence operations, open bank accounts, and build your empire.",
      color: "bg-green-500",
      shadow: "shadow-green-500/30",
    },
  ]

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="py-24 bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-black font-display mb-4 tracking-tight">
            6-Step Success Journey
          </h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto">
            Easy registration, different schemes, and no future compliance
            worries.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 relative"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group text-center lg:text-left"
            >
              {/* Step Number with Glow */}
              <div
                className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-2xl font-black mb-6 mx-auto lg:mx-0 shadow-lg ${step.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ring-4 ring-white/5`}
              >
                {step.id}
              </div>

              {/* Text Content */}
              <h5 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {step.title}
              </h5>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Decorative side line for desktop (shows except on last items) */}
              {step.id % 3 !== 0 && (
                <div className="hidden lg:block absolute top-8 left-[80px] w-[calc(100%-40px)] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessJourney
