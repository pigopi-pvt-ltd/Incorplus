import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import indianFood from "../../assets/indianFood.jpg"

const FassaiHero = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  return (
    <>
      <section className="bg-white dark:bg-[#1e2732] py-10 md:py-5 overflow-hidden">
        <div className="layout-container flex flex-col items-center px-4 md:px-10 lg:px-40">
          <div className="layout-content-container flex flex-col max-w-[1280px] w-full">
            <div className="@container">
              <div className="flex flex-col-reverse gap-8 md:gap-12 md:flex-row items-center">
                {/* Left Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col gap-6 flex-1 text-center md:text-left"
                >
                  <div className="flex flex-col gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 text-xs font-bold uppercase tracking-wider"
                    >
                      <span className="material-symbols-outlined text-sm">
                        verified
                      </span>
                      FSSAI Registration Experts
                    </motion.div>

                    <h1 className="text-[#0d131b] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em]">
                      Secure Your Food Business with a Valid{" "}
                      <span className="text-blue-600">FSSAI License</span>
                    </h1>

                    <h2 className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-[550px]">
                      Mandatory for Restaurants, Cloud Kitchens, and
                      Manufacturers. We handle the paperwork and follow-ups.
                      100% Online & Hassle-free.
                    </h2>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                    <button
                      onClick={() => {
                        setIsConsultationOpen(true)
                      }}
                      className="flex items-center justify-center rounded-lg h-12 px-8 bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95"
                    >
                      Get Licensed Now
                    </button>
                    {/* <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-transparent border border-slate-200 dark:border-slate-700 text-[#0d131b] dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Check Eligibility
                  </button> */}
                  </div>

                  {/* <div className="flex items-center gap-4 mt-2 justify-center md:justify-start text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&q=80&w=150&h=150",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
                      "https://images.unsplash.com/photo-1533108344127-a586d2b02479?auto=format&fit=crop&q=80&w=150&h=150",
                    ].map((url, idx) => (
                      <div
                        key={idx}
                        className="size-8 rounded-full bg-slate-200 border-2 border-white dark:border-[#1e2732] bg-cover bg-center"
                        style={{ backgroundImage: `url('${url}')` }}
                      ></div>
                    ))}
                  </div>
                  <span className="font-medium">
                    Trusted by 500+ Indian food startups
                  </span>
                </div> */}
                </motion.div>

                {/* Right Image Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full flex-1 max-w-[550px]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 to-transparent z-10"></div>

                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${indianFood})`,
                      }}
                    ></div>

                    {/* Floating Status Card */}
                    {/* <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/20 max-w-[180px]"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 rounded-full text-green-600">
                          <span className="material-symbols-outlined text-xl">
                            verified
                          </span>
                        </div>
                        <span className="font-bold text-sm dark:text-white text-slate-900">
                          Compliance
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-green-500"
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-tight">
                        100% Approval Rate
                      </p>
                    </motion.div> */}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false)
        }}
        selectedPlan={"FSSAI Registration"}
      />
    </>
  )
}

export default FassaiHero
