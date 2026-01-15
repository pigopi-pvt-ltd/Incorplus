import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react" // Swapped for cleaner UI, keep material-symbols for the rest
import ConsultationModal from "../CommonComponents/ConsultationModal"

import LLPPage from "../../assets/LLPPage.png"

const LLPHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center pt-10 overflow-hidden bg-white dark:bg-slate-950">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern corporate boardroom meeting"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
            src={LLPPage}
            // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCscZQYBe1HA9hxdLVIIWUz_wKR8CfRq43HQeDAZFyKZt5kK9wvPvs6yDG9KwiUd6Knx_Znpn6WV9eN2hyXbN1GbJ98mS9cGLY5_hWj-4cshkoL2Sx1A0sHdwEgiYXERL3-814yoHu0uyvXLwlG2Itk5BeZvcKPOmK9-_gPk42z-I--Ak1XwNC--SHcgjkbNnoc5zoX98d7oOCV5jWg4ySjZq_nFzaIBt9HQvr0VhAGEVG-D4SWI4EXs5TWJm8ZFS2Du0B6I4h7ZLrP"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent dark:from-slate-950 dark:via-slate-950/95"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            {/* <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold"
          >
            <span className="material-symbols-outlined text-sm">
              verified_user
            </span>
            #1 Rated LLP Registration in India
          </motion.div> */}

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Register Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                LLP Startup
              </span>{" "}
              <br />
              With Ease.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              Start your Limited Liability Partnership with professional
              end-to-end legal support. We handle everything from Name Approval
              to PAN/TAN generation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["2 DSC & DIN", "Name Approval", "LLP Agreement"].map(
                (text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800"
                  >
                    <span className="material-symbols-outlined text-green-500 text-sm">
                      check_circle
                    </span>
                    <span className="text-xs font-semibold">{text}</span>
                  </div>
                )
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl text-base font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group"
              >
                Apply Now
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              {/* <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    alt="User"
                    className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-950"
                    src={`http://googleusercontent.com/profile/picture/${i}`}
                  />
                ))}
                <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-950">
                  10k+
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Trusted by entrepreneurs <br />
                across India
              </p>
            </div> */}
            </motion.div>
          </motion.div>

          {/* Right Side Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative bg-white dark:bg-slate-900 p-3 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                alt="Modern office meeting"
                className="rounded-[1.5rem] w-full h-[380px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVRhLLxpPw2MiD6_qgi4J-lXvEQRaWCBOMxd_pg7tMOQru4hBFTfzXt1_tDbYa28Mzox-SJk3JUv6FIDAILxksxRH64sBE9ZwMyBkH1hPmJsB5tWQN9I_CQDnddq5qhHGtTgvb0omkJZQnQO75qdRQccyCRbBoeDio_sOvEQb4NCcmqlhAZ48p9nqZeXuaRKlpDknozJbcOgwGFyPwdBbX1ukRxFFSOGCu0oVDD-ALyBwv5BicG2a-QZ0haDNh12SDxEWkPKPHzi0t"
              />

              {/* Floating Badge */}
              {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 -left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 dark:border-slate-800"
            >
              <div className="p-2 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-lg">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">
                  Fastest Turnaround
                </p>
                <p className="text-lg font-black dark:text-white">
                  100% Online
                </p>
              </div>
            </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedPlan={"LLP Registration"}
      />
    </>
  )
}

export default LLPHero
