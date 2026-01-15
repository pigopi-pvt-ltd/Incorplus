import React, { useState } from "react"
import { motion } from "framer-motion"
import SocietyImage from "../../assets/societyregisration.jpg"
// Ensure this path matches your file structure
import ConsultationModal from "../CommonComponents/ConsultationModal"

const SocietyHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative pt-12 pb-16 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8 uppercase tracking-tighter text-balance">
                Society Registration <br />
                <span className="text-blue-600">Made Seamless.</span>
              </h1>

              <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
                A society is the simplest form of a Non Governmental
                Organisation in India and can be registered to operate on state
                level or national level for educational, charitable, religious,
                welfare or for promotion of art, music, culture, etc. In India,
                the registration of a society is done under The Societies
                Registration Act, 1860.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Linked to Modal */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 transform hover:-translate-y-1 active:scale-95"
                >
                  Apply Now
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </button>

                {/* <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform hover:-translate-y-1 active:scale-95">
                  Check Pricing
                </button> */}
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 aspect-square lg:aspect-auto lg:h-[500px]">
                <img
                  alt="Collaborative Group"
                  className="w-full h-full object-cover"
                  src={SocietyImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Society Registration"}
      />
    </>
  )
}

export default SocietyHero
