import React, { useState } from "react"
import { motion } from "framer-motion"
// npm install lucide-react
import { ArrowRight, ShieldCheck } from "lucide-react"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import PartnershipPageImage from "../../assets/PartnershipPage.avif"

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="relative py-12 overflow-hidden bg-white dark:bg-slate-950">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[11px] font-bold uppercase tracking-wider mb-6"
              >
                <ShieldCheck size={14} />
                Verified Legal Process
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-slate-900 dark:text-white"
              >
                Streamline Your <br />
                <span className="text-blue-600">Partnership</span> Deeds
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base text-slate-500 dark:text-slate-400 mb-8 max-w-lg leading-relaxed"
              >
                Professional drafting and government registration for your
                business. Secure your partnership with legally binding
                documentation today.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpenModal(true)}
                  className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-600/25 flex items-center gap-2 group"
                >
                  Book Consultation
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>

                <div className="flex flex-col border-l border-slate-200 dark:border-slate-800 pl-6">
                  <span className="text-2xl font-bold dark:text-white">
                    ₹ 5,000
                  </span>
                  <span className="text-[10px] uppercase text-slate-400 font-black tracking-widest">
                    Starts At
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl relative overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* Partnership Registration Image Representation */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  data-alt="Partnership registration documents and agreement"
                  style={{
                    backgroundImage: `url(${PartnershipPageImage})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedPlan={"Partnership Registration"}
      />
    </>
  )
}

export default HeroSection
