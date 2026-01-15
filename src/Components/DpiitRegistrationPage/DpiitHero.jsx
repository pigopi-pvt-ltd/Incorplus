import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Add AnimatePresence

import indianStartup from "../../assets/idea.jpg"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const DpiitHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  return (
    <>
      <section className="relative w-full overflow-hidden pt-12 pb-24 bg-white dark:bg-slate-950">
        {/* Animated Background Blobs - Lower Z-index */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] z-0"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px] z-0"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 w-fit"
              >
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                DPIIT Registration Specialist
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[1.1]"
              >
                Startup India <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Registration
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
              >
                Join the elite group of DPIIT-recognized startups. Unlock tax
                holidays, patent rebates, and easier procurement with our
                expert-led certification process.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="h-14 px-10 rounded-full bg-blue-600 text-white font-bold text-lg shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  Apply Now
                </button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center bg-slate-200"
                  style={{ backgroundImage: `url(${indianStartup})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wrapping the modal in AnimatePresence here is redundant if 
         AnimatePresence is already inside ConsultationModal.js, 
         but ensuring the state pass-through is clean.
      */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"DPIIT Registration"}
        // selectedPlan="DPIIT Registration" // Passes the context to the modal
      />
    </>
  )
}

export default DpiitHero
