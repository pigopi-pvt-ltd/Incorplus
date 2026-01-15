// // // // import React from "react";
// // // // import { motion } from "framer-motion";

// // // // const testimonials = [
// // // //   {
// // // //     name: "Alex M.",
// // // //     role: "CEO, FinTech Solutions",
// // // //     content:
// // // //       "Incorplus made incorporating our fintech startup a breeze. They handled all the regulatory hurdles while we focused on the product. It felt like having an internal legal team.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
// // // //     featured: false,
// // // //   },
// // // //   {
// // // //     name: "Sarah L.",
// // // //     role: "Founder, GreenRetail",
// // // //     content:
// // // //       "The virtual CFO service is a game changer. We have enterprise-level financial insights without the enterprise price tag. Absolutely indispensable for our Series A prep.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
// // // //     featured: true,
// // // //     rating: 5,
// // // //   },
// // // //   {
// // // //     name: "David K.",
// // // //     role: "Director, TechNova",
// // // //     content:
// // // //       "Their digital team revamped our entire brand presence. Traffic increased by 200% in the first three months. The ROI on their service is unmatched in the industry.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
// // // //     featured: false,
// // // //   },
// // // // ];

// // // // const Hometestimonials = () => {
// // // //   return (
// // // //     <section
// // // //       className="py-24 bg-slate-900 relative overflow-hidden"
// // // //       id="testimonials"
// // // //     >
// // // //       {/* Background Glows */}
// // // //       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
// // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px]"></div>
// // // //         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // // //         {/* Header Section */}
// // // //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
// // // //           <div className="max-w-2xl">
// // // //             <motion.h2
// // // //               initial={{ opacity: 0, x: 50 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: false }}
// // // //               transition={{ duration: 0.8 }}
// // // //               className="text-4xl md:text-5xl font-serif font-medium text-white mb-6"
// // // //             >
// // // //               What are Client's Say
// // // //             </motion.h2>
// // // //             <motion.p
// // // //               initial={{ opacity: 0, x: 50 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: false }}
// // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // //               className="text-lg text-slate-400 font-light"
// // // //             >
// // // //               Join hundreds of founders who have accelerated their journey with
// // // //               Incorplus. We don't just have clients; we have partners.
// // // //             </motion.p>
// // // //           </div>

// // // //           {/* Navigation Buttons */}
// // // //           <div className="flex gap-4">
// // // //             <button className="size-12 rounded-full border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors">
// // // //               <span className="material-symbols-outlined">arrow_back</span>
// // // //             </button>
// // // //             <button className="size-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20">
// // // //               <span className="material-symbols-outlined">arrow_forward</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Testimonials Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //           {testimonials.map((t, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: false, amount: 0.2 }}
// // // //               transition={{ duration: 0.6, delay: index * 0.2 }}
// // // //               className={`relative p-8 rounded-3xl border transition-all duration-300 group flex flex-col h-full
// // // //                 ${
// // // //                   t.featured
// // // //                     ? "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-600 shadow-2xl md:-translate-y-4 md:hover:-translate-y-6"
// // // //                     : "bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-primary-500/50"
// // // //                 }`}
// // // //             >
// // // //               <div
// // // //                 className={`${
// // // //                   t.featured ? "text-yellow-400" : "text-primary-500"
// // // //                 } mb-6 flex justify-between items-start`}
// // // //               >
// // // //                 <span className="material-symbols-outlined text-5xl opacity-50">
// // // //                   format_quote
// // // //                 </span>
// // // //                 {t.rating && (
// // // //                   <div className="flex gap-1">
// // // //                     {[...Array(t.rating)].map((_, i) => (
// // // //                       <span
// // // //                         key={i}
// // // //                         className="material-symbols-outlined text-sm filled"
// // // //                       >
// // // //                         star
// // // //                       </span>
// // // //                     ))}
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               <p
// // // //                 className={`text-lg mb-8 leading-relaxed ${
// // // //                   t.featured
// // // //                     ? "text-white font-medium"
// // // //                     : "text-slate-200 italic"
// // // //                 }`}
// // // //               >
// // // //                 "{t.content}"
// // // //               </p>

// // // //               <div className="flex items-center gap-4 mt-auto">
// // // //                 <div
// // // //                   className={`rounded-full bg-slate-700 bg-cover bg-center border-2 transition-colors
// // // //                     ${
// // // //                       t.featured
// // // //                         ? "size-14 border-yellow-500/50"
// // // //                         : "size-12 border-slate-600 group-hover:border-primary-500"
// // // //                     }`}
// // // //                   style={{ backgroundImage: `url('${t.image}')` }}
// // // //                 ></div>
// // // //                 <div>
// // // //                   <p className="text-base font-bold text-white">{t.name}</p>
// // // //                   <p
// // // //                     className={`text-xs uppercase tracking-wide ${
// // // //                       t.featured ? "text-yellow-500" : "text-slate-400"
// // // //                     }`}
// // // //                   >
// // // //                     {t.role}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hometestimonials;

// // // // import React, { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const testimonials = [
// // // //   {
// // // //     name: "Alex M.",
// // // //     role: "CEO, FinTech Solutions",
// // // //     content:
// // // //       "Incorplus made incorporating our fintech startup a breeze. They handled all the regulatory hurdles while we focused on the product. It felt like having an internal legal team.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
// // // //   },
// // // //   {
// // // //     name: "Sarah L.",
// // // //     role: "Founder, GreenRetail",
// // // //     content:
// // // //       "The virtual CFO service is a game changer. We have enterprise-level financial insights without the enterprise price tag. Absolutely indispensable for our Series A prep.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
// // // //     rating: 5,
// // // //   },
// // // //   {
// // // //     name: "David K.",
// // // //     role: "Director, TechNova",
// // // //     content:
// // // //       "Their digital team revamped our entire brand presence. Traffic increased by 200% in the first three months. The ROI on their service is unmatched in the industry.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
// // // //   },
// // // //   {
// // // //     name: "Priya R.",
// // // //     role: "Co-founder, EduSpark",
// // // //     content:
// // // //       "Getting our Startup India certificate was seamless. Their team handled the documentation perfectly and kept us updated at every step of the way.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071",
// // // //   },
// // // //   {
// // // //     name: "James W.",
// // // //     role: "MD, UrbanLogistics",
// // // //     content:
// // // //       "The MSME loan processing was surprisingly fast. We secured our funding in record time thanks to their guidance and network.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
// // // //   },
// // // // ];

// // // // const Hometestimonials = () => {
// // // //   const [index, setIndex] = useState(0);

// // // //   // Auto-rotation logic
// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       nextSlide();
// // // //     }, 4000); // Rotates every 4 seconds
// // // //     return () => clearInterval(interval);
// // // //   }, [index]);

// // // //   const nextSlide = () => {
// // // //     setIndex((prev) => (prev + 1) % testimonials.length);
// // // //   };

// // // //   const prevSlide = () => {
// // // //     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// // // //   };

// // // //   // Logic to get exactly 3 items for the grid
// // // //   const getVisibleItems = () => {
// // // //     const items = [];
// // // //     for (let i = 0; i < 3; i++) {
// // // //       items.push(testimonials[(index + i) % testimonials.length]);
// // // //     }
// // // //     return items;
// // // //   };

// // // //   const visibleItems = getVisibleItems();

// // // //   return (
// // // //     <section
// // // //       className="py-24 bg-slate-900 relative overflow-hidden"
// // // //       id="testimonials"
// // // //     >
// // // //       {/* Original Background Glows */}
// // // //       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
// // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px]"></div>
// // // //         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // // //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
// // // //           <div className="max-w-2xl">
// // // //             <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
// // // //               Voices of Success
// // // //             </h2>
// // // //             <p className="text-lg text-slate-400 font-light">
// // // //               Join hundreds of founders who have accelerated their journey with
// // // //               Incorplus.
// // // //             </p>
// // // //           </div>
// // // //           <div className="flex gap-4">
// // // //             <button
// // // //               onClick={prevSlide}
// // // //               className="size-12 rounded-full border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
// // // //             >
// // // //               <span className="material-symbols-outlined">arrow_back</span>
// // // //             </button>
// // // //             <button
// // // //               onClick={nextSlide}
// // // //               className="size-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20"
// // // //             >
// // // //               <span className="material-symbols-outlined">arrow_forward</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Testimonials Grid - Kept Original 3-Column Layout */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center min-h-[450px]">
// // // //           <AnimatePresence mode="popLayout" initial={false}>
// // // //             {visibleItems.map((t, idx) => {
// // // //               // The middle item in the visible array (index 1) gets the focus effect
// // // //               const isCenter = idx === 1;

// // // //               return (
// // // //                 <motion.div
// // // //                   key={t.name} // Key by name ensures Framer detects changes
// // // //                   initial={{ opacity: 0, x: 20 }}
// // // //                   animate={{
// // // //                     opacity: 1,
// // // //                     x: 0,
// // // //                     scale: isCenter ? 1.05 : 1, // Middle card scales up
// // // //                     y: isCenter ? -15 : 0, // Middle card lifts up
// // // //                   }}
// // // //                   exit={{ opacity: 0, x: -20 }}
// // // //                   transition={{ duration: 0.5, ease: "easeInOut" }}
// // // //                   className={`p-8 rounded-3xl border transition-all duration-300 group flex flex-col h-full
// // // //                     ${
// // // //                       isCenter
// // // //                         ? "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-600 shadow-2xl z-20"
// // // //                         : "bg-slate-800/50 backdrop-blur-sm border-slate-700 z-10 hidden md:flex"
// // // //                     }`}
// // // //                 >
// // // //                   <div
// // // //                     className={`${
// // // //                       isCenter ? "text-yellow-400" : "text-primary-500"
// // // //                     } mb-6 flex justify-between`}
// // // //                   >
// // // //                     <span className="material-symbols-outlined text-5xl opacity-50">
// // // //                       format_quote
// // // //                     </span>
// // // //                     {t.rating && (
// // // //                       <div className="flex gap-1">
// // // //                         {[...Array(5)].map((_, i) => (
// // // //                           <span
// // // //                             key={i}
// // // //                             className="material-symbols-outlined text-sm filled"
// // // //                           >
// // // //                             star
// // // //                           </span>
// // // //                         ))}
// // // //                       </div>
// // // //                     )}
// // // //                   </div>

// // // //                   <p
// // // //                     className={`text-lg mb-8 leading-relaxed ${
// // // //                       isCenter
// // // //                         ? "text-white font-medium"
// // // //                         : "text-slate-200 italic"
// // // //                     }`}
// // // //                   >
// // // //                     "{t.content}"
// // // //                   </p>

// // // //                   <div className="flex items-center gap-4 mt-auto">
// // // //                     <div
// // // //                       className={`rounded-full bg-slate-700 bg-cover bg-center border-2 transition-colors
// // // //                         ${
// // // //                           isCenter
// // // //                             ? "size-14 border-yellow-500/50"
// // // //                             : "size-12 border-slate-600 group-hover:border-primary-500"
// // // //                         }`}
// // // //                       style={{ backgroundImage: `url('${t.image}')` }}
// // // //                     ></div>
// // // //                     <div>
// // // //                       <p className="text-base font-bold text-white">{t.name}</p>
// // // //                       <p
// // // //                         className={`text-xs uppercase tracking-wide ${
// // // //                           isCenter ? "text-yellow-500" : "text-slate-400"
// // // //                         }`}
// // // //                       >
// // // //                         {t.role}
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </motion.div>
// // // //               );
// // // //             })}
// // // //           </AnimatePresence>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hometestimonials;

// // // // import React, { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const testimonials = [
// // // //   {
// // // //     name: "Alex M.",
// // // //     role: "CEO, FinTech Solutions",
// // // //     content:
// // // //       "Incorplus made incorporating our fintech startup a breeze. They handled all the regulatory hurdles while we focused on the product.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
// // // //   },
// // // //   {
// // // //     name: "Sarah L.",
// // // //     role: "Founder, GreenRetail",
// // // //     content:
// // // //       "The virtual CFO service is a game changer. We have enterprise-level financial insights without the enterprise price tag. Absolutely indispensable.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
// // // //     rating: 5,
// // // //   },
// // // //   {
// // // //     name: "David K.",
// // // //     role: "Director, TechNova",
// // // //     content:
// // // //       "Their digital team revamped our entire brand presence. Traffic increased by 200% in the first three months. The ROI is unmatched.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
// // // //   },
// // // //   {
// // // //     name: "Priya R.",
// // // //     role: "Co-founder, EduSpark",
// // // //     content:
// // // //       "Getting our Startup India certificate was seamless. Their team handled the documentation perfectly and kept us updated.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071",
// // // //   },
// // // //   {
// // // //     name: "James W.",
// // // //     role: "MD, UrbanLogistics",
// // // //     content:
// // // //       "The MSME loan processing was surprisingly fast. We secured our funding in record time thanks to their guidance.",
// // // //     image:
// // // //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
// // // //   },
// // // // ];

// // // // const Hometestimonials = () => {
// // // //   const [[page, direction], setPage] = useState([0, 0]);

// // // //   // Logic to determine which index is active
// // // //   const activeIndex =
// // // //     ((page % testimonials.length) + testimonials.length) % testimonials.length;

// // // //   const paginate = (newDirection) => {
// // // //     setPage([page + newDirection, newDirection]);
// // // //   };

// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => paginate(1), 5000);
// // // //     return () => clearInterval(timer);
// // // //   }, [page]);

// // // //   // Variants for the sliding effect
// // // //   const variants = {
// // // //     enter: (direction) => ({
// // // //       x: direction > 0 ? 100 : -100,
// // // //       opacity: 0,
// // // //       scale: 0.9,
// // // //     }),
// // // //     center: {
// // // //       zIndex: 1,
// // // //       x: 0,
// // // //       opacity: 1,
// // // //       scale: 1,
// // // //       transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
// // // //     },
// // // //     exit: (direction) => ({
// // // //       zIndex: 0,
// // // //       x: direction < 0 ? 100 : -100,
// // // //       opacity: 0,
// // // //       scale: 0.9,
// // // //       transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
// // // //     }),
// // // //   };

// // // //   // Get the three visible items
// // // //   const getVisibleItems = () => {
// // // //     const left = (activeIndex - 1 + testimonials.length) % testimonials.length;
// // // //     const center = activeIndex;
// // // //     const right = (activeIndex + 1) % testimonials.length;
// // // //     return [
// // // //       { ...testimonials[left], pos: "side" },
// // // //       { ...testimonials[center], pos: "center" },
// // // //       { ...testimonials[right], pos: "side" },
// // // //     ];
// // // //   };

// // // //   return (
// // // //     <section
// // // //       className="py-24 bg-slate-900 relative overflow-hidden"
// // // //       id="testimonials"
// // // //     >
// // // //       {/* Background Glows */}
// // // //       <div className="absolute inset-0 z-0 pointer-events-none">
// // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
// // // //         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // // //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
// // // //           <div className="max-w-2xl">
// // // //             <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
// // // //               What are client's Say
// // // //             </h2>
// // // //             <p className="text-lg text-slate-400 font-light">
// // // //               Partnering with founders to build the future.
// // // //             </p>
// // // //           </div>
// // // //           <div className="flex gap-4">
// // // //             <button
// // // //               onClick={() => paginate(-1)}
// // // //               className="size-12 rounded-full border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
// // // //             >
// // // //               <span className="material-symbols-outlined">arrow_back</span>
// // // //             </button>
// // // //             <button
// // // //               onClick={() => paginate(1)}
// // // //               className="size-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20"
// // // //             >
// // // //               <span className="material-symbols-outlined">arrow_forward</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Carousel Grid */}
// // // //         <div className="relative overflow-visible min-h-[450px]">
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
// // // //             <AnimatePresence
// // // //               initial={false}
// // // //               custom={direction}
// // // //               mode="popLayout"
// // // //             >
// // // //               {getVisibleItems().map((t, idx) => {
// // // //                 const isCenter = t.pos === "center";
// // // //                 return (
// // // //                   <motion.div
// // // //                     key={`${t.name}-${activeIndex}-${idx}`}
// // // //                     custom={direction}
// // // //                     variants={variants}
// // // //                     initial="enter"
// // // //                     animate="center"
// // // //                     exit="exit"
// // // //                     className={`p-8 rounded-3xl border flex flex-col h-full transition-shadow duration-500
// // // //                       ${
// // // //                         isCenter
// // // //                           ? "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-600 shadow-2xl z-20 scale-105 -translate-y-4"
// // // //                           : "bg-slate-800/50 backdrop-blur-sm border-slate-700 z-10 hidden md:flex opacity-50"
// // // //                       }`}
// // // //                   >
// // // //                     <div
// // // //                       className={`${
// // // //                         isCenter ? "text-yellow-400" : "text-primary-500"
// // // //                       } mb-6 flex justify-between`}
// // // //                     >
// // // //                       <span className="material-symbols-outlined text-5xl opacity-50">
// // // //                         format_quote
// // // //                       </span>
// // // //                       {isCenter && (
// // // //                         <div className="flex gap-1">
// // // //                           {[...Array(5)].map((_, i) => (
// // // //                             <span
// // // //                               key={i}
// // // //                               className="material-symbols-outlined text-sm filled"
// // // //                             >
// // // //                               star
// // // //                             </span>
// // // //                           ))}
// // // //                         </div>
// // // //                       )}
// // // //                     </div>

// // // //                     <p
// // // //                       className={`text-lg mb-8 leading-relaxed ${
// // // //                         isCenter
// // // //                           ? "text-white font-medium"
// // // //                           : "text-slate-300 italic"
// // // //                       }`}
// // // //                     >
// // // //                       "{t.content}"
// // // //                     </p>

// // // //                     <div className="flex items-center gap-4 mt-auto">
// // // //                       <div
// // // //                         className={`rounded-full bg-slate-700 bg-cover bg-center border-2 ${
// // // //                           isCenter
// // // //                             ? "size-14 border-yellow-500/50"
// // // //                             : "size-12 border-slate-600"
// // // //                         }`}
// // // //                         style={{ backgroundImage: `url('${t.image}')` }}
// // // //                       />
// // // //                       <div>
// // // //                         <p className="text-base font-bold text-white">
// // // //                           {t.name}
// // // //                         </p>
// // // //                         <p
// // // //                           className={`text-xs uppercase tracking-wide ${
// // // //                             isCenter ? "text-yellow-500" : "text-slate-400"
// // // //                           }`}
// // // //                         >
// // // //                           {t.role}
// // // //                         </p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </motion.div>
// // // //                 );
// // // //               })}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hometestimonials;

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const testimonials = [
// // //   {
// // //     name: "Alex M.",
// // //     role: "CEO",
// // //     content: "Incorplus made incorporating our fintech startup a breeze...",
// // //     image:
// // //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
// // //   },
// // //   {
// // //     name: "Sarah L.",
// // //     role: "Founder",
// // //     content: "The virtual CFO service is a game changer...",
// // //     image:
// // //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
// // //     rating: 5,
// // //   },
// // //   {
// // //     name: "David K.",
// // //     role: "Director",
// // //     content: "Their digital team revamped our entire brand presence...",
// // //     image:
// // //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
// // //   },
// // //   {
// // //     name: "Priya R.",
// // //     role: "Co-founder",
// // //     content: "Getting our Startup India certificate was seamless...",
// // //     image:
// // //       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071",
// // //   },
// // //   {
// // //     name: "James W.",
// // //     role: "MD",
// // //     content: "The MSME loan processing was surprisingly fast...",
// // //     image:
// // //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
// // //   },
// // // ];

// // // const Hometestimonials = () => {
// // //   const [index, setIndex] = useState(0);

// // //   const nextSlide = () => {
// // //     setIndex((prev) => (prev + 1) % testimonials.length);
// // //   };

// // //   const prevSlide = () => {
// // //     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// // //   };

// // //   useEffect(() => {
// // //     const timer = setInterval(nextSlide, 5000);
// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   // This ensures that the same "Card" component stays in the DOM and just moves positions
// // //   const getVisibleItems = () => {
// // //     const total = testimonials.length;
// // //     return [
// // //       (index - 1 + total) % total, // Left index
// // //       index, // Center index
// // //       (index + 1) % total, // Right index
// // //     ];
// // //   };

// // //   const visibleIndices = getVisibleItems();

// // //   return (
// // //     <section
// // //       className="py-24 bg-slate-900 relative overflow-hidden"
// // //       id="testimonials"
// // //     >
// // //       <div className="absolute inset-0 z-0 pointer-events-none">
// // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
// // //         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // //         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
// // //           <div className="max-w-2xl">
// // //             <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
// // //               What our clients say
// // //             </h2>
// // //             <p className="text-lg text-slate-400 font-light">
// // //               Partnering with founders to build the future.
// // //             </p>
// // //           </div>
// // //           <div className="flex gap-4">
// // //             <button
// // //               onClick={prevSlide}
// // //               className="size-12 rounded-full border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
// // //             >
// // //               <span className="material-symbols-outlined">arrow_back</span>
// // //             </button>
// // //             <button
// // //               onClick={nextSlide}
// // //               className="size-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20"
// // //             >
// // //               <span className="material-symbols-outlined">arrow_forward</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="relative h-[500px] md:h-[450px]">
// // //           <div className="flex justify-center items-center h-full relative">
// // //             <AnimatePresence mode="popLayout">
// // //               {visibleIndices.map((tIdx, position) => {
// // //                 const t = testimonials[tIdx];
// // //                 const isCenter = position === 1;
// // //                 const isLeft = position === 0;
// // //                 const isRight = position === 2;

// // //                 return (
// // //                   <motion.div
// // //                     key={t.name} // Essential: Key by data item, not position
// // //                     layout // This makes the card slide smoothly between grid positions
// // //                     initial={{ opacity: 0, x: isRight ? 100 : -100 }}
// // //                     animate={{
// // //                       opacity: 1,
// // //                       x: isLeft ? -400 : isRight ? 400 : 0, // Manual offset for desktop
// // //                       scale: isCenter ? 1.05 : 0.9,
// // //                       zIndex: isCenter ? 20 : 10,
// // //                       filter: isCenter ? "blur(0px)" : "blur(2px)",
// // //                     }}
// // //                     exit={{ opacity: 0, scale: 0.8 }}
// // //                     transition={{
// // //                       type: "spring",
// // //                       stiffness: 260,
// // //                       damping: 20,
// // //                       layout: { duration: 0.6 }, // Smoothly slides card from one x to another
// // //                     }}
// // //                     className={`absolute p-8 rounded-3xl border flex flex-col h-full w-full md:w-[400px]
// // //                       ${
// // //                         isCenter
// // //                           ? "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-600 shadow-2xl"
// // //                           : "bg-slate-800/50 backdrop-blur-sm border-slate-700 hidden md:flex opacity-40"
// // //                       }`}
// // //                   >
// // //                     <div
// // //                       className={`${
// // //                         isCenter ? "text-yellow-400" : "text-primary-500"
// // //                       } mb-6 flex justify-between`}
// // //                     >
// // //                       <span className="material-symbols-outlined text-5xl opacity-50">
// // //                         format_quote
// // //                       </span>
// // //                       {isCenter && t.rating && (
// // //                         <div className="flex gap-1">
// // //                           {[...Array(t.rating)].map((_, i) => (
// // //                             <span
// // //                               key={i}
// // //                               className="material-symbols-outlined text-sm filled"
// // //                             >
// // //                               star
// // //                             </span>
// // //                           ))}
// // //                         </div>
// // //                       )}
// // //                     </div>

// // //                     <p
// // //                       className={`text-lg mb-8 leading-relaxed ${
// // //                         isCenter
// // //                           ? "text-white font-medium"
// // //                           : "text-slate-300 italic"
// // //                       }`}
// // //                     >
// // //                       "{t.content}"
// // //                     </p>

// // //                     <div className="flex items-center gap-4 mt-auto">
// // //                       <div
// // //                         className={`rounded-full bg-slate-700 bg-cover bg-center border-2 ${
// // //                           isCenter
// // //                             ? "size-14 border-yellow-500/50"
// // //                             : "size-12 border-slate-600"
// // //                         }`}
// // //                         style={{ backgroundImage: `url('${t.image}')` }}
// // //                       />
// // //                       <div>
// // //                         <p className="text-base font-bold text-white">
// // //                           {t.name}
// // //                         </p>
// // //                         <p
// // //                           className={`text-xs uppercase tracking-wide ${
// // //                             isCenter ? "text-yellow-500" : "text-slate-400"
// // //                           }`}
// // //                         >
// // //                           {t.role}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   </motion.div>
// // //                 );
// // //               })}
// // //             </AnimatePresence>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hometestimonials;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const testimonials = [
// //   {
// //     name: "Alex M.",
// //     role: "CEO, FinTech Solutions",
// //     content:
// //       "Incorplus made incorporating our fintech startup a breeze. They handled all the regulatory hurdles while we focused on the product.",
// //     image:
// //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
// //   },
// //   {
// //     name: "Sarah L.",
// //     role: "Founder, GreenRetail",
// //     content:
// //       "The virtual CFO service is a game changer. We have enterprise-level financial insights without the enterprise price tag. Absolutely indispensable.",
// //     image:
// //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
// //     rating: 5,
// //   },
// //   {
// //     name: "David K.",
// //     role: "Director, TechNova",
// //     content:
// //       "Their digital team revamped our entire brand presence. Traffic increased by 200% in the first three months. The ROI is unmatched.",
// //     image:
// //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
// //   },
// //   {
// //     name: "Priya R.",
// //     role: "Co-founder, EduSpark",
// //     content:
// //       "Getting our Startup India certificate was seamless. Their team handled the documentation perfectly and kept us updated.",
// //     image:
// //       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071",
// //   },
// //   {
// //     name: "James W.",
// //     role: "MD, UrbanLogistics",
// //     content:
// //       "The MSME loan processing was surprisingly fast. We secured our funding in record time thanks to their guidance.",
// //     image:
// //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
// //   },
// // ];

// // const Hometestimonials = () => {
// //   const [index, setIndex] = useState(0);

// //   const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
// //   const prevSlide = () =>
// //     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

// //   useEffect(() => {
// //     const timer = setInterval(nextSlide, 5000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const getVisibleItems = () => {
// //     const total = testimonials.length;
// //     return [
// //       (index - 1 + total) % total, // Left
// //       index, // Center
// //       (index + 1) % total, // Right
// //     ];
// //   };

// //   return (
// //     <section
// //       className="py-24 bg-slate-900 relative overflow-hidden"
// //       id="testimonials"
// //     >
// //       <div className="absolute inset-0 z-0 pointer-events-none">
// //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
// //         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// //           <div className="max-w-2xl">
// //             <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">
// //               What our clients say
// //             </h2>
// //             <p className="text-lg text-slate-400 font-light">
// //               Partnering with founders to build the future.
// //             </p>
// //           </div>
// //           <div className="flex gap-4">
// //             <button
// //               onClick={prevSlide}
// //               className="size-12 rounded-full border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
// //             >
// //               <span className="material-symbols-outlined">arrow_back</span>
// //             </button>
// //             <button
// //               onClick={nextSlide}
// //               className="size-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20"
// //             >
// //               <span className="material-symbols-outlined">arrow_forward</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Improved Responsive Container: No huge gaps */}
// //         <div className="relative flex justify-center items-center h-[400px]">
// //           <AnimatePresence mode="popLayout">
// //             {getVisibleItems().map((tIdx, position) => {
// //               const t = testimonials[tIdx];
// //               const isCenter = position === 1;
// //               const isLeft = position === 0;

// //               return (
// //                 <motion.div
// //                   key={t.name}
// //                   layout
// //                   initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
// //                   animate={{
// //                     opacity: isCenter ? 1 : 0.4,
// //                     x: isLeft ? -380 : position === 2 ? 380 : 0, // Swapped direction
// //                     scale: isCenter ? 1 : 0.85,
// //                     zIndex: isCenter ? 20 : 10,
// //                   }}
// //                   exit={{ opacity: 0, scale: 0.8 }}
// //                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //                   className={`absolute p-8 rounded-3xl border flex flex-col justify-between max-w-[350px] md:max-w-[400px] min-h-[320px]
// //                     ${
// //                       isCenter
// //                         ? "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-600 shadow-2xl"
// //                         : "bg-slate-800/50 backdrop-blur-sm border-slate-700 hidden md:flex"
// //                     }`}
// //                 >
// //                   <div>
// //                     <div
// //                       className={`${
// //                         isCenter ? "text-yellow-400" : "text-primary-500"
// //                       } mb-4 flex justify-between`}
// //                     >
// //                       <span className="material-symbols-outlined text-4xl opacity-50">
// //                         format_quote
// //                       </span>
// //                       {isCenter && t.rating && (
// //                         <div className="flex gap-1">
// //                           {[...Array(t.rating)].map((_, i) => (
// //                             <span
// //                               key={i}
// //                               className="material-symbols-outlined text-xs filled"
// //                             >
// //                               star
// //                             </span>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                     <p
// //                       className={`text-base md:text-lg leading-relaxed mb-6 ${
// //                         isCenter
// //                           ? "text-white font-medium"
// //                           : "text-slate-300 italic"
// //                       }`}
// //                     >
// //                       "{t.content}"
// //                     </p>
// //                   </div>

// //                   <div className="flex items-center gap-4">
// //                     <div
// //                       className={`rounded-full bg-slate-700 bg-cover bg-center border-2 ${
// //                         isCenter
// //                           ? "size-12 border-yellow-500/50"
// //                           : "size-10 border-slate-600"
// //                       }`}
// //                       style={{ backgroundImage: `url('${t.image}')` }}
// //                     />
// //                     <div>
// //                       <p className="text-sm font-bold text-white">{t.name}</p>
// //                       <p
// //                         className={`text-[10px] uppercase tracking-wider ${
// //                           isCenter ? "text-yellow-500" : "text-slate-400"
// //                         }`}
// //                       >
// //                         {t.role}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hometestimonials;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Alex M.",
//     role: "CEO, FinTech Solutions",
//     content:
//       "Incorplus made incorporating our fintech startup a breeze. They handled all the regulatory hurdles while we focused on the product.",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
//   },
//   {
//     name: "Sarah L.",
//     role: "Founder, GreenRetail",
//     content:
//       "The virtual CFO service is a game changer. We have enterprise-level financial insights without the enterprise price tag. Absolutely indispensable.",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
//     rating: 5,
//   },
//   {
//     name: "David K.",
//     role: "Director, TechNova",
//     content:
//       "Their digital team revamped our entire brand presence. Traffic increased by 200% in the first three months. The ROI is unmatched.",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
//   },
//   {
//     name: "Priya R.",
//     role: "Co-founder, EduSpark",
//     content:
//       "Getting our Startup India certificate was seamless. Their team handled the documentation perfectly and kept us updated.",
//     image:
//       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071",
//   },
//   {
//     name: "James W.",
//     role: "MD, UrbanLogistics",
//     content:
//       "The MSME loan processing was surprisingly fast. We secured our funding in record time thanks to their guidance.",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
//   },
// ];

// const Hometestimonials = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 6000);
//     return () => clearInterval(timer);
//   }, [index]);

//   const getVisibleItems = () => {
//     const total = testimonials.length;
//     return [
//       (index - 1 + total) % total, // Left
//       index, // Center
//       (index + 1) % total, // Right
//     ];
//   };

//   // Handler for drag end to trigger slide change
//   const handleDragEnd = (event, info) => {
//     if (info.offset.x > 100) prevSlide();
//     else if (info.offset.x < -100) nextSlide();
//   };

//   return (
//     <section
//       className="py-24 bg-slate-900 relative overflow-hidden"
//       id="testimonials"
//     >
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//           <div className="max-w-2xl text-left">
//             <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">
//               What our clients say
//             </h2>
//             <p className="text-lg text-slate-400 font-light">
//               Partnering with founders to build the future.
//             </p>
//           </div>
//           <div className="flex gap-4">
//             <button
//               onClick={prevSlide}
//               className="size-12 rounded-full border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
//             >
//               <span className="material-symbols-outlined">arrow_back</span>
//             </button>
//             <button
//               onClick={nextSlide}
//               className="size-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20"
//             >
//               <span className="material-symbols-outlined">arrow_forward</span>
//             </button>
//           </div>
//         </div>

//         <div className="relative flex justify-center items-center h-[400px] touch-none">
//           <AnimatePresence mode="popLayout">
//             {getVisibleItems().map((tIdx, position) => {
//               const t = testimonials[tIdx];
//               const isCenter = position === 1;
//               const isLeft = position === 0;

//               return (
//                 <motion.div
//                   key={t.name}
//                   layout
//                   drag={isCenter ? "x" : false} // Only the center card is draggable
//                   dragConstraints={{ left: 0, right: 0 }}
//                   onDragEnd={handleDragEnd}
//                   initial={{ opacity: 0, x: isLeft ? -200 : 200 }}
//                   animate={{
//                     opacity: isCenter ? 1 : 0.3,
//                     x: isLeft ? -400 : position === 2 ? 400 : 0,
//                     scale: isCenter ? 1 : 0.8,
//                     zIndex: isCenter ? 20 : 10,
//                     filter: isCenter ? "blur(0px)" : "blur(1px)",
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.5,
//                     transition: { duration: 0.2 },
//                   }}
//                   transition={{ type: "spring", stiffness: 250, damping: 25 }}
//                   className={`absolute p-8 rounded-3xl border flex flex-col justify-between w-[90%] md:w-[450px] min-h-[300px] cursor-grab active:cursor-grabbing
//                     ${
//                       isCenter
//                         ? "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-600 shadow-2xl"
//                         : "bg-slate-800/40 backdrop-blur-sm border-slate-700 hidden md:flex"
//                     }`}
//                 >
//                   <div className="flex-1">
//                     <div
//                       className={`${
//                         isCenter ? "text-yellow-400" : "text-primary-500"
//                       } mb-4 flex justify-between items-center`}
//                     >
//                       <span className="material-symbols-outlined text-4xl opacity-50">
//                         format_quote
//                       </span>
//                       {isCenter && t.rating && (
//                         <div className="flex gap-0.5">
//                           {[...Array(t.rating)].map((_, i) => (
//                             <span
//                               key={i}
//                               className="material-symbols-outlined text-sm filled"
//                             >
//                               star
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                     <p
//                       className={`text-base md:text-lg leading-relaxed ${
//                         isCenter
//                           ? "text-white font-medium"
//                           : "text-slate-300 italic"
//                       }`}
//                     >
//                       "{t.content}"
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-700/50">
//                     <div
//                       className={`rounded-full bg-slate-700 bg-cover bg-center border-2 ${
//                         isCenter
//                           ? "size-12 border-yellow-500/50"
//                           : "size-10 border-slate-600"
//                       }`}
//                       style={{ backgroundImage: `url('${t.image}')` }}
//                     />
//                     <div className="text-left">
//                       <p className="text-sm font-bold text-white leading-tight">
//                         {t.name}
//                       </p>
//                       <p
//                         className={`text-[11px] uppercase tracking-wider mt-1 ${
//                           isCenter ? "text-yellow-500" : "text-slate-400"
//                         }`}
//                       >
//                         {t.role}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hometestimonials;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Alex M.",
    role: "CEO, FinTech Solutions",
    content:
      "Incorplus made incorporating our fintech startup a breeze. They handled all the regulatory hurdles while we focused on the product.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  },
  {
    name: "Sarah L.",
    role: "Founder, GreenRetail",
    content:
      "The virtual CFO service is a game changer. We have enterprise-level financial insights without the enterprise price tag. Absolutely indispensable.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Director, TechNova",
    content:
      "Their digital team revamped our entire brand presence. Traffic increased by 200% in the first three months. The ROI is unmatched.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
  },
  {
    name: "Priya R.",
    role: "Co-founder, EduSpark",
    content:
      "Getting our Startup India certificate was seamless. Their team handled the documentation perfectly and kept us updated.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071",
  },
  {
    name: "James W.",
    role: "MD, UrbanLogistics",
    content:
      "The MSME loan processing was surprisingly fast. We secured our funding in record time thanks to their guidance.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
  },
];

const Hometestimonials = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const getVisibleItems = () => {
    const total = testimonials.length;
    return [
      (index - 1 + total) % total, // Left
      index, // Center
      (index + 1) % total, // Right
    ];
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) prevSlide();
    else if (info.offset.x < -100) nextSlide();
  };

  return (
    <section
      className="py-24 bg-slate-900 relative overflow-hidden"
      id="testimonials"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">
              What our clients say
            </h2>
            <p className="text-lg text-slate-400 font-light">
              Partnering with founders to build the future.
            </p>
          </div>

          {/* Pagination Dots (Replacing Arrows) */}
          <div className="flex gap-3 mb-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  index === i
                    ? "w-8 bg-primary-500"
                    : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative flex justify-center items-center h-[400px] touch-none">
          <AnimatePresence mode="popLayout">
            {getVisibleItems().map((tIdx, position) => {
              const t = testimonials[tIdx];
              const isCenter = position === 1;
              const isLeft = position === 0;

              return (
                <motion.div
                  key={t.name}
                  layout
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, x: isLeft ? -200 : 200 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.3,
                    x: isLeft ? -400 : position === 2 ? 400 : 0,
                    scale: isCenter ? 1 : 0.8,
                    zIndex: isCenter ? 20 : 10,
                    filter: isCenter ? "blur(0px)" : "blur(1px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                  className={`absolute p-8 rounded-3xl border flex flex-col justify-between w-[90%] md:w-[450px] min-h-[300px] cursor-grab active:cursor-grabbing
                    ${
                      isCenter
                        ? "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-600 shadow-2xl"
                        : "bg-slate-800/40 backdrop-blur-sm border-slate-700 hidden md:flex"
                    }`}
                >
                  <div className="flex-1">
                    <div
                      className={`${
                        isCenter ? "text-yellow-400" : "text-primary-500"
                      } mb-4 flex justify-between items-center`}
                    >
                      <span className="material-symbols-outlined text-4xl opacity-50">
                        format_quote
                      </span>
                      {isCenter && t.rating && (
                        <div className="flex gap-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <span
                              key={i}
                              className="material-symbols-outlined text-sm filled"
                            >
                              star
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p
                      className={`text-base md:text-lg leading-relaxed ${
                        isCenter
                          ? "text-white font-medium"
                          : "text-slate-300 italic"
                      }`}
                    >
                      "{t.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-700/50">
                    <div
                      className={`rounded-full bg-slate-700 bg-cover bg-center border-2 ${
                        isCenter
                          ? "size-12 border-yellow-500/50"
                          : "size-10 border-slate-600"
                      }`}
                      style={{ backgroundImage: `url('${t.image}')` }}
                    />
                    <div className="text-left">
                      <p className="text-sm font-bold text-white leading-tight">
                        {t.name}
                      </p>
                      <p
                        className={`text-[11px] uppercase tracking-wider mt-1 ${
                          isCenter ? "text-yellow-500" : "text-slate-400"
                        }`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hometestimonials;
