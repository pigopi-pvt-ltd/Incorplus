import React, { useState } from "react"
import { motion } from "framer-motion"
import ConsultationModal from "../CommonComponents/ConsultationModal"

import DMImage from "../../assets/DigitalMarketing.avif"

const DigitalMarketingHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="relative flex w-full flex-col overflow-hidden">
        <div className="px-4 md:px-20 lg:px-40 py-12  flex justify-center">
          <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 lg:w-1/2 text-left">
              <motion.h1
                className="text-[#0d131b] dark:text-white text-4xl md:text-5xl  font-black leading-[1.1] tracking-[-0.033em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Amplify Your Brand:
                <span className="text-blue-600">Digital Marketing</span> for
                Growth
              </motion.h1>
              <motion.h2
                className="text-[#4c6c9a] dark:text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-[540px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From SEO to social media, Incorplus Venture crafts data-driven
                digital marketing strategies that increase visibility,
                engagement, and conversions for your business.
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
                {/* <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-[#0d131b] dark:text-white text-base font-medium">
                  View Portfolio
                </button> */}
              </motion.div>
              {/* <motion.div 
                className="flex items-center gap-4 mt-4 text-sm text-[#4c6c9a] dark:text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-[#101822] bg-cover bg-center"
                    data-alt="Portrait of a smiling woman"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlqxNkdIcKiWRauCW1IBk0EgrZcbUWvAM1H1n6OjdpGtbMupOJFkYF_NaQVnBdGYQzx_7iZ5lVl8Atl_0dfDFeinV4Y9TZrA9D9ydD2NnWQ5tcoFqiBVcVj_agIsCRaN8ceKJIu2wVDr7G_cRnsq-p0MHAORwtgLkeCL-VSmLZD6MvHtXbliQ55PNLuBtsp14zFukar7wN3f-QBTRkDAEfuj5U9140gugMQVGgY8Cy0dtqqQuyqSkZ6KtlYXgOQbfphjHrHdIx2hmr')",
                    }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-[#101822] bg-cover bg-center"
                    data-alt="Portrait of a serious man"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBR88futfqM8qKHzgn4zfID_pXWdP3WRskZrZ30r7G5NwY75Jmuc3e5GRlOBmIwAa8cUh_3XvSK8WEmK_TFkhUDwcVZpWzETACjg2umf-THJdHGYG6e5M44ifVZzWxW_5VnhCQvYZGXBxON7VbOT7RNyjxKSAAtu33tXD0XGSkgN7ItxTY2W9eTwNXibymkILK-ihQyO4AUYlXyeaYehF7U9goKkzFi3_SmZ2ZFpIqC3psr7xHKOBBc0hX5j4DFFUQ9CQlzN24gDFju')",
                    }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-[#101822] bg-cover bg-center"
                    data-alt="Portrait of a smiling man"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVRkAQxnMV-_VQD4aApW8bFWT7668vTuuSPH2aKbGxWjD3OOvFYIg2zyAMFm_f2dQLQ8Zai8ErLyYy8N4nDDXO0JEWYlnu-0SsGsMzUzsIxZmqhjpaLo-Oeh0J0jk8wW6rRPHtnTWvd2P8lS9pwNQ8lFKtCoqGGL1vRS1GZGzIPunPY7gy5D30_qDP-gVhEGI6Tsu2qui6K2S_oxKVpxZmgxLxAi_FSZoJpahgntpmYTfwPP7v1KbeYRX08P5q0mI6YIG_u69pald5')",
                    }}
                  ></div>
                </div>
                <p>Trusted by 100+ Indian MSMEs</p>
              </motion.div> */}
            </div>
            <motion.div
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-full aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl relative overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* Digital Marketing Dashboard UI Representation */}
                <div
                  className="absolute inset-0  bg-center bg-no-repeat opacity-90"
                  data-alt="Digital marketing dashboard with analytics charts"
                  style={{
                    backgroundImage: `url(${DMImage})`,
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
        selectedPlan={"Digital Marketing"}
      />
    </>
  )
}

export default DigitalMarketingHero
