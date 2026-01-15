import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import NgoPage from "../../assets/NgoPage.avif"

const Section8Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center py-12 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Copywriting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400 mb-8 border border-blue-600/20">
                Section 8 Company (NGO) Registration
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-slate-900 dark:text-white tracking-tight">
                Empower Your Mission with <br />
                <span className="text-blue-600">Legal Certainty</span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                Start your non-profit journey with India's most trusted legal
                partner. End-to-end registration support for NGOs, Charitable
                Trusts, and Foundations.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  Start Now
                  <span className="material-symbols-outlined text-base font-bold">
                    arrow_forward
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-md"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[2.5rem] blur-2xl opacity-50" />

              <div className="relative w-full aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* NGO/Section 8 Registration Image Representation */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  data-alt="Section 8 company registration documents and paperwork"
                  style={{
                    backgroundImage: `url(${NgoPage})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Section-8 Company (NGO) Registration"}
      />
    </>
  )
}

export default Section8Hero
