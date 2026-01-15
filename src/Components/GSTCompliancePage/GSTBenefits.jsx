import { motion } from "framer-motion"
import { Shield, FileText, TrendingUp, DollarSign } from "lucide-react"

const GSTBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Seamless Flow of ITC",
      description:
        "The tax already paid by the supplier is deducted from the liability to pay taxes. If the tax paid and collected transaction is recorded through filing return by both the parties, the Input Tax Credit can be passed on to the buyer and not otherwise. The registered person cannot claim the input credit if the return is not filed on time.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Simple Form for All Taxes",
      description:
        "Under the GST regime, three different types of taxes are collected – IGST, CGST & SGST. The information about all three taxes paid or collected is required to be recorded in a single form itself. The online filing system is simplified under this regime which and is further proposed to be more simplified through one form of filing for recording all transactions.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Score Higher Compliance Rating",
      description:
        "To monitor the compliance structure, the GST Network has introduced the mechanism of compliance rating. This is where all the registered persons are provided ratings based on their regularity of fulfilling the compliance and payment of taxes. The compliance ratings are publicly available on the website. The regular taxpayer is ranked with higher compliance ratings.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "Avoid Penalty and Interest",
      description:
        "For delay in filing return, the taxpayer is charged with a late fee of ₹ 50 for each day of a delay till the actual date of filing. To avoid such heavy penalties, the return must be filed without any delay. The taxpayers with no tax liability also have to file the returns to avoid the late fee of ₹ 20 for each day of delay. Interest at the rate of 18% p.a. is payable on the outstanding tax liability.",
      gradient: "from-orange-500 to-orange-600",
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
            Benefits of GST Compliance
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4">
            Stay compliant and unlock these key advantages for your business
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>

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
          className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800/30"
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
                verified
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Maintain GST Compliance, Maximize Business Benefits
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Regular GST filing keeps your business in good standing with
              regulatory authorities and allows you to take advantage of all the
              benefits that come with being GST compliant.
            </p>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 pt-6"
            >
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-sm">
                    check_circle
                  </span>
                </div>
                <span className="text-sm font-semibold">ITC Benefits</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-sm">
                    schedule
                  </span>
                </div>
                <span className="text-sm font-semibold">Timely Filing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-600 text-sm">
                    star
                  </span>
                </div>
                <span className="text-sm font-semibold">
                  High Compliance Rating
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GSTBenefits
