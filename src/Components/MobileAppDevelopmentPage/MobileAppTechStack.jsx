import React from "react"
import { motion } from "framer-motion"

const MobileAppTechStack = () => {
  const mobileTechnologies = [
    // Mobile Frameworks
    {
      name: "React Native",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      alt: "React Native Logo",
    },
    {
      name: "Flutter",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
      alt: "Flutter Logo",
    },
    {
      name: "Swift",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
      alt: "Swift Logo",
    },
    {
      name: "Kotlin",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
      alt: "Kotlin Logo",
    },

    // Backend & API
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      alt: "Node.js Logo",
    },
    {
      name: "Firebase",
      icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      alt: "Firebase Logo",
    },
    // {
    //   name: "AWS",
    //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
    //   alt: "AWS Logo",
    // },
    // {
    //   name: "REST API",
    //   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apiary/apiary-original.svg",
    //   alt: "REST API Logo",
    // },

    // Tools & Others
    {
      name: "Xcode",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg",
      alt: "Xcode Logo",
    },
    {
      name: "Android Studio",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg",
      alt: "Android Studio Logo",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      alt: "Git Logo",
    },
    {
      name: "Figma",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      alt: "Figma Logo",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="w-full bg-slate-50 dark:bg-[#1a2634] py-16 border-y border-slate-200 dark:border-slate-700">
      <div className="px-4 md:px-20 lg:px-40 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col items-center gap-10">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Technologies We Master
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d131b] dark:text-white">
              Mobile App Development Stack
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {mobileTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.alt}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src =
                      "https://via.placeholder.com/40x40/cccccc/666666?text=" +
                      tech.name.charAt(0)
                  }}
                />
                <span className="text-sm font-medium text-center text-[#0d131b] dark:text-slate-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MobileAppTechStack
