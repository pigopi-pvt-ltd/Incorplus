import { motion } from "framer-motion"
import { ThumbsUp, Users, TrendingUp } from "lucide-react"

const WhyPVTCompliance = () => {
  const reasons = [
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Improved Public Relations",
      description:
        "Once a company has met all its legal obligations it can actually market it positively on websites or through ads. It can be put in job applications and all other places via which the company is reaching the market. Managing the compliance brings good name to the company.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employee Retention",
      description:
        "There are many compliance issues that deal with the benefit of the employees, some these even talk about protecting the employees. For a company that adheres to these guidelines, it becomes easy to retain the employees as the workforce of the company feels home in the company and strives to work for the betterment of the business and the product.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smooth Operations",
      description:
        "Certain rules help more than they harm. Rules related to discrimination and harassment help create a better working environment for employees which can lead to better productivity. Also better security – financial as well physical – help employees provide more to the company.",
      gradient: "from-orange-500 to-orange-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.2,
            }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4"
          >
            <span className="material-symbols-outlined text-white text-3xl">
              verified
            </span>
          </motion.div>

          <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">
            Why Annual Private Limited Compliance?
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-6">
            3 Main Reasons Why You Need to Stay Compliant
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden group"
            >
              {/* Gradient Top Bar */}
              <motion.div
                className={`h-2 bg-gradient-to-r ${reason.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
                    delay: 0.3 + index * 0.1,
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
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white mb-6`}
                >
                  {reason.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
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
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800/30"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mx-auto mb-4"
            >
              <span className="material-symbols-outlined text-white text-2xl">
                trending_up
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Long-term Benefits
            </h3>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              For a Private Limited company, which anyway is bound by a lot of
              compliance guidelines, it is paramount to manage all that.{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                As in the longer run it showers the company with all the
                benefits that may or may not be visible in the beginning.
              </span>
            </p>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.7,
                  }}
                  className="text-3xl font-bold text-blue-600"
                >
                  100%
                </motion.p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Compliance Rate
                </p>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.8,
                  }}
                  className="text-3xl font-bold text-green-600"
                >
                  24/7
                </motion.p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Expert Support
                </p>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.9,
                  }}
                  className="text-3xl font-bold text-orange-600"
                >
                  1000+
                </motion.p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Happy Clients
                </p>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyPVTCompliance
