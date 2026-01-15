import React from "react"
import { motion } from "framer-motion"

const LogoDesignProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="relative flex w-full flex-col bg-white dark:bg-[#151f2b] py-20 overflow-hidden">
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center">
        <div className="max-w-6xl w-full flex flex-col gap-12">
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-bold">
              Our Logo Design Process
            </h2>
            <p className="text-[#4c6c9a] dark:text-slate-400 max-w-2xl">
              A systematic approach to creating distinctive, memorable logos
              that perfectly represent your brand identity.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>

            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center text-center gap-4 relative z-10"
              variants={itemVariants}
              whileInView={{ y: [30, 0], opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="size-24 rounded-full bg-white dark:bg-[#1a2634] border-4 border-blue-500 flex items-center justify-center text-blue-600 shadow-sm">
                <span className="material-symbols-outlined text-4xl">chat</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                1. Discovery
              </h3>
              <p className="text-sm text-[#4c6c9a] dark:text-slate-400">
                Understand your brand, values, target audience, and design
                preferences.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center text-center gap-4 relative z-10"
              variants={itemVariants}
              whileInView={{ y: [30, 0], opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <div className="size-24 rounded-full bg-white dark:bg-[#1a2634] border-4 border-green-500 flex items-center justify-center text-green-600 shadow-sm">
                <span className="material-symbols-outlined text-4xl">draw</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                2. Concept
              </h3>
              <p className="text-sm text-[#4c6c9a] dark:text-slate-400">
                Create initial sketches and concepts based on your brand
                identity.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center text-center gap-4 relative z-10"
              variants={itemVariants}
              whileInView={{ y: [30, 0], opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="size-24 rounded-full bg-white dark:bg-[#1a2634] border-4 border-purple-500 flex items-center justify-center text-purple-600 shadow-sm">
                <span className="material-symbols-outlined text-4xl">
                  design_services
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                3. Creation
              </h3>
              <p className="text-sm text-[#4c6c9a] dark:text-slate-400">
                Develop detailed logo designs with typography and color schemes.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="flex flex-col items-center text-center gap-4 relative z-10"
              variants={itemVariants}
              whileInView={{ y: [30, 0], opacity: 1 }}
              initial={{ y: 30, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <div className="size-24 rounded-full bg-white dark:bg-[#1a2634] border-4 border-orange-500 flex items-center justify-center text-orange-600 shadow-sm">
                <span className="material-symbols-outlined text-4xl">
                  check_circle
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0d131b] dark:text-white">
                4. Delivery
              </h3>
              <p className="text-sm text-[#4c6c9a] dark:text-slate-400">
                Deliver final logo files in multiple formats and provide
                guidance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoDesignProcess
