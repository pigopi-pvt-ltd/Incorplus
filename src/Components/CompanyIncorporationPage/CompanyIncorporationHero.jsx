import React, { useState } from "react"
import { motion } from "framer-motion"
import companyIncorpImage from "../../assets/companyIncorporation.png"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const CompanyIncorporationHero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const imageContainer = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  const badgePop = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1, type: "spring", stiffness: 200, damping: 15 },
    },
  }
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative w-full py-5 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto overflow-hidden">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit"
          >
            <span className="material-symbols-outlined text-primary text-sm">
              verified
            </span>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Trusted by 500+ Startups
            </span>
          </motion.div> */}

            <motion.h1
              variants={fadeUp}
              className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            >
              Launch Your Dream Startup in India
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Seamless Company Incorporation{" "}
              <span className="text-primary font-bold">100 % online</span>. We
              handle end-to-end legal, financial, and digital compliance so you
              can focus on building.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsModalOpen(true)
                }}
                className="h-12 px-8 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold text-base shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                Get Started
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </motion.button>

              {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 px-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              View Packages
            </motion.button> */}
            </motion.div>

            {/* Feature List */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mt-4 text-sm text-slate-500"
            >
              {["100% Online", "Expert CA Support", "No Hidden Fees"].map(
                (text, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-green-500 text-lg">
                      check_circle
                    </span>
                    <span>{text}</span>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageContainer}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 bg-slate-200 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${companyIncorpImage})`,
                }}
              ></div>

              {/* Floating Success Badge */}
              {/* <motion.div
              variants={badgePop}
              className="absolute bottom-6 left-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3 max-w-[240px]"
            >
              <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Success Rate
                </p>
                <p className="text-slate-900 dark:text-white font-bold text-lg">
                  99.8%
                </p>
              </div>
            </motion.div> */}
            </div>
          </motion.div>
        </motion.div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        selectedPlan={"Company Incorporation"}
      />
    </>
  )
}

export default CompanyIncorporationHero
