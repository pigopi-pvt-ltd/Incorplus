// // import React from "react";
// // import { motion } from "framer-motion";

// // const FoodChains = () => {
// //   const partners = [
// //     { name: "Zomato", icon: "restaurant" },
// //     { name: "Swiggy", icon: "delivery_dining" },
// //     { name: "UberEats", icon: "local_cafe" },
// //     { name: "Blinkit", icon: "storefront" },
// //     { name: "Zepto", icon: "bolt" },
// //   ];

// //   return (
// //     <div className="bg-slate-50 dark:bg-[#151c24] border-y border-slate-200 dark:border-slate-700 py-10">
// //       <div className="layout-container px-4 md:px-10 lg:px-40">
// //         <motion.p
// //           initial={{ opacity: 0, y: 10 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold mb-8"
// //         >
// //           Partnering with India's Leading Platforms
// //         </motion.p>

// //         <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
// //           {partners.map((partner, index) => (
// //             <motion.div
// //               key={partner.name}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{
// //                 delay: index * 0.1,
// //                 duration: 0.5,
// //                 ease: "easeOut",
// //               }}
// //               whileHover={{
// //                 scale: 1.05,
// //                 filter: "grayscale(0%)",
// //                 opacity: 1,
// //               }}
// //               className="flex items-center gap-2 font-bold text-xl text-slate-400 cursor-default opacity-50 grayscale transition-all duration-300"
// //             >
// //               <span className="material-symbols-outlined text-2xl">
// //                 {partner.icon}
// //               </span>
// //               <span className="tracking-tighter">{partner.name}</span>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FoodChains;
// import React from "react";
// import { motion } from "framer-motion";

// const FoodChains = () => {
//   const partners = [
//     {
//       name: "Zomato",
//       icon: "restaurant",
//       color: "hover:text-[#CB202D]",
//       shadow: "hover:shadow-[#CB202D]/20",
//     },
//     {
//       name: "Swiggy",
//       icon: "delivery_dining",
//       color: "hover:text-[#FC8019]",
//       shadow: "hover:shadow-[#FC8019]/20",
//     },
//     {
//       name: "UberEats",
//       icon: "local_cafe",
//       color: "hover:text-[#06C167]",
//       shadow: "hover:shadow-[#06C167]/20",
//     },
//     {
//       name: "Blinkit",
//       icon: "storefront",
//       color: "hover:text-[#F7CB05]",
//       shadow: "hover:shadow-[#F7CB05]/20",
//     },
//     {
//       name: "Zepto",
//       icon: "bolt",
//       color: "hover:text-[#8D33FF]",
//       shadow: "hover:shadow-[#8D33FF]/20",
//     },
//   ];

//   return (
//     <div className="bg-slate-50 dark:bg-[#151c24] border-y border-slate-200 dark:border-slate-700 py-10">
//       <div className="layout-container px-4 md:px-10 lg:px-40">
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold mb-8"
//         >
//           Mandatory for registration on
//         </motion.p>

//         <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
//           {partners.map((partner, index) => (
//             <motion.div
//               key={partner.name}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * 0.1,
//                 duration: 0.5,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 scale: 1.1,
//               }}
//               className={`flex items-center gap-2 font-bold text-xl text-slate-400 cursor-default opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 ${partner.color}`}
//             >
//               <span className="material-symbols-outlined text-2xl transition-transform duration-300 group-hover:rotate-12">
//                 {partner.icon}
//               </span>
//               <span className="tracking-tighter font-serif italic">
//                 {partner.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodChains;
import React from "react";
import { motion } from "framer-motion";

const FoodChains = () => {
  const partners = [
    { name: "Zomato", icon: "restaurant", color: "text-[#CB202D]" },
    { name: "Swiggy", icon: "delivery_dining", color: "text-[#FC8019]" },
    { name: "UberEats", icon: "local_cafe", color: "text-[#06C167]" },
    { name: "Blinkit", icon: "storefront", color: "text-[#F7CB05]" },
    { name: "Zepto", icon: "bolt", color: "text-[#8D33FF]" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#151c24] border-y border-slate-200 dark:border-slate-700 py-10">
      <div className="layout-container px-4 md:px-10 lg:px-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold mb-8"
        >
          Mandatory for registration on
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.1 }}
              className={`flex items-center gap-2 font-bold text-xl cursor-default transition-transform duration-300 ${partner.color}`}
            >
              <span className="material-symbols-outlined text-2xl">
                {partner.icon}
              </span>
              <span className="tracking-tighter">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodChains;
