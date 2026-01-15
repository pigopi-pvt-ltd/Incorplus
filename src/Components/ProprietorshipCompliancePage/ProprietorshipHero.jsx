import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const ProprietorshipHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative bg-white dark:bg-slate-950 pt-12 pb-20 overflow-hidden transition-colors duration-500">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100 dark:border-blue-800/50">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Annual Compliance Package
            </div>

            <h1 className="text-5xl lg:text-6xl font-black mb-8 text-slate-900 dark:text-white uppercase tracking-tighter leading-[1] transition-colors">
              Annual Compliances of <br />
              <span className="text-blue-600">Proprietorship.</span>
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
              Stay legally compliant without the stress. We handle your ITR
              filings, GST regulations, and financial audits with precision.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-blue-600 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 group flex items-center gap-3"
              >
                Get Started
                <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              {/* 
              <button className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:border-blue-600 transition-all">
                View Pricing
              </button> */}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Geometric Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" />

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <img
                alt="Minimalist Workspace"
                className="w-full h-[600px] object-cover transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYH4EWyndurRjNB-4A0jAg21kVVcuTf8RglPZ8qXYdaGz_Sai0J09CXFz59prfWs0EZiYCd74p6Z-TPpBsYLSRClxbuFStsylk4agL6_1txV3SKPQ06JtJNUvKu-_LcxL3GR00PdvBeV8Ro2boXm__k4u5tnSwEzjDocGUAIXAGNHCqE5VvBIDwhUlBU6r3iD20Vedh_MVn6hPA_hjkhpRZ-nyGIwXlXJ4d4rkBwhSLAh63ovp8iHMqpzEAcYgM-iVLph1gnRDvubk"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Proprietorship Compliance"}
      />
    </section>
  )
}

export default ProprietorshipHero
