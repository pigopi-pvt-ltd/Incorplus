import React, { useState } from "react";
import { motion } from "framer-motion";
import ConsultationModal from "../CommonComponents/ConsultationModal";

const HomeCtaSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="w-full py-16 px-4 overflow-hidden" id="cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Background Layers */}
          <div className="absolute inset-0 bg-primary-600 dark:bg-primary-900 transition-colors duration-500"></div>

          {/* Animated Glow Blobs */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none"
          />

          {/* Content Layout */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-20 gap-12">
            {/* Text Content */}
            <div className="flex flex-col gap-6 text-left max-w-xl">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
              >
                Ready to build your legacy?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-blue-100 font-light leading-relaxed"
              >
                Schedule a free 30-minute discovery call with our experts. We'll
                identify your needs and chart a path to success.
              </motion.p>
            </div>

            {/* Action Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-4 min-w-[280px]"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                onClick={() => {
                  setIsModalOpen(true);
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-700 hover:bg-slate-50 font-bold text-lg h-16 px-10 rounded-full transition-colors flex items-center justify-center gap-2 group"
              >
                Book Consultation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="material-symbols-outlined transition-transform group-hover:rotate-12"
                >
                  calendar_month
                </motion.span>
              </motion.button>

              <p className="text-sm text-blue-200 text-center opacity-80">
                No commitment required.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HomeCtaSection;
