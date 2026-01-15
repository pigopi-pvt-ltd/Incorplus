// // // // import React from "react";
// // // // import { motion } from "framer-motion";

// // // // const ReviewsSection = () => {
// // // //   // Animation Variants
// // // //   const avatarContainer = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       transition: { staggerChildren: 0.1, delayChildren: 0.3 },
// // // //     },
// // // //   };

// // // //   const avatarPop = {
// // // //     hidden: { scale: 0, opacity: 0 },
// // // //     visible: {
// // // //       scale: 1,
// // // //       opacity: 1,
// // // //       transition: { type: "spring", stiffness: 260, damping: 20 },
// // // //     },
// // // //   };

// // // //   const cardFade = {
// // // //     hidden: { opacity: 0, x: 50 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       x: 0,
// // // //       transition: { duration: 0.8, ease: "easeOut" },
// // // //     },
// // // //   };

// // // //   const quoteVariants = {
// // // //     hidden: { opacity: 0, scale: 0.5, rotate: -15 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       scale: 1,
// // // //       rotate: 0,
// // // //       transition: { delay: 0.8, duration: 0.5 },
// // // //     },
// // // //   };

// // // //   return (
// // // //     <section className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto overflow-hidden">
// // // //       <div className="grid md:grid-cols-2 gap-12 items-center">
// // // //         {/* Left Side: Header & Avatars */}
// // // //         <div>
// // // //           <motion.h2
// // // //             initial={{ opacity: 0, y: -20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ amount: 0.5 }}
// // // //             className="text-3xl font-bold text-slate-900 dark:text-white mb-6"
// // // //           >
// // // //             Loved by Indian Founders
// // // //           </motion.h2>

// // // //           <motion.div
// // // //             variants={avatarContainer}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ amount: 0.8 }}
// // // //             className="flex -space-x-4 mb-6"
// // // //           >
// // // //             {[2, 3, 4].map((num) => (
// // // //               <motion.img
// // // //                 key={num}
// // // //                 variants={avatarPop}
// // // //                 className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover"
// // // //                 src={`http://googleusercontent.com/profile/picture/${num}`}
// // // //                 alt="Founder portrait"
// // // //               />
// // // //             ))}
// // // //             <motion.div
// // // //               variants={avatarPop}
// // // //               className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300"
// // // //             >
// // // //               +500
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* Right Side: Testimonial Card */}
// // // //         <motion.div
// // // //           variants={cardFade}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ amount: 0.4 }}
// // // //           className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative"
// // // //         >
// // // //           {/* Animated Quote Icon */}
// // // //           <motion.span
// // // //             variants={quoteVariants}
// // // //             className="material-symbols-outlined absolute top-6 right-6 text-slate-200 dark:text-slate-700 text-6xl -z-0 pointer-events-none"
// // // //           >
// // // //             format_quote
// // // //           </motion.span>

// // // //           <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic relative z-10">
// // // //             "Incorplus made the chaotic process of registration feel like a
// // // //             breeze. We got our Certificate of Incorporation in just 9 days!
// // // //             Highly recommended for first-time founders."
// // // //           </p>

// // // //           <div className="flex items-center gap-4 relative z-10">
// // // //             <motion.div
// // // //               whileHover={{ rotate: 360 }}
// // // //               transition={{ duration: 0.8 }}
// // // //               className="size-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold cursor-default"
// // // //             >
// // // //               R
// // // //             </motion.div>
// // // //             <div>
// // // //               <h5 className="text-sm font-bold text-slate-900 dark:text-white">
// // // //                 Rahul Sharma
// // // //               </h5>
// // // //               <p className="text-xs text-slate-500 dark:text-slate-400">
// // // //                 Founder, TechSpace Solutions
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ReviewsSection;

// // // import React from "react";
// // // import { motion } from "framer-motion";

// // // const ReviewsSection = () => {
// // //   // Real high-quality portraits from Unsplash
// // //   const founderImages = [
// // //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop", // Female Founder
// // //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop", // Male CEO
// // //     "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&h=150&auto=format&fit=crop", // Tech Lead
// // //   ];

// // //   const avatarContainer = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.1, delayChildren: 0.3 },
// // //     },
// // //   };

// // //   const avatarPop = {
// // //     hidden: { scale: 0, opacity: 0 },
// // //     visible: {
// // //       scale: 1,
// // //       opacity: 1,
// // //       transition: { type: "spring", stiffness: 260, damping: 20 },
// // //     },
// // //   };

// // //   const cardFade = {
// // //     hidden: { opacity: 0, x: 50 },
// // //     visible: {
// // //       opacity: 1,
// // //       x: 0,
// // //       transition: { duration: 0.8, ease: "easeOut" },
// // //     },
// // //   };

// // //   return (
// // //     <section className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto overflow-hidden">
// // //       <div className="grid md:grid-cols-2 gap-12 items-center">
// // //         {/* Left Side: Header & Avatars */}
// // //         <div>
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: -20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ amount: 0.5 }}
// // //             className="text-3xl font-bold text-slate-900 dark:text-white mb-6"
// // //           >
// // //             Loved by Indian Founders
// // //           </motion.h2>

// // //           <motion.div
// // //             variants={avatarContainer}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ amount: 0.8 }}
// // //             className="flex -space-x-4 mb-6"
// // //           >
// // //             {founderImages.map((src, index) => (
// // //               <motion.img
// // //                 key={index}
// // //                 variants={avatarPop}
// // //                 className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover bg-slate-200"
// // //                 src={src}
// // //                 alt={`Founder ${index + 1}`}
// // //               />
// // //             ))}
// // //             <motion.div
// // //               variants={avatarPop}
// // //               className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg"
// // //             >
// // //               +500
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>

// // //         {/* Right Side: Testimonial Card */}
// // //         <motion.div
// // //           variants={cardFade}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ amount: 0.4 }}
// // //           className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative"
// // //         >
// // //           <span className="material-symbols-outlined absolute top-6 right-6 text-slate-100 dark:text-slate-700/50 text-6xl -z-0 pointer-events-none">
// // //             format_quote
// // //           </span>

// // //           <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic relative z-10">
// // //             "Incorplus made the chaotic process of registration feel like a
// // //             breeze. We got our Certificate of Incorporation in just 9 days!
// // //             Highly recommended for first-time founders."
// // //           </p>

// // //           <div className="flex items-center gap-4 relative z-10">
// // //             <div className="size-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
// // //               R
// // //             </div>
// // //             <div>
// // //               <h5 className="text-sm font-bold text-slate-900 dark:text-white">
// // //                 Rahul Sharma
// // //               </h5>
// // //               <p className="text-xs text-slate-500 dark:text-slate-400">
// // //                 Founder, TechSpace Solutions
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ReviewsSection;
// // import React from "react";
// // import { motion } from "framer-motion";

// // const ReviewsSection = () => {
// //   // Array of 3 real founder images
// //   const founders = [
// //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&h=150&auto=format&fit=crop",
// //   ];

// //   const avatarContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.1, delayChildren: 0.3 },
// //     },
// //   };

// //   const avatarPop = {
// //     hidden: { scale: 0, opacity: 0 },
// //     visible: {
// //       scale: 1,
// //       opacity: 1,
// //       transition: { type: "spring", stiffness: 260, damping: 20 },
// //     },
// //   };

// //   return (
// //     <section className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto overflow-hidden">
// //       <div className="grid md:grid-cols-2 gap-12 items-center">
// //         <div>
// //           <motion.h2
// //             initial={{ opacity: 0, y: -20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ amount: 0.5 }}
// //             className="text-3xl font-bold text-slate-900 dark:text-white mb-6"
// //           >
// //             Loved by Indian Founders
// //           </motion.h2>

// //           {/* The flex container with negative space creates the overlap effect */}
// //           <motion.div
// //             variants={avatarContainer}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ amount: 0.8 }}
// //             className="flex -space-x-4 mb-6"
// //           >
// //             {founders.map((url, index) => (
// //               <motion.img
// //                 key={index}
// //                 variants={avatarPop}
// //                 className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover bg-slate-200"
// //                 src={url}
// //                 alt={`Founder ${index + 1}`}
// //               />
// //             ))}

// //             {/* The +500 Badge */}
// //             <motion.div
// //               variants={avatarPop}
// //               className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg z-10"
// //             >
// //               +500
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         {/* Testimonial Card */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative"
// //         >
// //           <span className="material-symbols-outlined absolute top-6 right-6 text-slate-100 dark:text-slate-700/30 text-6xl pointer-events-none">
// //             format_quote
// //           </span>

// //           <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic relative z-10">
// //             "Incorplus made the chaotic process of registration feel like a
// //             breeze. We got our Certificate of Incorporation in just 9 days!
// //             Highly recommended for first-time founders."
// //           </p>

// //           <div className="flex items-center gap-4 relative z-10">
// //             <div className="size-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
// //               R
// //             </div>
// //             <div>
// //               <h5 className="text-sm font-bold text-slate-900 dark:text-white">
// //                 Rahul Sharma
// //               </h5>
// //               <p className="text-xs text-slate-500 dark:text-slate-400">
// //                 Founder, TechSpace Solutions
// //               </p>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ReviewsSection;
// import React from "react";
// import { motion } from "framer-motion";

// const ReviewsSection = () => {
//   // Real professional portraits of Indian founders/professionals
//   const founders = [
//     "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=150&h=150&auto=format&fit=crop", // Indian Professional Female
//     "https://images.unsplash.com/photo-1507152832244-10d45a7e3ad7?q=80&w=150&h=150&auto=format&fit=crop", // Indian Professional Male
//     "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=150&h=150&auto=format&fit=crop", // Indian Professional Male 2
//   ];

//   const avatarContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 },
//     },
//   };

//   const avatarPop = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 260, damping: 20 },
//     },
//   };

//   return (
//     <section className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto overflow-hidden">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ amount: 0.5 }}
//             className="text-3xl font-bold text-slate-900 dark:text-white mb-6"
//           >
//             Loved by Indian Founders
//           </motion.h2>

//           <motion.div
//             variants={avatarContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ amount: 0.8 }}
//             className="flex -space-x-4 mb-6"
//           >
//             {founders.map((url, index) => (
//               <motion.img
//                 key={index}
//                 variants={avatarPop}
//                 className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover bg-slate-200"
//                 src={url}
//                 alt={`Indian Founder ${index + 1}`}
//               />
//             ))}

//             <motion.div
//               variants={avatarPop}
//               className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg z-10"
//             >
//               +500
//             </motion.div>
//           </motion.div>
//           <p className="text-slate-500 text-sm font-medium">
//             Joined by entrepreneurs from Mumbai, Bangalore, & Delhi
//           </p>
//         </div>

//         {/* Testimonial Card */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative"
//         >
//           <span className="material-symbols-outlined absolute top-6 right-6 text-slate-100 dark:text-slate-700/30 text-6xl pointer-events-none">
//             format_quote
//           </span>

//           <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic relative z-10">
//             "Incorplus made the chaotic process of registration feel like a
//             breeze. We got our Certificate of Incorporation in just 9 days!
//             Highly recommended for first-time founders."
//           </p>

//           <div className="flex items-center gap-4 relative z-10">
//             <div className="size-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
//               R
//             </div>
//             <div>
//               <h5 className="text-sm font-bold text-slate-900 dark:text-white">
//                 Rahul Sharma
//               </h5>
//               <p className="text-xs text-slate-500 dark:text-slate-400">
//                 Founder, TechSpace Solutions
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;
import React from "react";
import { motion } from "framer-motion";

const ReviewsSection = () => {
  // Updated list with a more stable URL for the middle image
  const founders = [
    "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=150&h=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop", // Updated Middle Image
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=150&h=150&auto=format&fit=crop",
  ];

  const avatarContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const avatarPop = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            className="text-3xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Loved by Indian Founders
          </motion.h2>

          <motion.div
            variants={avatarContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.8 }}
            className="flex -space-x-4 mb-6"
          >
            {founders.map((url, index) => (
              <motion.img
                key={index}
                variants={avatarPop}
                className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover bg-slate-200"
                src={url}
                alt={`Indian Founder ${index + 1}`}
                // Added loading="lazy" for better performance
                loading="lazy"
              />
            ))}

            <motion.div
              variants={avatarPop}
              className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg z-10"
            >
              +500
            </motion.div>
          </motion.div>
          <p className="text-slate-500 text-sm font-medium italic">
            Joined by 500+ entrepreneurs across India
          </p>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative"
        >
          <span className="material-symbols-outlined absolute top-6 right-6 text-slate-100 dark:text-slate-700/30 text-6xl pointer-events-none">
            format_quote
          </span>

          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic relative z-10">
            "Incorplus made the chaotic process of registration feel like a
            breeze. We got our Certificate of Incorporation in just 9 days!
            Highly recommended for first-time founders."
          </p>

          <div className="flex items-center gap-4 relative z-10">
            <div className="size-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
              R
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Rahul Sharma
              </h5>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Founder, TechSpace Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
