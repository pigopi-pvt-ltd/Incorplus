import { motion } from "framer-motion"
import { Shield, Layout, Handshake, Eye, Target } from "lucide-react"

const PVTComplianceBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Risk Reduction",
      subtitle: "Organisational as well as Individual",
      description:
        "Once a company has lived up to the entire compliance requirement it saves itself from lot of legal and financial troubles. By legal troubles we mean the investigation and business interruptions that follows.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Layout className="w-7 h-7" />,
      title: "Crisp and Better Organized Framework",
      subtitle: "Streamlined Operations",
      description:
        "In cases where compliance is done on time, there are always certain filters and reference points which help in getting rid of paraphernalia and make sure the company stuck to what is best suited for the development of its services.",
      color: "green",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: "Better Relationship Between Stakeholders",
      subtitle: "Trust & Credibility",
      description:
        "Any stakeholder or regulator, while doing business with a company, ensures that the business he is stepping into is ethically and morally a well set unit.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "The More the Transparency, the Better the Business",
      subtitle: "Customer Trust",
      description:
        "Compliance ensures that there is transparency in the way a business functions. The customers when provided by a true and honest story, which happens when you complete the compliance on time, about a company, they are lured into it.",
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Helps Realize the Mission of the Company",
      subtitle: "Unified Vision",
      description:
        "Compliance programs are what make sure that everyone in the company is aware of the actual agenda. Because of its legal nature it is like a whip to ensure that everyone is on the same page as far as the mission of the company is concerned.",
      color: "pink",
      gradient: "from-pink-500 to-pink-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
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
            Benefits of Completing Compliance On Time
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mt-6">
            Considering that the needs and burdens of compliance will never go
            away, it is time to embrace them—not as only a cost of doing
            business, but for the many benefits that they bring.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden group"
            >
              {/* Gradient Top Bar */}
              <motion.div
                className={`h-2 bg-gradient-to-r ${benefit.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />

              {/* Card Content */}
              <div className="p-8">
                {/* Number Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + index * 0.05,
                  }}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-lg"
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white mb-6`}
                >
                  {benefit.icon}
                </motion.div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {benefit.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800/30"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4"
            >
              <span className="material-symbols-outlined text-white text-3xl">
                workspace_premium
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Professional Compliance Management
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              It is important for all organizations to be managed efficiently
              and in a professional manner. So it is very important how it is
              controlled and adapted to these rules and regulations.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                It's always better to hire compliance filing experts to take
                care of all the due dates and avoid the last minute hassle and
                government penalties.
              </p>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 pt-6"
            >
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check_circle
                  </span>
                </div>
                <span className="text-sm font-semibold">No Penalties</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-sm">
                    schedule
                  </span>
                </div>
                <span className="text-sm font-semibold">On-Time Filing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-600 text-sm">
                    support_agent
                  </span>
                </div>
                <span className="text-sm font-semibold">Expert Support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PVTComplianceBenefits
