import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import MsmePage from "../../assets/MsmePage.png"
const MsmeHero = () => {
  // Real high-quality images of Indian professionals
  // const entrepreneurs = [
  //   "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100", // Indian female professional
  //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100", // Professional male
  //   "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100", // Professional male 2
  // ]
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <section className="flex justify-center py-8 lg:py-8 px-4 lg:px-10 bg-white dark:bg-[#101822]">
        <div className="flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-1 flex-col gap-6 lg:max-w-[600px]"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-300">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              Government Authorized Process
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0d131b] dark:text-white lg:text-5xl lg:leading-[1.15]">
              Get Udyam Registered in
              <span className="text-blue-600"> 3 Simple Steps</span>
            </h1>

            <p className="text-base font-normal leading-relaxed text-[#4b5563] dark:text-gray-400 lg:text-lg">
              Unlock government schemes, subsidies, and low-interest loans.
              Incorplus handles the red tape so you can focus on building your
              startup.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setIsModalOpen(true)
                }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-blue-600 px-6 text-base font-bold text-white shadow-lg shadow-blue-500/20"
              >
                Start Registration
              </motion.button>
              {/* <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-[#e5e7eb] dark:border-gray-700 bg-transparent px-6 text-base font-bold text-[#0d131b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Check Eligibility
            </button> */}
            </div>

            {/* Social Proof with Indian Faces */}
            {/* <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {entrepreneurs.map((imgUrl, index) => (
                <div
                  key={index}
                  className="size-10 rounded-full border-2 border-white dark:border-gray-800 bg-slate-200 bg-cover bg-center shadow-sm"
                  style={{ backgroundImage: `url('${imgUrl}')` }}
                />
              ))}
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-white dark:border-gray-800 bg-blue-600 text-[10px] font-bold text-white">
                +2k
              </div>
            </div>
            <p className="text-sm font-medium text-[#4b5563] dark:text-gray-400">
              Indian Entrepreneurs trust us
            </p>
          </div> */}
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:h-auto relative"
          >
            <div
              className="relative w-full aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl overflow-hidden group border border-slate-100 dark:border-slate-800"
              style={{
                backgroundImage: `url(${MsmePage})`,
                backgroundColor: "#f1f5f9",
              }}
            >
              {/* Zoom Effect on Hover */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${MsmePage})`,
                }}
              />

              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Floating Status Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 hidden lg:flex flex-col gap-2 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-2xl border border-gray-100 dark:border-gray-700 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0d131b] dark:text-white leading-none">
                    Udyam Registered
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1 font-bold uppercase tracking-tight">
                    Certificate Generated
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        selectedPlan={"MSME Registration"}
      />
    </>
  )
}

export default MsmeHero
