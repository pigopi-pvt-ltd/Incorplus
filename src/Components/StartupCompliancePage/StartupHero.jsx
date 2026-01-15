import StartupCompliancePage from "../../assets/StartupCompliancePage.png"
import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const StartupHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-12 pb-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] -z-10 translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                Trusted Compliance Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-[76px] font-black leading-[1] text-slate-900 dark:text-white uppercase tracking-tighter">
              Compliances <br />
              For Your <span className="text-blue-600">Startup</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              Comprehensive legal and regulatory frameworks designed for the
              modern Indian entrepreneur. Starting from{" "}
              <span className="text-slate-900 dark:text-white font-black underline decoration-blue-600 decoration-4 underline-offset-4">
                ₹ 2,999
              </span>
              .
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-blue-500/25 hover:bg-blue-700 transition-all flex items-center gap-3 group"
              >
                Get Started
                <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              {/* <button className="px-10 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:border-blue-600 transition-all">
                View Details
              </button> */}
            </div>
          </motion.div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Background for Image */}
            <div className="absolute inset-0 bg-blue-600/10 rounded-[2.5rem] -rotate-3 scale-105 blur-sm" />

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 z-10">
              <img
                alt="Modern organized office desk"
                className="w-full h-auto object-cover aspect-[4/3]  transition-all duration-700"
                src={StartupCompliancePage}
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuD559RFWxyjjZRD8toEDVLREF3yjYttBgKaeVtnq2CknkwF-Bv66V6Kx5pc_QIjrQzokYtrYUzN4ko-4HfbcKCBObqJPkZsSjDc93_zfiFPQi7wQnmHcsxmcW3McWSnaP0BKJdohxzELjwe9QUVRPbBa_65JArKN9bzcN6VOUErQ8dfzFh0CYDh7z8wRIQLxlio7A0ukApl3AZKpn4-YWGbylQ7HRInlhSQB01Q-h-wRHNIGz1DkU9ZYP-i-CSwLORC_FrihgYjDHBr"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* External Modal Integration */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Startup Compliance"}
      />
    </section>
  )
}

export default StartupHero
