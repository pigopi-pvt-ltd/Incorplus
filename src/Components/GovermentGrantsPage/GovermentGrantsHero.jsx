import React, { useState } from "react";
import { motion } from "framer-motion";
import ConsultationModal from "../CommonComponents/ConsultationModal";

const GovernmentGrantsHero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col bg-slate-50 dark:bg-background-dark overflow-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <motion.div
              className="layout-content-container flex flex-col max-w-[960px] flex-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              // Removed once: true here
              viewport={{ amount: 0.2 }}
            >
              <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row items-center">
                  {/* Image Section */}
                  <motion.div
                    variants={imageVariants}
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-lg @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2 order-first @[864px]:order-last"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCo74iFzbNXkXozt7YzUynBk9xZOi_oK9r6agmVTY3_UsxR57IvupcuZtFdG0P4llae0BqWeI4tve74OBS7k96zraurzmRTG6wico_n2hl0uMfbmQUYzZveNvEECVZ9zvkzTA61BEYBKR8aVn3OTOKl4B62tlA0xT2ma7O7_ka__tRqo9ObADhpgWbg5fRtYiyOf9gifpPHv-958uhHMA143vyh01t-7CXT1RX3JmBnhX-r0b9llfIRB20f2oQBGt67KppJ8JhJpGT2')`,
                    }}
                  ></motion.div>

                  {/* Text Section */}
                  <motion.div
                    variants={leftSideVariants}
                    className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center @[864px]:w-1/2"
                  >
                    <div className="flex flex-col gap-4 text-left">
                      <motion.div
                        variants={leftSideVariants}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 w-fit"
                      >
                        <span className="material-symbols-outlined text-primary text-sm">
                          verified
                        </span>
                        <span className="text-primary text-xs font-bold uppercase tracking-wide">
                          Government Approved Schemes
                        </span>
                      </motion.div>

                      <motion.h1
                        variants={leftSideVariants}
                        className="text-[#0d131b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
                      >
                        Unlock Government Funding for Your Startup
                      </motion.h1>

                      <motion.h2
                        variants={leftSideVariants}
                        className="text-[#4c6c9a] dark:text-slate-400 text-sm font-normal leading-relaxed @[480px]:text-lg"
                      >
                        We simplify the application process for Startup India
                        Seed Fund, MSME schemes, and NIDHI-PRAYAS. Expert
                        guidance from eligibility check to final disbursement.
                      </motion.h2>
                    </div>

                    {/* Buttons */}
                    <motion.div
                      variants={leftSideVariants}
                      className="flex gap-4 flex-col @[480px]:flex-row"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setIsModalOpen(true);
                        }}
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em]"
                      >
                        <span className="truncate">Book Consultation</span>
                      </motion.button>
                      {/* 
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-slate-800 border border-[#cfd9e7] dark:border-slate-700 text-[#0d131b] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-base font-bold leading-normal tracking-[0.015em]"
                    >
                      <span className="truncate">View Success Stories</span>
                    </motion.button> */}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default GovernmentGrantsHero;
