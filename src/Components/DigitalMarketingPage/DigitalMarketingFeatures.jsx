import React from "react"
import { motion } from "framer-motion"

const DigitalMarketingFeatures = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="relative flex w-full flex-col bg-white dark:bg-[#151f2b] py-16">
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center">
        <div className="max-w-6xl w-full flex flex-col gap-10">
          <motion.div
            className="flex flex-col gap-4 max-w-[720px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
              Why Your Business Needs Digital Marketing
            </h2>
            <p className="text-[#4c6c9a] dark:text-slate-400 text-lg font-normal leading-relaxed">
              In today's digital landscape, a strong online presence is
              essential for reaching customers and growing your business. Our
              strategies deliver measurable results.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col gap-4 rounded-xl border border-[#cfd9e7] dark:border-slate-700 bg-background-light dark:bg-[#1a2634] p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-3xl">
                  trending_up
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d131b] dark:text-white text-xl font-bold">
                  Increased Visibility
                </h3>
                <p className="text-[#4c6c9a] dark:text-slate-400 text-sm leading-relaxed">
                  Reach more customers through targeted SEO, PPC, and social
                  media campaigns that put your brand in front of the right
                  audience.
                </p>
              </div>
            </motion.div>
            {/* Feature 2 */}
            <motion.div
              className="flex flex-col gap-4 rounded-xl border border-[#cfd9e7] dark:border-slate-700 bg-background-light dark:bg-[#1a2634] p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-3xl">
                  analytics
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d131b] dark:text-white text-xl font-bold">
                  Data-Driven Insights
                </h3>
                <p className="text-[#4c6c9a] dark:text-slate-400 text-sm leading-relaxed">
                  Track performance metrics and gain valuable insights to
                  optimize campaigns and maximize ROI for your marketing
                  investments.
                </p>
              </div>
            </motion.div>
            {/* Feature 3 */}
            <motion.div
              className="flex flex-col gap-4 rounded-xl border border-[#cfd9e7] dark:border-slate-700 bg-background-light dark:bg-[#1a2634] p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-3xl">
                  campaign
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d131b] dark:text-white text-xl font-bold">
                  Measurable Results
                </h3>
                <p className="text-[#4c6c9a] dark:text-slate-400 text-sm leading-relaxed">
                  Achieve tangible outcomes with clear KPIs and reporting that
                  show the impact of your marketing efforts on business growth.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketingFeatures
