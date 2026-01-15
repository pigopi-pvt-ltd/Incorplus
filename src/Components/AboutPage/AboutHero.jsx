import React from "react"
import { motion } from "framer-motion"

import indianStartup from "../../assets/about.jpg"

const AboutHero = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="relative pt-8 pb-20 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[100px] opacity-60"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 shadow-sm mb-8"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Our Story
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]"
          >
            Bridging the gap between{" "}
            <span className="text-primary relative inline-block">
              ambition
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 dark:text-blue-900/40 -z-10"
                preserveAspectRatio="none"
                viewBox="0 0 100 20"
              >
                <path
                  d="M0 10 Q 50 20 100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                ></path>
              </svg>
            </span>{" "}
            and reality.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light"
          >
            Incorplus Venture exists to empower visionaries. We provide the
            structural integrity—legal, financial, and digital—that turns
            early-stage chaos into sustainable growth.
          </motion.p>
        </motion.div>

        {/* Feature Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url(${indianStartup})`,
            }}
          ></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2"
            >
              Since 2018
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="text-white text-2xl md:text-3xl font-bold"
            >
              Building the backbone of modern startups.
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
