import React from "react"
import { motion } from "framer-motion"

const LLPStages = () => {
  const stages = [
    {
      id: 1,
      title: "Order Placement",
      desc: "Place an order with us online.",
      borderColor: "border-rose-500",
      shadow: "shadow-rose-500/20",
    },
    {
      id: 2,
      title: "Document Prep",
      desc: "Submit required documents online.",
      borderColor: "border-orange-500",
      shadow: "shadow-orange-500/20",
    },
    {
      id: 3,
      title: "DSC Application",
      desc: "Application for Digital Signatures.",
      borderColor: "border-amber-500",
      shadow: "shadow-amber-500/20",
    },
    {
      id: 4,
      title: "Name Approval",
      desc: "Checking & Drafting objectives.",
      borderColor: "border-emerald-500",
      shadow: "shadow-emerald-500/20",
    },
    {
      id: 5,
      title: "Filing FiLLiP",
      desc: "Submitting incorporation form.",
      borderColor: "border-indigo-500",
      shadow: "shadow-indigo-500/20",
    },
    {
      id: 6,
      title: "COI Issuance",
      desc: "Receive Certificate & Start!",
      borderColor: "border-purple-500",
      shadow: "shadow-purple-500/20",
    },
  ]

  const stageVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  }

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-black mb-6">
            Six Stages of LLP Registration
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our streamlined process ensures your business is up and running in
            record time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Theme Blue Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-[2px] bg-slate-800 z-0">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              className="h-full bg-blue-600 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-4 relative z-10">
            {stages.map((stage, index) => (
              <div key={stage.id} className="text-center group">
                <motion.div
                  custom={index}
                  variants={stageVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -8 }}
                  className={`
                    w-20 h-20 mx-auto rounded-full flex items-center justify-center font-black text-2xl mb-6 
                    bg-slate-900 text-white
                    border-4 transition-all duration-300 shadow-md
                    ${stage.borderColor} ${stage.shadow}
                  `}
                >
                  {stage.id}
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="font-bold mb-2 text-sm lg:text-base"
                >
                  {stage.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  className="text-xs text-slate-400 leading-relaxed px-2"
                >
                  {stage.desc}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LLPStages
