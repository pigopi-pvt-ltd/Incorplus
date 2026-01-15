// // // // // // import React from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import { motion } from "framer-motion";

// // // // // // // Create a motion-enhanced Link component to prevent page reloads
// // // // // // const MotionLink = motion(Link);

// // // // // // const services = [
// // // // // //   {
// // // // // //     title: "Company Incorporation",
// // // // // //     desc: "Seamless registration for Pvt Ltd, LLP, and OPC structures.",
// // // // // //     icon: "domain",
// // // // // //     color: "blue",
// // // // // //     path: "/services/company-incorporation",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Startup India Certificate",
// // // // // //     desc: "Get recognized by DPIIT to avail tax benefits and easier compliance.",
// // // // // //     icon: "workspace_premium",
// // // // // //     color: "orange",
// // // // // //     path: "/services/startup-india",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "MSME Registration",
// // // // // //     desc: "Unlock government subsidies, priority lending, and protection.",
// // // // // //     icon: "storefront",
// // // // // //     color: "indigo",
// // // // // //     path: "/services/msme-registration",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "GST Registration",
// // // // // //     desc: "Hassle-free tax registration and monthly filing support.",
// // // // // //     icon: "percent",
// // // // // //     color: "cyan",
// // // // // //     path: "/services/gst-registration",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Trademark Registration",
// // // // // //     desc: "Protect your brand identity and intellectual property assets.",
// // // // // //     icon: "copyright",
// // // // // //     color: "purple",
// // // // // //     path: "/services/trademark-registration",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "FSSAI Certificate",
// // // // // //     desc: "Mandatory licensing and compliance for all food businesses.",
// // // // // //     icon: "restaurant",
// // // // // //     color: "teal",
// // // // // //     path: "/services/fssai-certificate",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "ITR Filing",
// // // // // //     desc: "Accurate income tax returns for businesses and individuals.",
// // // // // //     icon: "description",
// // // // // //     color: "sky",
// // // // // //     path: "/services/itr-filing",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Government Grants",
// // // // // //     desc: "Navigate complex schemes to secure non-dilutive capital.",
// // // // // //     icon: "assured_workload",
// // // // // //     color: "emerald",
// // // // // //     path: "/services/government-grants",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Seed Funding",
// // // // // //     desc: "Connect with our network of angels and VCs to raise capital.",
// // // // // //     icon: "payments",
// // // // // //     color: "green",
// // // // // //     path: "/services/seed-funding",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "MSME Loan",
// // // // // //     desc: "Fast-track processing for collateral-free business loans.",
// // // // // //     icon: "credit_score",
// // // // // //     color: "lime",
// // // // // //     path: "/services/msme-loan",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Website Development",
// // // // // //     desc: "High-performance, custom websites to establish your digital brand.",
// // // // // //     icon: "laptop_chromebook",
// // // // // //     color: "pink",
// // // // // //     path: "/services/website-development",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Virtual CFO",
// // // // // //     desc: "Strategic financial planning, reporting, and cash-flow management.",
// // // // // //     icon: "pie_chart",
// // // // // //     color: "indigo",
// // // // // //     path: "/services/virtual-cfo",
// // // // // //   },
// // // // // // ];

// // // // // // const HomeServices = () => {
// // // // // //   // Animation for the grid container
// // // // // //   const containerVariants = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       transition: {
// // // // // //         staggerChildren: 0.1, // Cards appear one by one
// // // // // //       },
// // // // // //     },
// // // // // //   };

// // // // // //   // Animation for individual cards
// // // // // //   const cardVariants = {
// // // // // //     hidden: { opacity: 0, y: 30 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       y: 0,
// // // // // //       transition: { duration: 0.5, ease: "easeOut" },
// // // // // //     },
// // // // // //   };

// // // // // //   return (
// // // // // //     <section
// // // // // //       className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
// // // // // //       id="services"
// // // // // //     >
// // // // // //       {/* Header Content: Sliding from Right */}
// // // // // //       <div className="flex flex-col items-center text-center gap-4 mb-16">
// // // // // //         <motion.span
// // // // // //           initial={{ opacity: 0, x: 50 }}
// // // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // // //           transition={{ duration: 0.6 }}
// // // // // //           className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full"
// // // // // //         >
// // // // // //           Comprehensive Suite
// // // // // //         </motion.span>

// // // // // //         <motion.h2
// // // // // //           initial={{ opacity: 0, x: 80 }}
// // // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // // //           transition={{ duration: 0.8, delay: 0.1 }}
// // // // // //           className="text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white max-w-3xl"
// // // // // //         >
// // // // // //           Everything you need to build &amp; scale
// // // // // //         </motion.h2>

// // // // // //         <motion.p
// // // // // //           initial={{ opacity: 0, x: 50 }}
// // // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //           className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light"
// // // // // //         >
// // // // // //           Navigate the complexities of business with our end-to-end services.
// // // // // //           From inception to expansion, we have you covered.
// // // // // //         </motion.p>
// // // // // //       </div>

// // // // // //       {/* Services Grid */}
// // // // // //       <motion.div
// // // // // //         variants={containerVariants}
// // // // // //         initial="hidden"
// // // // // //         whileInView="visible"
// // // // // //         viewport={{ once: false, amount: 0.1 }}
// // // // // //         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
// // // // // //       >
// // // // // //         {services.map((service, index) => (
// // // // // //           <MotionLink
// // // // // //             key={index}
// // // // // //             to={service.path}
// // // // // //             variants={cardVariants}
// // // // // //             className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
// // // // // //           >
// // // // // //             <div className="flex items-start justify-between mb-4">
// // // // // //               {/* Dynamic Icon Container */}
// // // // // //               <div
// // // // // //                 className={`size-12 rounded-xl bg-${service.color}-50 dark:bg-${service.color}-900/30 text-${service.color}-600 dark:text-${service.color}-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-${service.color}-600 group-hover:text-white transition-all duration-300`}
// // // // // //               >
// // // // // //                 <span className="material-symbols-outlined text-2xl">
// // // // // //                   {service.icon}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //               <span className="material-symbols-outlined text-slate-300 group-hover:text-primary-600 transition-colors">
// // // // // //                 arrow_outward
// // // // // //               </span>
// // // // // //             </div>

// // // // // //             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
// // // // // //               {service.title}
// // // // // //             </h3>

// // // // // //             <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
// // // // // //               {service.desc}
// // // // // //             </p>
// // // // // //           </MotionLink>
// // // // // //         ))}
// // // // // //       </motion.div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default HomeServices;

// // // // // // import React from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import { motion } from "framer-motion";

// // // // // // const MotionLink = motion(Link);

// // // // // // // Mapping object to ensure Tailwind picks up these classes
// // // // // // const colorMap = {
// // // // // //   blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600",
// // // // // //   orange:
// // // // // //     "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600",
// // // // // //   indigo:
// // // // // //     "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600",
// // // // // //   cyan: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600",
// // // // // //   purple:
// // // // // //     "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600",
// // // // // //   teal: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600",
// // // // // //   sky: "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 group-hover:bg-sky-600",
// // // // // //   emerald:
// // // // // //     "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600",
// // // // // //   green:
// // // // // //     "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600",
// // // // // //   lime: "bg-lime-50 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 group-hover:bg-lime-600",
// // // // // //   pink: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600",
// // // // // // };

// // // // // // const services = [
// // // // // //   {
// // // // // //     title: "Company Incorporation",
// // // // // //     desc: "Seamless registration for Pvt Ltd, LLP, and OPC structures.",
// // // // // //     icon: "domain",
// // // // // //     color: "blue",
// // // // // //     path: "/services/company-incorporation",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Startup India Certificate",
// // // // // //     desc: "Get recognized by DPIIT to avail tax benefits.",
// // // // // //     icon: "workspace_premium",
// // // // // //     color: "orange",
// // // // // //     path: "/services/startup-india",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "MSME Registration",
// // // // // //     desc: "Unlock government subsidies and priority lending.",
// // // // // //     icon: "storefront",
// // // // // //     color: "indigo",
// // // // // //     path: "/services/msme-registration",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "GST Registration",
// // // // // //     desc: "Hassle-free tax registration and filing support.",
// // // // // //     icon: "percent",
// // // // // //     color: "cyan",
// // // // // //     path: "/services/gst-registration",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Trademark Registration",
// // // // // //     desc: "Protect your brand identity and IP assets.",
// // // // // //     icon: "copyright",
// // // // // //     color: "purple",
// // // // // //     path: "/services/trademark-registration",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "FSSAI Certificate",
// // // // // //     desc: "Mandatory licensing for all food businesses.",
// // // // // //     icon: "restaurant",
// // // // // //     color: "teal",
// // // // // //     path: "/services/fssai-certificate",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "ITR Filing",
// // // // // //     desc: "Accurate income tax returns for all entities.",
// // // // // //     icon: "description",
// // // // // //     color: "sky",
// // // // // //     path: "/services/itr-filing",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Government Grants",
// // // // // //     desc: "Secure non-dilutive capital via Govt schemes.",
// // // // // //     icon: "assured_workload",
// // // // // //     color: "emerald",
// // // // // //     path: "/services/government-grants",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Seed Funding",
// // // // // //     desc: "Connect with angels and VCs to raise capital.",
// // // // // //     icon: "payments",
// // // // // //     color: "green",
// // // // // //     path: "/services/seed-funding",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "MSME Loan",
// // // // // //     desc: "Fast-track collateral-free business loans.",
// // // // // //     icon: "credit_score",
// // // // // //     color: "lime",
// // // // // //     path: "/services/msme-loan",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Website Development",
// // // // // //     desc: "High-performance websites for your digital brand.",
// // // // // //     icon: "laptop_chromebook",
// // // // // //     color: "pink",
// // // // // //     path: "/services/website-development",
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Virtual CFO",
// // // // // //     desc: "Strategic financial planning and cash-flow.",
// // // // // //     icon: "pie_chart",
// // // // // //     color: "indigo",
// // // // // //     path: "/services/virtual-cfo",
// // // // // //   },
// // // // // // ];

// // // // // // const HomeServices = () => {
// // // // // //   const containerVariants = {
// // // // // //     hidden: { opacity: 0 },
// // // // // //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // // // //   };

// // // // // //   const cardVariants = {
// // // // // //     hidden: { opacity: 0, y: 30 },
// // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// // // // // //   };

// // // // // //   return (
// // // // // //     <section
// // // // // //       className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
// // // // // //       id="services"
// // // // // //     >
// // // // // //       <div className="flex flex-col items-center text-center gap-4 mb-16">
// // // // // //         <motion.span
// // // // // //           initial={{ opacity: 0, x: 50 }}
// // // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // // //           transition={{ duration: 0.6 }}
// // // // // //           className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full"
// // // // // //         >
// // // // // //           Comprehensive Suite
// // // // // //         </motion.span>
// // // // // //         <motion.h2
// // // // // //           initial={{ opacity: 0, x: 80 }}
// // // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // // //           transition={{ duration: 0.8, delay: 0.1 }}
// // // // // //           className="text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white max-w-3xl"
// // // // // //         >
// // // // // //           Everything you need to build & scale
// // // // // //         </motion.h2>
// // // // // //         <motion.p
// // // // // //           initial={{ opacity: 0, x: 50 }}
// // // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //           className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light"
// // // // // //         >
// // // // // //           Navigate the complexities of business with our end-to-end services.
// // // // // //         </motion.p>
// // // // // //       </div>

// // // // // //       <motion.div
// // // // // //         variants={containerVariants}
// // // // // //         initial="hidden"
// // // // // //         whileInView="visible"
// // // // // //         viewport={{ once: false, amount: 0.1 }}
// // // // // //         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
// // // // // //       >
// // // // // //         {services.map((service, index) => (
// // // // // //           <MotionLink
// // // // // //             key={index}
// // // // // //             to={service.path}
// // // // // //             variants={cardVariants}
// // // // // //             className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
// // // // // //           >
// // // // // //             <div className="flex items-start justify-between mb-4">
// // // // // //               {/* Using the colorMap for full class names */}
// // // // // //               <div
// // // // // //                 className={`size-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300 ${
// // // // // //                   colorMap[service.color]
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <span className="material-symbols-outlined text-2xl">
// // // // // //                   {service.icon}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //               <span className="material-symbols-outlined text-slate-300 group-hover:text-primary-600 transition-colors">
// // // // // //                 arrow_outward
// // // // // //               </span>
// // // // // //             </div>
// // // // // //             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
// // // // // //               {service.title}
// // // // // //             </h3>
// // // // // //             <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
// // // // // //               {service.desc}
// // // // // //             </p>
// // // // // //           </MotionLink>
// // // // // //         ))}
// // // // // //       </motion.div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default HomeServices;

// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import { motion } from "framer-motion";

// // // // // const MotionLink = motion(Link);

// // // // // const colorMap = {
// // // // //   blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600",
// // // // //   orange:
// // // // //     "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600",
// // // // //   indigo:
// // // // //     "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600",
// // // // //   cyan: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600",
// // // // //   purple:
// // // // //     "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600",
// // // // //   teal: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600",
// // // // //   sky: "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 group-hover:bg-sky-600",
// // // // //   emerald:
// // // // //     "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600",
// // // // //   green:
// // // // //     "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600",
// // // // //   lime: "bg-lime-50 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 group-hover:bg-lime-600",
// // // // //   pink: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600",
// // // // // };

// // // // // const services = [
// // // // //   {
// // // // //     title: "Company Incorporation",
// // // // //     desc: "Seamless registration for Pvt Ltd, LLP, and OPC structures.",
// // // // //     icon: "domain",
// // // // //     color: "blue",
// // // // //     path: "/services/company-incorporation",
// // // // //   },
// // // // //   {
// // // // //     title: "Startup India Certificate",
// // // // //     desc: "Get recognized by DPIIT to avail tax benefits.",
// // // // //     icon: "workspace_premium",
// // // // //     color: "orange",
// // // // //     path: "/services/startup-india",
// // // // //   },
// // // // //   {
// // // // //     title: "MSME Registration",
// // // // //     desc: "Unlock government subsidies and priority lending.",
// // // // //     icon: "storefront",
// // // // //     color: "indigo",
// // // // //     path: "/services/msme-registration",
// // // // //   },
// // // // //   {
// // // // //     title: "GST Registration",
// // // // //     desc: "Hassle-free tax registration and filing support.",
// // // // //     icon: "percent",
// // // // //     color: "cyan",
// // // // //     path: "/services/gst-registration",
// // // // //   },
// // // // //   {
// // // // //     title: "Trademark Registration",
// // // // //     desc: "Protect your brand identity and IP assets.",
// // // // //     icon: "copyright",
// // // // //     color: "purple",
// // // // //     path: "/services/trademark-registration",
// // // // //   },
// // // // //   {
// // // // //     title: "FSSAI Certificate",
// // // // //     desc: "Mandatory licensing for all food businesses.",
// // // // //     icon: "restaurant",
// // // // //     color: "teal",
// // // // //     path: "/services/fssai-certificate",
// // // // //   },
// // // // //   {
// // // // //     title: "ITR Filing",
// // // // //     desc: "Accurate income tax returns for all entities.",
// // // // //     icon: "description",
// // // // //     color: "sky",
// // // // //     path: "/services/itr-filing",
// // // // //   },
// // // // //   {
// // // // //     title: "Government Grants",
// // // // //     desc: "Secure non-dilutive capital via Govt schemes.",
// // // // //     icon: "assured_workload",
// // // // //     color: "emerald",
// // // // //     path: "/services/government-grants",
// // // // //   },
// // // // //   {
// // // // //     title: "Seed Funding",
// // // // //     desc: "Connect with angels and VCs to raise capital.",
// // // // //     icon: "payments",
// // // // //     color: "green",
// // // // //     path: "/services/seed-funding",
// // // // //   },
// // // // //   {
// // // // //     title: "MSME Loan",
// // // // //     desc: "Fast-track collateral-free business loans.",
// // // // //     icon: "credit_score",
// // // // //     color: "lime",
// // // // //     path: "/services/msme-loan",
// // // // //   },
// // // // //   {
// // // // //     title: "Website Development",
// // // // //     desc: "High-performance websites for your digital brand.",
// // // // //     icon: "laptop_chromebook",
// // // // //     color: "pink",
// // // // //     path: "/services/website-development",
// // // // //   },
// // // // //   {
// // // // //     title: "Virtual CFO",
// // // // //     desc: "Strategic financial planning and cash-flow.",
// // // // //     icon: "pie_chart",
// // // // //     color: "indigo",
// // // // //     path: "/services/virtual-cfo",
// // // // //   },
// // // // // ];

// // // // // const HomeServices = () => {
// // // // //   return (
// // // // //     <section
// // // // //       className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
// // // // //       id="services"
// // // // //     >
// // // // //       <div className="flex flex-col items-center text-center gap-4 mb-16">
// // // // //         <motion.span
// // // // //           initial={{ opacity: 0, x: 50 }}
// // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.6 }}
// // // // //           className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full"
// // // // //         >
// // // // //           Comprehensive Suite
// // // // //         </motion.span>
// // // // //         <motion.h2
// // // // //           initial={{ opacity: 0, x: 80 }}
// // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.8, delay: 0.1 }}
// // // // //           className="text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white max-w-3xl"
// // // // //         >
// // // // //           Everything you need to build & scale
// // // // //         </motion.h2>
// // // // //         <motion.p
// // // // //           initial={{ opacity: 0, x: 50 }}
// // // // //           whileInView={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // // //           className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light"
// // // // //         >
// // // // //           Navigate the complexities of business with our end-to-end services.
// // // // //         </motion.p>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // // // //         {services.map((service, index) => {
// // // // //           // Logic: Calculate row index.
// // // // //           // On Desktop (xl), we have 4 columns.
// // // // //           // index 0,1,2,3 = row 0. index 4,5,6,7 = row 1.
// // // // //           const rowIndex = Math.floor(index / 4);

// // // // //           return (
// // // // //             <MotionLink
// // // // //               key={index}
// // // // //               to={service.path}
// // // // //               initial={{ opacity: 0, y: 30 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               viewport={{ once: true, amount: 0.2 }}
// // // // //               // Each row is delayed by 0.3s after the previous one
// // // // //               transition={{
// // // // //                 duration: 0.6,
// // // // //                 delay: rowIndex * 0.3,
// // // // //                 ease: "easeOut",
// // // // //               }}
// // // // //               className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
// // // // //             >
// // // // //               <div className="flex items-start justify-between mb-4">
// // // // //                 <div
// // // // //                   className={`size-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300 ${
// // // // //                     colorMap[service.color]
// // // // //                   }`}
// // // // //                 >
// // // // //                   <span className="material-symbols-outlined text-2xl">
// // // // //                     {service.icon}
// // // // //                   </span>
// // // // //                 </div>
// // // // //                 <span className="material-symbols-outlined text-slate-300 group-hover:text-primary-600 transition-colors">
// // // // //                   arrow_outward
// // // // //                 </span>
// // // // //               </div>
// // // // //               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
// // // // //                 {service.title}
// // // // //               </h3>
// // // // //               <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
// // // // //                 {service.desc}
// // // // //               </p>
// // // // //             </MotionLink>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HomeServices;

// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion } from "framer-motion";

// // // // const MotionLink = motion(Link);

// // // // const colorMap = {
// // // //   blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600",
// // // //   orange:
// // // //     "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600",
// // // //   indigo:
// // // //     "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600",
// // // //   cyan: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600",
// // // //   purple:
// // // //     "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600",
// // // //   teal: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600",
// // // //   sky: "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 group-hover:bg-sky-600",
// // // //   emerald:
// // // //     "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600",
// // // //   green:
// // // //     "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600",
// // // //   lime: "bg-lime-50 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 group-hover:bg-lime-600",
// // // //   pink: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600",
// // // // };

// // // // const services = [
// // // //   {
// // // //     title: "Company Incorporation",
// // // //     desc: "Seamless registration for Pvt Ltd, LLP, and OPC structures.",
// // // //     icon: "domain",
// // // //     color: "blue",
// // // //     path: "/company-incorporation",
// // // //   },
// // // //   {
// // // //     title: "Startup India Certificate",
// // // //     desc: "Get recognized by DPIIT to avail tax benefits.",
// // // //     icon: "workspace_premium",
// // // //     color: "orange",
// // // //     path: "/startup-india",
// // // //   },
// // // //   {
// // // //     title: "MSME Registration",
// // // //     desc: "Unlock government subsidies and priority lending.",
// // // //     icon: "storefront",
// // // //     color: "indigo",
// // // //     path: "/msme-registration",
// // // //   },
// // // //   {
// // // //     title: "GST Registration",
// // // //     desc: "Hassle-free tax registration and filing support.",
// // // //     icon: "percent",
// // // //     color: "cyan",
// // // //     path: "/gst-registration",
// // // //   },
// // // //   {
// // // //     title: "Trademark Registration",
// // // //     desc: "Protect your brand identity and IP assets.",
// // // //     icon: "copyright",
// // // //     color: "purple",
// // // //     path: "/trademark-registration",
// // // //   },
// // // //   {
// // // //     title: "FSSAI Certificate",
// // // //     desc: "Mandatory licensing for all food businesses.",
// // // //     icon: "restaurant",
// // // //     color: "teal",
// // // //     path: "/fassai-registration",
// // // //   },
// // // //   {
// // // //     title: "ITR Filing",
// // // //     desc: "Accurate income tax returns for all entities.",
// // // //     icon: "description",
// // // //     color: "sky",
// // // //     path: "/itr-filling",
// // // //   },
// // // //   {
// // // //     title: "Government Grants",
// // // //     desc: "Secure non-dilutive capital via Govt schemes.",
// // // //     icon: "assured_workload",
// // // //     color: "emerald",
// // // //     path: "/government-grants",
// // // //   },
// // // //   {
// // // //     title: "Seed Funding",
// // // //     desc: "Connect with angels and VCs to raise capital.",
// // // //     icon: "payments",
// // // //     color: "green",
// // // //     path: "/seed-funding",
// // // //   },
// // // //   {
// // // //     title: "MSME Loan",
// // // //     desc: "Fast-track collateral-free business loans.",
// // // //     icon: "credit_score",
// // // //     color: "lime",
// // // //     path: "/msme-loan",
// // // //   },
// // // //   {
// // // //     title: "Website Development",
// // // //     desc: "High-performance websites for your digital brand.",
// // // //     icon: "laptop_chromebook",
// // // //     color: "pink",
// // // //     path: "/website-development",
// // // //   },
// // // //   {
// // // //     title: "Virtual CFO",
// // // //     desc: "Strategic financial planning and cash-flow.",
// // // //     icon: "pie_chart",
// // // //     color: "indigo",
// // // //     path: "/virtual-cfo",
// // // //   },
// // // // ];

// // // // const HomeServices = () => {
// // // //   return (
// // // //     <section
// // // //       className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
// // // //       id="services"
// // // //     >
// // // //       <div className="flex flex-col items-center text-center gap-4 mb-16">
// // // //         <motion.span
// // // //           initial={{ opacity: 0, x: 50 }}
// // // //           whileInView={{ opacity: 1, x: 0 }}
// // // //           viewport={{ once: false }}
// // // //           transition={{ duration: 0.6 }}
// // // //           className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full"
// // // //         >
// // // //           Comprehensive Suite
// // // //         </motion.span>
// // // //         <motion.h2
// // // //           initial={{ opacity: 0, x: 80 }}
// // // //           whileInView={{ opacity: 1, x: 0 }}
// // // //           viewport={{ once: false }}
// // // //           transition={{ duration: 0.8, delay: 0.1 }}
// // // //           className="text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white max-w-3xl"
// // // //         >
// // // //           Everything you need to build & scale
// // // //         </motion.h2>
// // // //         <motion.p
// // // //           initial={{ opacity: 0, x: 50 }}
// // // //           whileInView={{ opacity: 1, x: 0 }}
// // // //           viewport={{ once: false }}
// // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // //           className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light"
// // // //         >
// // // //           Navigate the complexities of business with our end-to-end services.
// // // //         </motion.p>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // // //         {services.map((service, index) => {
// // // //           // Row calculation for xl (4 cols), lg (3 cols), sm (2 cols)
// // // //           // Defaulting to 4 for the row-stagger effect
// // // //           const rowIndex = Math.floor(index / 4);

// // // //           return (
// // // //             <MotionLink
// // // //               key={index}
// // // //               to={service.path}
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               // once: false ensures it re-plays when scrolling back
// // // //               viewport={{ once: false, amount: 0.1 }}
// // // //               transition={{
// // // //                 duration: 0.6,
// // // //                 delay: rowIndex * 0.5, // Reduced to 0.2 for a snappier feel
// // // //                 ease: "easeOut",
// // // //               }}
// // // //               className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
// // // //             >
// // // //               <div className="flex items-start justify-between mb-4">
// // // //                 <div
// // // //                   className={`size-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300 ${
// // // //                     colorMap[service.color]
// // // //                   }`}
// // // //                 >
// // // //                   <span className="material-symbols-outlined text-2xl">
// // // //                     {service.icon}
// // // //                   </span>
// // // //                 </div>
// // // //                 <span className="material-symbols-outlined text-slate-300 group-hover:text-primary-600 transition-colors">
// // // //                   arrow_outward
// // // //                 </span>
// // // //               </div>
// // // //               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
// // // //                 {service.title}
// // // //               </h3>
// // // //               <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
// // // //                 {service.desc}
// // // //               </p>
// // // //             </MotionLink>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HomeServices;
// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { SECTIONS_DATA } from "./../AllServicesPage/ServicesData"; // Ensure this path is correct

// // // const MotionLink = motion(Link);

// // // const HomeServices = () => {
// // //   return (
// // //     <section
// // //       className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24"
// // //       id="services"
// // //     >
// // //       {/* Header Section */}
// // //       <div className="flex flex-col items-center text-center gap-4 mb-16">
// // //         <motion.span
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-800 px-3 py-1 rounded-full"
// // //         >
// // //           Comprehensive Suite
// // //         </motion.span>
// // //         <motion.h2
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.1 }}
// // //           className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white max-w-3xl"
// // //         >
// // //           Everything you need to build & scale
// // //         </motion.h2>
// // //         <motion.p
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.2 }}
// // //           className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light"
// // //         >
// // //           Navigate the complexities of business with our end-to-end legal,
// // //           financial, and digital services.
// // //         </motion.p>
// // //       </div>

// // //       {/* Mapping through SECTIONS_DATA */}
// // //       {SECTIONS_DATA.map((section, sIndex) => (
// // //         <div key={section.id} className="space-y-8">
// // //           {/* Section Heading */}
// // //           <div className="flex items-center gap-4 mb-8">
// // //             <div className={`p-3 rounded-2xl ${section.iconBg}`}>
// // //               <span className="material-symbols-outlined text-3xl">
// // //                 {section.icon}
// // //               </span>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
// // //                 {section.title}
// // //               </h3>
// // //               <p className="text-slate-500 dark:text-slate-400 text-sm">
// // //                 {section.subtitle}
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Items Grid */}
// // //           <div className={`grid gap-6 ${section.gridCols}`}>
// // //             {section.items.map((item, iIndex) => (
// // //               <MotionLink
// // //                 key={iIndex}
// // //                 to={item.path}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.5, delay: iIndex * 0.1 }}
// // //                 className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full"
// // //               >
// // //                 {/* Image Header (Optional - using your SECTIONS_DATA images) */}
// // //                 <div className="h-40 w-full overflow-hidden relative">
// // //                   <img
// // //                     src={item.img}
// // //                     alt={item.title}
// // //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// // //                   />
// // //                   <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-sm">
// // //                     <span className="material-symbols-outlined text-[14px] text-primary-600">
// // //                       {item.catIcon}
// // //                     </span>
// // //                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
// // //                       {item.category}
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="p-5 flex flex-col flex-grow">
// // //                   <div className="flex items-center justify-between mb-2">
// // //                     <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
// // //                       {item.title}
// // //                     </h4>
// // //                     <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm">
// // //                       arrow_outward
// // //                     </span>
// // //                   </div>
// // //                   <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
// // //                     {item.desc}
// // //                   </p>
// // //                 </div>
// // //               </MotionLink>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </section>
// // //   );
// // // };

// // // export default HomeServices;
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import { SECTIONS_DATA } from "../AllServicesPage/ServicesData";

// // const MotionLink = motion(Link);

// // // Restored your original color map
// // const colorMap = {
// //   startup:
// //     "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600",
// //   registration:
// //     "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600",
// //   licenses:
// //     "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600",
// //   compliance:
// //     "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600",
// //   "go-online":
// //     "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600",
// // };

// // const HomeServices = () => {
// //   return (
// //     <section
// //       className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
// //       id="services"
// //     >
// //       {/* Header */}
// //       <div className="flex flex-col items-center text-center gap-4 mb-16">
// //         <motion.span
// //           initial={{ opacity: 0, y: 10 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full"
// //         >
// //           Comprehensive Suite
// //         </motion.span>
// //         <motion.h2
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white max-w-3xl"
// //         >
// //           Everything you need to build & scale
// //         </motion.h2>
// //       </div>

// //       {/* Grouped Sections */}
// //       {SECTIONS_DATA.map((section) => (
// //         <div key={section.id} className="space-y-8">
// //           <div className="flex flex-col border-l-4 border-primary-500 pl-4">
// //             <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
// //               {section.title}
// //             </h3>
// //             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
// //               {section.subtitle}
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //             {section.items.map((item, index) => (
// //               <MotionLink
// //                 key={index}
// //                 to={item.path}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.4, delay: index * 0.05 }}
// //                 className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
// //               >
// //                 <div className="flex items-start justify-between mb-4">
// //                   {/* Using Section ID to determine color from the map */}
// //                   <div
// //                     className={`size-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300 ${
// //                       colorMap[section.id] || colorMap.blue
// //                     }`}
// //                   >
// //                     <span className="material-symbols-outlined text-2xl">
// //                       {item.catIcon || "category"}
// //                     </span>
// //                   </div>
// //                   <span className="material-symbols-outlined text-slate-300 group-hover:text-primary-600 transition-colors">
// //                     arrow_outward
// //                   </span>
// //                 </div>

// //                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
// //                   {item.title}
// //                 </h3>
// //                 <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
// //                   {item.desc}
// //                 </p>
// //               </MotionLink>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // };

// // export default HomeServices;
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { SECTIONS_DATA } from "../AllServicesPage/ServicesData";

// const MotionLink = motion(Link);

// const colorMap = {
//   startup:
//     "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600",
//   registration:
//     "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600",
//   licenses:
//     "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600",
//   compliance:
//     "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600",
//   "go-online":
//     "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600",
// };

// const HomeServices = () => {
//   return (
//     <section
//       className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24"
//       id="services"
//     >
//       {/* Page Header */}
//       <div className="flex flex-col items-center text-center gap-4 mb-16">
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full"
//         >
//           Comprehensive Suite
//         </motion.span>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white max-w-3xl"
//         >
//           Everything you need to build & scale
//         </motion.h2>
//       </div>

//       {/* Render Each Group */}
//       {SECTIONS_DATA.map((section) => (
//         <div key={section.id} className="space-y-10">
//           {/* Group Heading */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col border-l-4 border-primary-500 pl-6"
//           >
//             <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
//               {section.title}
//             </h3>
//             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
//               {section.subtitle}
//             </p>
//           </motion.div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {section.items.map((item, index) => (
//               <MotionLink
//                 key={index}
//                 to={item.path}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{
//                   duration: 0.9,
//                   delay: index * 0.12, // Controlled stagger for a smooth flow
//                   ease: [0.21, 0.47, 0.32, 0.98],
//                 }}
//                 className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <div
//                     className={`size-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300 ${
//                       colorMap[section.id] || colorMap.blue
//                     }`}
//                   >
//                     <span className="material-symbols-outlined text-2xl">
//                       {item.catIcon || "category"}
//                     </span>
//                   </div>
//                   <span className="material-symbols-outlined text-slate-300 group-hover:text-primary-600 transition-colors">
//                     arrow_outward
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
//                   {item.desc}
//                 </p>
//               </MotionLink>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default HomeServices;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SECTIONS_DATA } from "../AllServicesPage/ServicesData";

const MotionLink = motion(Link);

const colorMap = {
  startup:
    "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600",
  registration:
    "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600",
  licenses:
    "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600",
  compliance:
    "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600",
  "go-online":
    "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600",
};

const HomeServices = () => {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24"
      id="services"
    >
      {/* Page Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-primary-600 font-bold tracking-widest uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full"
        >
          Comprehensive Suite
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white max-w-3xl"
        >
          Everything you need to build & scale
        </motion.h2>
      </div>

      {/* Render Each Group */}
      {SECTIONS_DATA.map((section) => (
        <div key={section.id} className="space-y-10">
          {/* Group Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col border-l-4 border-primary-500 pl-6"
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              {section.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              {section.subtitle}
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {section.items.map((item, index) => (
              <MotionLink
                key={index}
                to={item.path}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`size-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300 ${
                      colorMap[section.id] || colorMap.blue
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {item.catIcon || "category"}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary-600 transition-colors">
                    arrow_outward
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.desc}
                </p>
              </MotionLink>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeServices;
