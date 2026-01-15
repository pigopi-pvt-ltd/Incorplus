// import React from "react"
// import { motion } from "framer-motion"
// import {
//   Zap,
//   Settings2,
//   Users2,
//   ShieldCheck,
//   Handshake,
//   TrendingUp,
// } from "lucide-react"

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: "Easy to Form",
//       description:
//         "The only requirement to start a Partnership Firm in most cases is a Partnership Deed. It's quick and hassle-free.",
//       icon: <Zap size={32} />,
//       color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
//     },
//     {
//       title: "Flexibility",
//       description:
//         "Business activity is flexible. Partners can easily appreciate and react quickly to changing market conditions.",
//       icon: <Settings2 size={32} />,
//       color:
//         "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
//     },
//     {
//       title: "Unlimited Potential",
//       description:
//         "Combined skills and resources of partners allow for greater growth potential compared to solo proprietorships.",
//       icon: <Users2 size={32} />,
//       color: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
//     },
//     {
//       title: "Compliance Advantage",
//       description:
//         "Partnerships enjoy lower compliance burden and simplified tax structures compared to large corporations.",
//       icon: <ShieldCheck size={32} />,
//       color:
//         "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
//     },
//     {
//       title: "Risk Diffusion",
//       description:
//         "Liabilities and operational risks are shared among partners according to their agreed profit-sharing ratios.",
//       icon: <Handshake size={32} />,
//       color:
//         "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
//     },
//     {
//       title: "Continuity",
//       description:
//         "A partnership deed can provide mechanisms for business continuity even if a partner retires or passes away.",
//       icon: <TrendingUp size={32} />,
//       color:
//         "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
//     },
//   ]

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   }

//   return (
//     <section className="py-24 bg-slate-50 dark:bg-slate-950">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">
//             Key Features & Benefits
//           </h2>
//           <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
//             Discover why partnership registration is the right move for your
//             startup. Combined expertise leads to shared success.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{
//                 y: -8,
//                 boxShadow:
//                   "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//               }}
//               className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all duration-300 shadow-sm"
//             >
//               <div
//                 className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[10deg] ${feature.color}`}
//               >
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
//                 {feature.title}
//               </h3>
//               <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default FeaturesSection
import React from "react"
import { motion } from "framer-motion"
import {
  Zap,
  Settings2,
  Users2,
  ShieldCheck,
  Handshake,
  TrendingUp,
} from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      title: "Easy to Form",
      description:
        "The only requirement to start a Partnership Firm in most cases is a Partnership Deed. It's quick and hassle-free.",
      icon: <Zap size={28} />,
      color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Flexibility",
      description:
        "Business activity is flexible. Partners can easily appreciate and react quickly to changing market conditions.",
      icon: <Settings2 size={28} />,
      color:
        "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Unlimited Potential",
      description:
        "Combined skills and resources of partners allow for greater growth potential compared to solo proprietorships.",
      icon: <Users2 size={28} />,
      color: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    },
    {
      title: "Compliance Advantage",
      description:
        "Partnerships enjoy lower compliance burden and simplified tax structures compared to large corporations.",
      icon: <ShieldCheck size={28} />,
      color:
        "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    },
    {
      title: "Risk Diffusion",
      description:
        "Liabilities and operational risks are shared among partners according to their agreed profit-sharing ratios.",
      icon: <Handshake size={28} />,
      color:
        "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Continuity",
      description:
        "A partnership deed can provide mechanisms for business continuity even if a partner retires or passes away.",
      icon: <TrendingUp size={28} />,
      color:
        "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Custom cubic-bezier for a "snap" feel
    },
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header - Animates once */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            Key Features & Benefits
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm lg:text-base">
            Discover why partnership registration is the right move for your
            startup. Professional legal frameworks drive sustainable growth.
          </p>
        </motion.div>

        {/* Features Grid - All children animate once */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Subtle accent hover effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-blue-600 rounded-t-2xl transition-all duration-300" />

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
