import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"
import { useState } from "react"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import opcCompliance from "../../assets/opcCompliance.png"

const OPCComplianceHero = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-b border-slate-100 dark:border-slate-800">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute -top-12 -left-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-12 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-sm font-bold uppercase tracking-wider"
            >
              <Shield className="w-4 h-4" />
              Trusted Compliance Partner
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-display text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]"
            >
              OPC Annual <br />
              <motion.span
                className="text-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Compliances
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              Streamline your One Person Company compliance with expert
              assistance. We handle all MCA filings, annual returns, and legal
              documentation to keep your business compliant and thriving.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.div
                className="flex flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm text-slate-500 font-medium">
                  Starting From
                </span>
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  ₹ 6000{" "}
                  <span className="text-blue-600 font-normal text-lg">
                    | Annually
                  </span>
                </span>
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                }}
                onClick={() => setOpenModal(true)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Image Section */}
          <div className="lg:w-1/2 relative">
            {/* Animated Background Glow */}
            <motion.div
              className="absolute -top-12 -left-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                alt="Professional Business Compliance"
                className="w-full h-[500px] object-cover"
                src={opcCompliance}
              />

              {/* Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"
              />
            </motion.div>

            {/* Floating Status Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bottom-10 -left-6 glass-card p-4 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/30 backdrop-blur-md bg-white/80 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"
                >
                  <CheckCircle className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Status
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="font-bold text-slate-900 dark:text-white"
                  >
                    100% Compliant
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-600/30 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${10 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedPlan={"OPC Compliance"}
      />
    </>
  )
}

export default OPCComplianceHero
