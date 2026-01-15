import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import gdImage from "../../assets/GraphicDesigning.avif"
const GraphicDesignHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="relative flex w-full flex-col overflow-hidden">
        <div className="px-4 md:px-20 lg:px-40 py-12 md:py-20 flex justify-center">
          <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 lg:w-1/2 text-left">
              <motion.h1
                className="text-[#0d131b] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Transform Your Vision:
                <span className="text-blue-600">Graphic Design</span> for Impact
              </motion.h1>
              <motion.h2
                className="text-[#4c6c9a] dark:text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-[540px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Bring your ideas to life with stunning visuals. Incorplus
                Ventures creates compelling graphics that communicate your
                message and engage your audience effectively.
              </motion.h2>
              <motion.div
                className="flex gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-blue-600 hover:bg-blue-700 transition-colors text-slate-50 text-base font-bold"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-full aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl relative overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* Graphic Design Representation */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90"
                  data-alt="Creative graphic design concepts"
                  style={{
                    backgroundImage: `url(${gdImage})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={"Graphic Designing"}
      />
    </>
  )
}

export default GraphicDesignHero
