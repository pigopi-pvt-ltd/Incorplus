import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import GstPage from "../../assets/GstPage.avif"
const GstHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="layout-container flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
        <div className="w-full max-w-[1200px] px-4 md:px-10 py-12">
          <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center">
            {/* Left Content Side */}
            <motion.div
              className="flex flex-col gap-6 md:w-1/2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible" // Triggers every time it enters the viewport
              viewport={{ amount: 0.3 }} // Re-animates when 30% of the section is visible
            >
              <div className="flex flex-col gap-4">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl text-slate-900 dark:text-white"
                >
                  Seamless GST Registration for Your Startup
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg font-medium text-slate-500 dark:text-slate-400"
                >
                  Fast, Error-free, & 100% Online. We simplify the legalities so
                  you can focus on growing your business.
                </motion.p>
              </div>

              {/* Input Group */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-3 w-full max-w-md"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-blue-600 px-6 text-base font-bold text-white shadow-lg shadow-blue-500/20"
                >
                  Start Registration
                </motion.button>
              </motion.div>

              {/* Feature List */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400"
              >
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-green-500">
                    check_circle
                  </span>
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-green-500">
                    check_circle
                  </span>
                  <span>Dedicated CA</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Side */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }} // Re-animates every time
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${GstPage})`,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        selectedPlan={"GST Registration"}
      />
    </>
  )
}

export default GstHero
