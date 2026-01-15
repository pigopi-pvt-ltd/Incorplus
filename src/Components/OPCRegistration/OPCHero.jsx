import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import OPCPage from "../../assets/OPCPage.png"

const OPCHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative pt-12 pb-16 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Copywriting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <span className="inline-block py-1 px-3 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-6 border border-blue-100 dark:border-blue-800">
              Expert Business Setup
            </span>

            <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-6 text-slate-900 dark:text-white uppercase tracking-tighter">
              Launch Your <br />
              <span className="text-blue-600">One Person Company</span> Today.
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-md leading-relaxed font-medium">
              Only one person is needed to start an OPC. One person company is
              suitable for small companies where the turnover is not likely to
              cross Rs. 2 Crores, and the maximum amount of capital is limited
              to Rs. 50 Lac.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
              >
                Apply Now
              </button>
            </div>
          </motion.div>

          {/* Right Side: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-2xl transition duration-1000 group-hover:duration-200"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                alt="Entrepreneur working"
                className="w-full h-auto min-h-[400px] object-cover"
                src={OPCPage}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Modal Component */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"OPC Registration"}
      />
    </>
  )
}

export default OPCHero
