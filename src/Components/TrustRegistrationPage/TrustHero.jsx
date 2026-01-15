import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import TrustPage from "../../assets/TrustPage.avif"

const TrustHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="relative overflow-hidden pt-12 pb-18  lg:pb-32 bg-white dark:bg-slate-950 transition-colors duration-500">
        {/* Background Orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-96 w-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 h-96 w-96 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side: Copywriting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5 space-y-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase border border-blue-600/20">
                Premium Legal Support
              </span>

              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter uppercase text-balance">
                Seamless <br />
                <span className="text-blue-600  font-serif  px-2">
                  Trust Registration
                </span>{" "}
                <br />
                for Your Vision.
              </h1>

              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed">
                Expert guidance for establishing your NGO, charitable
                organization, or family trust in India. End-to-end legal
                compliance handled by specialists.
              </p>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  Get Started
                  <span className="material-symbols-outlined text-base font-bold">
                    arrow_forward
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-2/5 w-full"
            >
              <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl relative overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* Trust Registration Image Representation */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  data-alt="Trust registration documents and legal paperwork"
                  style={{
                    backgroundImage: `url(${TrustPage})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Trust Registration"}
      />
    </>
  )
}

export default TrustHero
