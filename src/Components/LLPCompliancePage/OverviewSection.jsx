import { motion } from "framer-motion"
import { Lightbulb, Network } from "lucide-react"

const OverviewSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">
            Overview
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Two Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Need of LLP */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover="hover"
              className="flex items-center gap-3 text-blue-600 mb-2"
            >
              <motion.div variants={iconVariants}>
                <Lightbulb className="w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl font-bold font-display tracking-tight">
                Need of LLP
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg"
            >
              When we invest our money, we always think of maximizing benefits
              with minimal risk. Starting a business follows the same logic. An
              LLP offers the combined benefits of a company and a partnership.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg"
            >
              As a company, it provides a{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-slate-900 dark:text-white font-semibold inline-block"
              >
                distinct corporate entity
              </motion.span>
              . As a partnership, it imposes{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-slate-900 dark:text-white font-semibold inline-block"
              >
                fewer compliances
              </motion.span>{" "}
              and lower operational costs.
            </motion.p>
          </motion.div>

          {/* Structure of LLP */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover="hover"
              className="flex items-center gap-3 text-blue-600 mb-2"
            >
              <motion.div variants={iconVariants}>
                <Network className="w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl font-bold font-display tracking-tight">
                Structure of LLP
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg"
            >
              Minimum two individuals are required to form a limited liability
              partnership. At least one must be a{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-slate-900 dark:text-white font-semibold inline-block"
              >
                resident of India
              </motion.span>
              . These individuals are known as Designated Partners and must hold
              a DPIN.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg"
            >
              There is no limit on the maximum number of partners. Crucially,
              one partner is not responsible for the misconduct of others, with
              liability limited to their agreed contribution.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OverviewSection
