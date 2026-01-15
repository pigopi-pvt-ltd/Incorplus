import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import Funding from "../../assets/Funding.jpg"

const FundingHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative flex items-center pt-12 pb-16 overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                Indian Startup Ecosystem 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase mb-6">
              Looking For <br />
              <span className="text-blue-600">Funding?</span>
            </h1>

            <p className="text-base text-slate-500 dark:text-slate-400 max-w-md mb-8 leading-relaxed font-medium">
              ‘Funding’ refers to the money required to start and run a
              business. We help Indian entrepreneurs understand why funding is
              needed, types of funding available, and how to raise it
              effectively.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-blue-500/20"
              >
                Get Enquirer Now
              </button>
              {/* <button className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all hover:border-blue-600">
                How It Works
              </button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <img
                src={Funding}
                alt="Indian Tech Startup Office"
                className="w-full h-[400px] object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Funding"}
      />
    </section>
  )
}

export default FundingHero
