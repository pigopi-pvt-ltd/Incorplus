// // import React, { useState, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { SECTIONS_DATA } from "../Components/AllServicesPage/ServicesData";

// // const FAQ = () => {
// //   const [activeTab, setActiveTab] = useState(SECTIONS_DATA[0].id);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [openIndex, setOpenIndex] = useState(null);

// //   // 1. Flatten all items into one list for the Search feature
// //   const allServices = useMemo(
// //     () =>
// //       SECTIONS_DATA.flatMap((section) =>
// //         section.items.map((item) => ({ ...item, sectionId: section.id }))
// //       ),
// //     []
// //   );

// //   // 2. Filter logic: If searching, show matching services from any category.
// //   // If not searching, show all services in the active tab.
// //   const displayServices = searchQuery
// //     ? allServices.filter((s) =>
// //         s.title.toLowerCase().includes(searchQuery.toLowerCase())
// //       )
// //     : allServices.filter((s) => s.sectionId === activeTab);

// //   return (
// //     <div className="min-h-screen bg-white dark:bg-slate-950 pt-12 pb-20">
// //       <div className="max-w-6xl mx-auto px-4">
// //         {/* Header Section */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
// //             How can we <span className="text-blue-600">help?</span>
// //           </h1>
// //           <div className="relative max-w-2xl mx-auto">
// //             <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
// //               search
// //             </span>
// //             <input
// //               type="text"
// //               placeholder="Search for a service (e.g., 'Project Report', 'GST')..."
// //               className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
// //               onChange={(e) => {
// //                 setSearchQuery(e.target.value);
// //                 setOpenIndex(null); // Close accordions on search
// //               }}
// //             />
// //           </div>
// //         </div>

// //         {/* Category Tabs (Only show if not searching) */}
// //         {!searchQuery && (
// //           <div className="flex flex-wrap justify-center gap-2 mb-12">
// //             {SECTIONS_DATA.map((section) => (
// //               <button
// //                 key={section.id}
// //                 onClick={() => {
// //                   setActiveTab(section.id);
// //                   setOpenIndex(null);
// //                 }}
// //                 className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
// //                   activeTab === section.id
// //                     ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
// //                     : "bg-slate-100 text-slate-500 dark:bg-slate-800 hover:bg-slate-200"
// //                 }`}
// //               >
// //                 {section.title}
// //               </button>
// //             ))}
// //           </div>
// //         )}

// //         {/* FAQ Grid/List */}
// //         <div className="grid gap-8">
// //           {displayServices.map(
// //             (service, sIdx) =>
// //               service.faqs && (
// //                 <div key={sIdx} className="space-y-4">
// //                   <div className="flex items-center gap-3 mb-4">
// //                     <span className="material-symbols-outlined text-blue-600">
// //                       {service.catIcon}
// //                     </span>
// //                     <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
// //                       {service.title} FAQs
// //                     </h2>
// //                   </div>

// //                   <div className="grid gap-3">
// //                     {service.faqs.map((faq, fIdx) => {
// //                       const uniqueId = `${sIdx}-${fIdx}`;
// //                       return (
// //                         <div
// //                           key={fIdx}
// //                           className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800"
// //                         >
// //                           <button
// //                             onClick={() =>
// //                               setOpenIndex(
// //                                 openIndex === uniqueId ? null : uniqueId
// //                               )
// //                             }
// //                             className="w-full flex items-center justify-between p-5 text-left"
// //                           >
// //                             <span className="font-bold text-slate-800 dark:text-slate-200">
// //                               {faq.q}
// //                             </span>
// //                             <span
// //                               className={`material-symbols-outlined transition-transform ${
// //                                 openIndex === uniqueId ? "rotate-180" : ""
// //                               }`}
// //                             >
// //                               expand_more
// //                             </span>
// //                           </button>
// //                           <AnimatePresence>
// //                             {openIndex === uniqueId && (
// //                               <motion.div
// //                                 initial={{ height: 0, opacity: 0 }}
// //                                 animate={{ height: "auto", opacity: 1 }}
// //                                 exit={{ height: 0, opacity: 0 }}
// //                                 className="overflow-hidden"
// //                               >
// //                                 <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-200/50 pt-4">
// //                                   {faq.a}
// //                                 </div>
// //                               </motion.div>
// //                             )}
// //                           </AnimatePresence>
// //                         </div>
// //                       );
// //                     })}
// //                   </div>
// //                 </div>
// //               )
// //           )}
// //           {displayServices.length === 0 && (
// //             <p className="text-center text-slate-400 py-20">
// //               No services found matching "{searchQuery}"
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQ;
// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Fuse from "fuse.js";
// import { SECTIONS_DATA } from "../Components/AllServicesPage/ServicesData";

// const FAQ = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState(SECTIONS_DATA[0].id);
//   const [openIndex, setOpenIndex] = useState(null);

//   // 1. Flatten items for Fuse.js indexing
//   const allServices = useMemo(
//     () =>
//       SECTIONS_DATA.flatMap((section) =>
//         section.items.map((item) => ({
//           ...item,
//           sectionTitle: section.title,
//           sectionId: section.id,
//         }))
//       ),
//     []
//   );

//   // 2. Initialize Fuse.js
//   const fuse = useMemo(
//     () =>
//       new Fuse(allServices, {
//         keys: ["title", "desc", "category"], // Search in title, description, and category
//         threshold: 0.4, // 0 is exact match, 1 is matches everything. 0.4 is perfect for typos.
//         includeScore: true,
//       }),
//     [allServices]
//   );

//   // 3. Logic to determine what to display
//   const results = useMemo(() => {
//     if (!searchQuery) {
//       return allServices.filter((s) => s.sectionId === activeTab);
//     }
//     return fuse.search(searchQuery).map((result) => result.item);
//   }, [searchQuery, activeTab, fuse, allServices]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20">
//       <div className="max-w-5xl mx-auto px-4">
//         {/* Search Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">
//             Help <span className="text-blue-600">Center</span>
//           </h1>

//           <div className="relative max-w-2xl mx-auto">
//             <div className="relative group">
//               <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
//                 search
//               </span>
//               <input
//                 type="text"
//                 value={searchQuery}
//                 placeholder="Search services (e.g. 'DPIIT', 'GST')..."
//                 className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm"
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             {/* Suggestions Dropdown (Only shows if typing and no exact results yet) */}
//             <AnimatePresence>
//               {searchQuery && results.length > 0 && results.length < 5 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden"
//                 >
//                   <p className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 dark:bg-slate-800/50">
//                     Suggestions
//                   </p>
//                   {results.slice(0, 3).map((s, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setSearchQuery(s.title)}
//                       className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-2"
//                     >
//                       <span className="material-symbols-outlined text-blue-600 text-lg">
//                         {s.catIcon}
//                       </span>
//                       {s.title}
//                     </button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Category Tabs (Hide when searching) */}
//         {!searchQuery && (
//           <div className="flex flex-wrap justify-center gap-2 mb-10">
//             {SECTIONS_DATA.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => setActiveTab(section.id)}
//                 className={`px-5 py-2 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all ${
//                   activeTab === section.id
//                     ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
//                     : "bg-slate-100 text-slate-500 dark:bg-slate-800 hover:bg-slate-200"
//                 }`}
//               >
//                 {section.title}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Results list */}
//         <div className="grid gap-8">
//           {results.map(
//             (service, sIdx) =>
//               service.faqs && (
//                 <motion.div
//                   layout
//                   key={service.title}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="space-y-4"
//                 >
//                   <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
//                     <div className="flex items-center gap-2">
//                       <span className="material-symbols-outlined text-blue-600">
//                         {service.catIcon}
//                       </span>
//                       <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
//                         {service.title}
//                       </h2>
//                     </div>
//                     {searchQuery && (
//                       <span className="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
//                         {service.sectionTitle}
//                       </span>
//                     )}
//                   </div>

//                   <div className="grid gap-3">
//                     {service.faqs.map((faq, fIdx) => {
//                       const id = `${service.title}-${fIdx}`;
//                       return (
//                         <div
//                           key={fIdx}
//                           className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
//                         >
//                           <button
//                             onClick={() =>
//                               setOpenIndex(openIndex === id ? null : id)
//                             }
//                             className="w-full flex items-center justify-between p-5 text-left group"
//                           >
//                             <span
//                               className={`font-bold transition-colors ${
//                                 openIndex === id
//                                   ? "text-blue-600"
//                                   : "text-slate-800 dark:text-slate-200"
//                               }`}
//                             >
//                               {faq.q}
//                             </span>
//                             <span
//                               className={`material-symbols-outlined transition-transform duration-300 ${
//                                 openIndex === id
//                                   ? "rotate-180 text-blue-600"
//                                   : "text-slate-300"
//                               }`}
//                             >
//                               expand_more
//                             </span>
//                           </button>
//                           <AnimatePresence>
//                             {openIndex === id && (
//                               <motion.div
//                                 initial={{ height: 0 }}
//                                 animate={{ height: "auto" }}
//                                 exit={{ height: 0 }}
//                                 transition={{ duration: 0.3 }}
//                               >
//                                 <div className="px-5 pb-5 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-800/50 pt-4">
//                                   {faq.a}
//                                 </div>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </motion.div>
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Fuse from "fuse.js";
// import { SECTIONS_DATA } from "../Components/AllServicesPage/ServicesData";

// const FAQ = () => {
//   const [activeTab, setActiveTab] = useState(SECTIONS_DATA[0].id);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [openIndex, setOpenIndex] = useState(null);

//   // 1. Flatten all items into one list for Fuse.js indexing
//   const allServices = useMemo(
//     () =>
//       SECTIONS_DATA.flatMap((section) =>
//         section.items.map((item) => ({
//           ...item,
//           sectionId: section.id,
//           sectionTitle: section.title,
//         }))
//       ),
//     []
//   );

//   // 2. Initialize Fuse.js
//   const fuse = useMemo(
//     () =>
//       new Fuse(allServices, {
//         keys: ["title", "category", "desc"], // Ensure these match your data keys
//         threshold: 0.3, // Lower = more exact. 0.3 is great for "almost" exact matches.
//         location: 0, // Look at the start of the string first
//         distance: 100, // How far the match can be from the location
//         minMatchCharLength: 1, // Start showing results after just 1 character
//         includeMatches: true,
//       }),
//     [allServices]
//   );

//   // 3. Logic to determine what to display
//   const displayServices = useMemo(() => {
//     if (!searchQuery) {
//       // Show services based on the active tab if search is empty
//       return allServices.filter((s) => s.sectionId === activeTab);
//     }
//     // Show fuzzy search results
//     return fuse.search(searchQuery).map((result) => result.item);
//   }, [searchQuery, activeTab, fuse, allServices]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 pt-12 pb-20">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
//             How can we <span className="text-blue-600">help?</span>
//           </h1>
//           <div className="relative max-w-2xl mx-auto">
//             <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//               search
//             </span>
//             <input
//               type="text"
//               value={searchQuery}
//               placeholder="Search for a service (e.g., 'Project Report', 'GST')..."
//               className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm"
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setOpenIndex(null);
//               }}
//             />
//             <AnimatePresence>
//               {searchQuery && displayServices.length > 0 && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden"
//                 >
//                   <div className="p-2">
//                     {displayServices.slice(0, 5).map((service, i) => (
//                       <button
//                         key={i}
//                         onClick={() => {
//                           setSearchQuery(service.title);
//                           setOpenIndex(null);
//                         }}
//                         className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg flex items-center gap-3 transition-colors"
//                       >
//                         <span className="material-symbols-outlined text-blue-600 text-sm">
//                           {service.catIcon}
//                         </span>
//                         <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">
//                           {service.title}
//                         </span>
//                       </button>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Category Tabs (Only show if not searching) */}
//         {!searchQuery && (
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {SECTIONS_DATA.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => {
//                   setActiveTab(section.id);
//                   setOpenIndex(null);
//                 }}
//                 className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
//                   activeTab === section.id
//                     ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
//                     : "bg-slate-100 text-slate-500 dark:bg-slate-800 hover:bg-slate-200"
//                 }`}
//               >
//                 {section.title}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* FAQ Grid/List */}
//         <div className="grid gap-8">
//           {displayServices.map(
//             (service, sIdx) =>
//               service.faqs && (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   key={service.title}
//                   className="space-y-4"
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="material-symbols-outlined text-blue-600">
//                       {service.catIcon}
//                     </span>
//                     <div className="flex flex-col">
//                       <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
//                         {service.title} FAQs
//                       </h2>
//                       {searchQuery && (
//                         <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
//                           From {service.sectionTitle}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="grid gap-3">
//                     {service.faqs.map((faq, fIdx) => {
//                       const uniqueId = `${service.title}-${fIdx}`;
//                       return (
//                         <div
//                           key={fIdx}
//                           className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800"
//                         >
//                           <button
//                             onClick={() =>
//                               setOpenIndex(
//                                 openIndex === uniqueId ? null : uniqueId
//                               )
//                             }
//                             className="w-full flex items-center justify-between p-5 text-left"
//                           >
//                             <span
//                               className={`font-bold transition-colors ${
//                                 openIndex === uniqueId
//                                   ? "text-blue-600"
//                                   : "text-slate-800 dark:text-slate-200"
//                               }`}
//                             >
//                               {faq.q}
//                             </span>
//                             <span
//                               className={`material-symbols-outlined transition-transform duration-300 ${
//                                 openIndex === uniqueId
//                                   ? "rotate-180 text-blue-600"
//                                   : "text-slate-400"
//                               }`}
//                             >
//                               expand_more
//                             </span>
//                           </button>
//                           <AnimatePresence>
//                             {openIndex === uniqueId && (
//                               <motion.div
//                                 initial={{ height: 0, opacity: 0 }}
//                                 animate={{ height: "auto", opacity: 1 }}
//                                 exit={{ height: 0, opacity: 0 }}
//                                 className="overflow-hidden"
//                               >
//                                 <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-200/50 pt-4">
//                                   {faq.a}
//                                 </div>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </motion.div>
//               )
//           )}

//           {displayServices.length === 0 && (
//             <div className="text-center py-20">
//               <span className="material-symbols-outlined text-6xl text-slate-200 dark:text-slate-800 mb-4">
//                 search_off
//               </span>
//               <p className="text-slate-400 font-medium">
//                 No services found matching "{searchQuery}"
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import { SECTIONS_DATA } from "../Components/AllServicesPage/ServicesData";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(SECTIONS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  // New state to control suggestion box visibility
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allServices = useMemo(
    () =>
      SECTIONS_DATA.flatMap((section) =>
        section.items.map((item) => ({
          ...item,
          sectionId: section.id,
          sectionTitle: section.title,
        }))
      ),
    []
  );

  const fuse = useMemo(
    () =>
      new Fuse(allServices, {
        keys: ["title", "category", "desc"],
        threshold: 0.3,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        includeMatches: true,
      }),
    [allServices]
  );

  const displayServices = useMemo(() => {
    if (!searchQuery) {
      return allServices.filter((s) => s.sectionId === activeTab);
    }
    return fuse.search(searchQuery).map((result) => result.item);
  }, [searchQuery, activeTab, fuse, allServices]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
            How can we <span className="text-blue-600">help?</span>
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              placeholder="Search for a service (e.g., 'Project Report', 'GST')..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm"
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null);
                setShowSuggestions(true); // Show suggestions when typing
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            <AnimatePresence>
              {/* Added showSuggestions check here */}
              {showSuggestions && searchQuery && displayServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden"
                >
                  <div className="p-2">
                    {displayServices.slice(0, 5).map((service, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSearchQuery(service.title);
                          setOpenIndex(null);
                          setShowSuggestions(false); // Hide suggestions on click
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg flex items-center gap-3 transition-colors"
                      >
                        <span className="material-symbols-outlined text-blue-600 text-sm">
                          {service.catIcon}
                        </span>
                        <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                          {service.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Category Tabs */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {SECTIONS_DATA.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveTab(section.id);
                  setOpenIndex(null);
                }}
                className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  activeTab === section.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-100 text-slate-500 dark:bg-slate-800 hover:bg-slate-200"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Grid/List */}
        <div className="grid gap-8">
          {displayServices.map(
            (service, sIdx) =>
              service.faqs && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={service.title}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-blue-600">
                      {service.catIcon}
                    </span>
                    <div className="flex flex-col">
                      <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        {service.title} FAQs
                      </h2>
                      {searchQuery && (
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          From {service.sectionTitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {service.faqs.map((faq, fIdx) => {
                      const uniqueId = `${service.title}-${fIdx}`;
                      return (
                        <div
                          key={fIdx}
                          className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800"
                        >
                          <button
                            onClick={() =>
                              setOpenIndex(
                                openIndex === uniqueId ? null : uniqueId
                              )
                            }
                            className="w-full flex items-center justify-between p-5 text-left"
                          >
                            <span
                              className={`font-bold transition-colors ${
                                openIndex === uniqueId
                                  ? "text-blue-600"
                                  : "text-slate-800 dark:text-slate-200"
                              }`}
                            >
                              {faq.q}
                            </span>
                            <span
                              className={`material-symbols-outlined transition-transform duration-300 ${
                                openIndex === uniqueId
                                  ? "rotate-180 text-blue-600"
                                  : "text-slate-400"
                              }`}
                            >
                              expand_more
                            </span>
                          </button>
                          <AnimatePresence>
                            {openIndex === uniqueId && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-200/50 pt-4">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )
          )}

          {displayServices.length === 0 && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-slate-200 dark:text-slate-800 mb-4">
                search_off
              </span>
              <p className="text-slate-400 font-medium">
                No services found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
