import React from "react"
import { motion } from "framer-motion"
import {
  Palette,
  Brush,
  Type,
  Ruler,
  Layers,
  PenTool,
  Image,
  Scissors,
} from "lucide-react"

const GraphicDesignTools = () => {
  const designTools = [
    {
      name: "Adobe Photoshop",
      icon: Brush,
      alt: "Adobe Photoshop Icon",
    },
    {
      name: "Illustrator",
      icon: PenTool,
      alt: "Illustrator Icon",
    },
    {
      name: "InDesign",
      icon: Type,
      alt: "InDesign Icon",
    },
    {
      name: "Figma",
      icon: Layers,
      alt: "Figma Icon",
    },
    {
      name: "Canva",
      icon: Palette,
      alt: "Canva Icon",
    },
    {
      name: "CorelDRAW",
      icon: Ruler,
      alt: "CorelDRAW Icon",
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
              Design Tools & Software
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d131b] dark:text-white">
              Professional Design Stack
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {designTools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <tool.icon size={40} className="text-blue-600" />
                <span className="text-sm font-medium text-center text-[#0d131b] dark:text-slate-200">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default GraphicDesignTools
