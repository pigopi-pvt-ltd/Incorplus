import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import itrBig from "../../assets/itr_big.jpg"

const ItrFillingHero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <section className="relative w-full py-12 px-6 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content Side */}
            <motion.div
              className="flex-1 flex flex-col gap-6 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              {/* Live Status Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 w-fit mx-auto lg:mx-0"
              >
                <span className="size-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  ITR Filing Season is Live
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
              >
                Expert-Assisted ITR Filing for{" "}
                <span className="text-blue-600">Indian Businesses</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0"
              >
                100% Accurate. 100% Compliant. We provide end-to-end tax filing
                support for Startups, MSMEs, and salaried professionals.
              </motion.p>

              {/* Email Consultation Input */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0 mt-2"
              >
                {/* <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <span className="material-symbols-outlined text-xl">
                    mail
                  </span>
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
                  placeholder="Enter your email"
                  type="email"
                />
              </div> */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="h-12 px-6 rounded-lg bg-blue-600 text-white font-bold shadow-lg transition-all whitespace-nowrap"
                >
                  Get Consultation
                </motion.button>
              </motion.div>

              {/* Trust Markers */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-6 mt-4 opacity-80"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    check_circle
                  </span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    ERI Authorised
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    check_circle
                  </span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Data Encrypted
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Side with Floating Elements */}

            <motion.div
              className="flex-1 w-full max-w-[600px] relative"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 relative group border border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${itrBig})`,
                  }}
                />
              </div>

              {/* Floating Status Card */}
              {/* <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                x: { delay: 0.8 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden sm:block z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    ITR Status
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Successfully Filed
                  </p>
                </div>
              </div>
            </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        selectedPlan={"Income Tax Filing"}
      />
    </>
  )
}

export default ItrFillingHero
