import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import PublicBg from "../../assets/PublicLtdPageBg.png"
import PublicPage from "../../assets/PublicLtdPage.png"

const PublicLimitedHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center py-12 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern corporate skyscraper"
            className="w-full h-full object-cover opacity-15 dark:opacity-10 grayscale"
            src={PublicBg}
            // src="https://lh3.googleusercontent.com/aida-public/AB6AXuC30H7_NO7JTcfZoaVQGfdrqjfroeoHEVNmO-lRxxgjnpdMR5aOuLjwLKtZUCVPqp7KyL64vkHKKO_rZGXFg7a8284WOd67T-uauRxhMi7ikaLvQ_TqSeG7WgL3ADOBCWS6LQC6ykbBXZX-V7R6HfJsVmkJIH_9z0cVmW-lpmQZunNEUUzujsB2SnocE1eZDf4N8Ztd6TaW2-zRXChXFRMWzKYt7ibsUAkOoR5bC7FW1GlgO0GIfXxqvhw3cgtWKHhbr7GZbFpJKqeE"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT CONTENT --- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block py-1 px-4 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase mb-6 border border-blue-100 dark:border-blue-500/20"
            >
              Expert Compliance Partner
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-slate-900 dark:text-white tracking-tight"
            >
              Public Limited <br />
              <span className="text-blue-600 dark:text-blue-500">
                Company Registration
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed font-medium"
            >
              A Public Limited Company is incorporated for large capital
              requirements so that it can be raised from the public at large
              through Public Issue of Shares. The minimum requirement is seven
              shareholders and three directors and a registered office.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2"
              >
                Apply Now
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </motion.button>

              {/* <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 font-bold tracking-tight">
                <span className="material-symbols-outlined text-green-500 mr-2 text-xl">
                  verified_user
                </span>
                Trusted by 5,000+ Founders
              </div> */}
            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT (ORIGINAL IMAGE) --- */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 group bg-slate-100 dark:bg-slate-800">
              <img
                alt="Team Board Meeting"
                className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
                src={PublicPage}
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSMLSVb6DV-kCrw6wperEZfqRDlb2r-WPjmZbpL5xHKkVsT_h0eF9BAtjonPxAOXBn-Ij4VnW5C6zD8y22znc8QDI2jQ1ACEOgxE6AV_WXXij02842K5IcfYwXt5wqPXswZbLwirLR_cfmbX7lORnv8IjgVSkV1WU4xXFMFbkZrB2J7pHTE88Hpp8rpiBIGxAFfigrFA0jRMzuJVTaipRvPXFZEQpNazhrUfprvlm-U6XK6cAXWlrFi5MpehSLfGFyCprXcVDM-DD4"
              />
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Decorative Glow */}
            <div className="absolute -z-10 -inset-10 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Modal Component */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Public Limited Company Registration"}
      />
    </>
  )
}

export default PublicLimitedHero
