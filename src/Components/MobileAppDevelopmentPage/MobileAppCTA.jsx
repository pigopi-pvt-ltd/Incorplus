import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

const MobileAppCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="relative flex w-full flex-col py-20 bg-background-light dark:bg-background-dark">
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center">
          <div className="max-w-6xl w-full bg-blue-600 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left shadow-2xl overflow-hidden relative">
            {/* Decorative Circles */}
            <div className="absolute -top-20 -left-20 size-60 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-white/10 blur-3xl"></div>
            <div className="flex flex-col gap-4 flex-1 relative z-10">
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
                Ready to Launch Your Mobile App?
              </h2>
              <p className="text-blue-100 text-lg">
                Get a free consultation and quote for your mobile app project.
                Let's build something amazing together.
              </p>
            </div>
            <div className="w-full md:w-auto min-w-[300px] bg-white dark:bg-[#1a2634] p-6 rounded-xl shadow-lg relative z-10">
              <form className="flex flex-col gap-4">
                <h3 className="font-bold text-lg text-[#0d131b] dark:text-white">
                  Get a Quick Quote
                </h3>
                <input
                  className="w-full h-10 px-3 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-blue-600"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="w-full h-10 px-3 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-blue-600"
                  placeholder="Email Address"
                  type="email"
                />
                <select className="w-full h-10 px-3 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-blue-600 text-slate-500">
                  <option>Select Service</option>
                  <option>Mobile App Development</option>
                  <option>iOS App Development</option>
                  <option>Android App Development</option>
                  <option>Cross-Platform App</option>
                </select>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-sm mt-2 transition-colors"
                >
                  Discuss Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Mobile App Development"}
      />
    </>
  )
}

export default MobileAppCTA
