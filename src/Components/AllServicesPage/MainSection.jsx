import React, { useState, useEffect, useRef, memo } from "react"
import { Link } from "react-router-dom"
import { SECTIONS_DATA } from "./ServicesData"

// const CardSkeleton = ({ isSmall }) => (
//   <div className="flex flex-col bg-white dark:bg-[#161b2a] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm h-full">
//     <div
//       className={`${
//         isSmall ? "h-32" : "h-40"
//       } bg-gray-200 dark:bg-gray-800 animate-pulse`}
//     />
//     <div className="p-5 flex flex-col flex-1 gap-3">
//       <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
//       <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse" />
//     </div>
//   </div>
// );

// const ServiceCard = memo(({ item, isSmall }) => {
//   const [isMounted, setIsMounted] = useState(false); // Start downloading
//   const [isAnimate, setIsAnimate] = useState(false); // Start animation
//   const [isImgLoaded, setIsImgLoaded] = useState(false);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Trigger mounting (image download) early
//         if (entry.isIntersecting) {
//           setIsMounted(true);
//         }

//         // Trigger animation only when it's actually visible in the viewport
//         if (entry.intersectionRatio > 0.1) {
//           setIsAnimate(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: [0, 0.1],
//         rootMargin: "50px", // Much smaller margin so you see the fade
//       }
//     );

//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => observer.disconnect();
//   }, []);

//   if (!isMounted) {
//     return (
//       <div ref={cardRef} className="h-full">
//         <CardSkeleton isSmall={isSmall} />
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={cardRef}
//       // The animation now triggers based on 'isAnimate'
//       className={`group flex flex-col bg-white dark:bg-[#161b2a] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-700 ease-out transform-gpu h-full ${
//         isAnimate && isImgLoaded
//           ? "opacity-100 translate-y-0 scale-100"
//           : "opacity-0 translate-y-4 scale-[0.97]"
//       }`}
//     >
//       {/* IMAGE SECTION */}
//       <div
//         className={`${
//           isSmall ? "h-32" : "h-40"
//         } relative overflow-hidden bg-gray-100 dark:bg-gray-800`}
//       >
//         {!isImgLoaded && (
//           <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-0" />
//         )}

//         <img
//           src={item.img}
//           alt={item.title}
//           loading="lazy"
//           onLoad={() => setIsImgLoaded(true)}
//           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
//             isImgLoaded ? "opacity-100" : "opacity-0"
//           }`}
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

//         <div className="absolute bottom-3 left-4 text-white font-bold text-xs flex items-center gap-1.5 z-10">
//           <span className="material-symbols-outlined text-sm">
//             {item.catIcon}
//           </span>
//           <span className="uppercase tracking-wider">{item.category}</span>
//         </div>
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="p-5 flex flex-col flex-1">
//         <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
//           {item.title}
//         </h3>
//         <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
//           {item.desc}
//         </p>
//         <Link
//           to={item.path || "#"}
//           className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold group-hover:gap-2 transition-all"
//         >
//           Learn more{" "}
//           <span className="material-symbols-outlined text-base ml-1">
//             arrow_forward
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// });

// // MainSection remains the same...
// const MainSection = () => {
//   return (
//     <div className="layout-container flex flex-col items-center pb-20 bg-slate-50 dark:bg-[#0b0f1a]">
//       <div className="layout-content-container flex flex-col max-w-[1080px] w-full gap-16 px-4 sm:px-6">
//         {SECTIONS_DATA.map((section) => (
//           <section key={section.id} className="scroll-mt-32" id={section.id}>
//             <div className="flex items-center gap-3 mb-6 pt-8 border-t border-gray-200 dark:border-gray-800">
//               <div className={`p-2.5 rounded-xl ${section.iconBg}`}>
//                 <span className="material-symbols-outlined text-2xl">
//                   {section.icon}
//                 </span>
//               </div>
//               <div>
//                 <h2 className="text-[#0d131b] dark:text-white text-2xl font-bold leading-tight">
//                   {section.title}
//                 </h2>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
//                   {section.subtitle}
//                 </p>
//               </div>
//             </div>

//             <div className={`grid ${section.gridCols} gap-6`}>
//               {section.items.map((item, idx) => (
//                 <ServiceCard
//                   key={`${section.id}-${idx}`}
//                   item={item}
//                   isSmall={section.id === "startup"}
//                 />
//               ))}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainSection;
// import { useState } from "react"
import ConsultationModal from "../CommonComponents/ConsultationModal" // Import your modal
import ServiceCard from "./ServiceCard"

const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const openConsultation = (title) => {
    setSelectedService(title)
    setIsModalOpen(true)
  }

  return (
    <div className="layout-container flex flex-col items-center pb-20 bg-slate-50 dark:bg-[#0b0f1a]">
      {/* MODAL COMPONENT */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedService}
      />

      <div className="layout-content-container flex flex-col max-w-[1080px] w-full gap-16 px-4 sm:px-6">
        {SECTIONS_DATA.map((section) => (
          <section key={section.id} className="scroll-mt-32" id={section.id}>
            <div className="flex items-center gap-3 mb-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className={`p-2.5 rounded-xl ${section.iconBg}`}>
                <span className="material-symbols-outlined text-2xl">
                  {section.icon}
                </span>
              </div>
              <div>
                <h2 className="text-[#0d131b] dark:text-white text-2xl font-bold leading-tight">
                  {section.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  {section.subtitle}
                </p>
              </div>
            </div>

            <div className={`grid ${section.gridCols} gap-6`}>
              {section.items.map((item, idx) => (
                <ServiceCard
                  key={`${section.id}-${idx}`}
                  item={item}
                  isSmall={section.id === "startup"}
                  onOpenConsultation={openConsultation} // Pass function down
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
export default MainSection
