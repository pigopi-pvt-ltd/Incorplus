import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import office from "../../assets/office2.jpg"

const PVTHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <>
      <section className="relative py-12 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* --- LEFT CONTENT --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="relative z-10"
          >
            {/* Badge: High visibility in dark mode with a glow effect */}
            <motion.span
              variants={itemVariants}
              className="inline-block py-1 px-4 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase mb-6 border border-blue-100 dark:border-blue-500/20"
            >
              Private Limited Company Registration
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-black font-display leading-[1.1] mb-6 text-slate-900 dark:text-white tracking-tight"
            >
              Launch Your{" "}
              <span className="text-blue-600 dark:text-blue-500">Vision</span>{" "}
              <br className="hidden md:block" />
              With Zero Friction.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md leading-relaxed font-medium"
            >
              A Private Limited Company is said to be India’s most famous type
              of corporate entity. It is registered according to Ministry of
              Corporate Affairs’s (MCA) legal and regulatory guidelines.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-blue-500/20 transition-all flex items-center gap-2"
              >
                Get Started
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 px-8 py-4 rounded-xl font-bold text-sm transition-all border border-transparent dark:border-slate-700"
              >
                View Pricing
              </motion.button> */}
            </motion.div>

            {/* Social Proof: High contrast numbers */}
            {/* <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    alt={`Client ${i}`}
                    className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200"
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Client${i}`}
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">
                <span className="text-slate-900 dark:text-white font-black text-sm">
                  1,500+
                </span>
                <span className="ml-1 opacity-80">Startups Registered</span>
              </p>
            </motion.div> */}
          </motion.div>

          {/* --- RIGHT CONTENT (IMAGE) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Subtle Glow behind image for Dark Mode */}
            <div className="absolute -inset-6 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full" />

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <img
                alt="Team Collaboration"
                className="rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 object-cover aspect-[4/3] w-full brightness-100 dark:brightness-90"
                src={office}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Private Limited Company Registration"}
      />
    </>
  )
}

export default PVTHero
