import React from "react"
import { motion } from "framer-motion"

import IECPage from "../../assets/IECPage.avif"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const IECHero = () => {
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false)
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 bg-white dark:bg-slate-950 transition-colors duration-500">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] bg-blue-50 dark:bg-blue-900/30 text-blue-600 border border-blue-100 dark:border-blue-800 uppercase">
                <span className="material-symbols-outlined text-sm mr-2 font-black">
                  verified
                </span>
                DGFT Authorized Registration
              </span>

              <h1 className="text-5xl  font-black leading-[1.1] text-slate-900 dark:text-white uppercase tracking-tighter">
                Import Export Code <br />
                <span className="text-blue-600">(IEC)</span> Registration
              </h1>

              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-medium">
                Launch your international trade business. Get
                <span className="text-slate-900 dark:text-white font-bold">
                  {" "}
                  lifetime validity{" "}
                </span>
                with zero annual maintenance fees.
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-12">
                {[
                  { icon: "schedule", text: "Quick Process" },
                  { icon: "all_inclusive", text: "Lifetime Validity" },
                  { icon: "history_edu", text: "No Annual Filing" },
                  { icon: "verified_user", text: "DGFT Certified" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600 font-bold text-xl">
                      check_circle
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  Get Started
                  <span className="material-symbols-outlined text-base font-bold">
                    arrow_forward
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-3xl transform -rotate-2" />

              <div className="relative w-full aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* IEC License Image Representation */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  data-alt="Import Export Code license documents and paperwork"
                  style={{
                    backgroundImage: `url(${IECPage})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedPlan={"IEC Code Registration"}
      />
    </>
  )
}

export default IECHero
