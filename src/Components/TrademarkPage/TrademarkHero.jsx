import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import TrademarkPage from "../../assets/TrademarkPage.png"

const TrademarkHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="w-full px-4 py-12 md:py-8 lg:px-40 flex justify-center bg-white dark:bg-[#101822]">
        <div className="max-w-[960px] w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 md:w-1/2"
          >
            <div className="flex flex-col gap-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-fit rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-300 uppercase tracking-wide"
              >
                Intellectual Property Services
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-[#0d131b] dark:text-white">
                Protect Your Brand Identity with Seamless Trademark Registration
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Secure exclusive rights to your logo and brand name across
                India.
                {/* Expert legal filing starting at{" "}
                <span className="font-bold text-[#0d131b] dark:text-white">
                  ₹6,999
                </span> */}
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsModalOpen(true)}
                className="h-12 px-6 rounded-lg bg-blue-600 text-white text-base font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                Get Started
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </motion.button>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-green-500 text-sm">
                check_circle
              </span>
              <span>MCA Registered Agents</span>
              <span className="mx-2 opacity-30">•</span>
              <span className="material-symbols-outlined text-green-500 text-sm">
                check_circle
              </span>
              <span>100% Online Process</span>
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-2xl bg-slate-100 dark:bg-gray-800 overflow-hidden relative group shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)",
            }}
          >
            {/* Your Original Image Container */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-center bg-cover transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: `url(${TrademarkPage})`,
                opacity: 0.9,
              }}
            ></div>

            {/* Floating Status Card with Animation */}
            {/* <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-600/10 p-2 rounded-full text-blue-600">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0d131b] dark:text-white">
                    Legal Protection Active
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="text-xs text-slate-500">
                      Your assets are monitored 24/7
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Trademark Registration"}
      />
    </>
  )
}

export default TrademarkHero
