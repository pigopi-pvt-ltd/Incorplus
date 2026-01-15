import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import PropImagePage from "../../assets/PropImagePage.png"

const SoleProprietorshipHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative pt-12 pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10 space-y-8"
            >
              {/* Pulsing Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Proprietorship Registration
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] uppercase tracking-normal text-balance">
                Start Your Business <br />
                <span className="text-blue-600">Journey Alone.</span>
              </h1>

              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
                Start your Business as proprietorship simply within one day. All
                you need is MSME (Udyam Registration) & GST Registration to
                begin the proprietorship business. This can be the simplest type
                of business and best to start.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 transform hover:-translate-y-1 active:scale-95"
                >
                  Get Started Now
                  <span className="material-symbols-outlined text-xl font-bold">
                    arrow_forward
                  </span>
                </button>
                {/* <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform hover:-translate-y-1 active:scale-95">
                  View Pricing
                </button> */}
              </div>

              {/* Trusted Users */}
              {/* <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[7, 8, 9].map((imgId) => (
                    <img
                      key={imgId}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                      src={`http://googleusercontent.com/profile/picture/${imgId}`}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                  Trusted by{" "}
                  <span className="text-slate-900 dark:text-white font-black">
                    5,000+
                  </span>{" "}
                  entrepreneurs
                </p>
              </div> */}
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-3xl transform rotate-3" />

              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-700 aspect-square lg:aspect-auto lg:h-[550px]">
                {/* USING YOUR PROVIDED SOURCE HERE */}
                <img
                  alt="Focused Entrepreneur in Workspace"
                  className="w-full h-full object-cover"
                  src={PropImagePage}
                  // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKa4n4qVXLZVO7tluGgxOl1t5Ee4lKropSMfNHYostlGtfIaJIOVbrGx8NQyFA5VJDFJ0XRBgGIKdc3dxkysPmX3BEf7-VKsB-u1IaQbvOkPzF3gGDQrfbj6qqMzShBd_FIZUT6ZtmNC-8j-1nB9jbkDJahO0RU0SCEIrogSGmZYclg6e7rZrI7SkOjp1RspmjiiBZ1XNF1GC84pqhjdjYojwbfzj2hIK1MzEImUHLnZ4afILtOemF8iWBJ1b8L59Hqig-aLMrpL5a"
                />

                {/* Floating Verification Badge */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600">
                      <span className="material-symbols-outlined font-black">
                        verified
                      </span>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-tight">
                        Govt. Verified
                      </h4>
                      <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Official MSME & GST partner
                      </p>
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Proprietorship Registration"}
      />
    </>
  )
}

export default SoleProprietorshipHero
