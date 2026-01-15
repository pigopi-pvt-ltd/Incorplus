// // // // // import React from "react";

// // // // // const ServiceCategories = () => {
// // // // //   const categories = [
// // // // //     { name: "Legal & Compliance", href: "#legal", active: true },
// // // // //     { name: "Funding & Growth", href: "#funding", active: false },
// // // // //     { name: "Digital Presence", href: "#digital", active: false },
// // // // //     { name: "Tax & Audit", href: "#tax", active: false },
// // // // //     { name: "Intellectual Property", href: "#ip", active: false },
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <div className="sticky top-[72px] z-40 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 mb-10">
// // // // //         <div className="max-w-[960px] mx-auto px-4">
// // // // //           <nav
// // // // //             aria-label="Service Categories"
// // // // //             className="flex gap-3 overflow-x-auto py-4 no-scrollbar scroll-smooth"
// // // // //           >
// // // // //             {categories.map((cat, index) => (
// // // // //               <a
// // // // //                 key={index}
// // // // //                 href={cat.href}
// // // // //                 className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
// // // // //                   cat.active
// // // // //                     ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
// // // // //                     : "bg-transparent text-[#4c6c9a] dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
// // // // //                 }`}
// // // // //               >
// // // // //                 {cat.name}
// // // // //               </a>
// // // // //             ))}
// // // // //           </nav>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Internal CSS for clean horizontal scrolling */}
// // // // //       <style
// // // // //         dangerouslySetInnerHTML={{
// // // // //           __html: `
// // // // //         .no-scrollbar::-webkit-scrollbar {
// // // // //           display: none;
// // // // //         }
// // // // //         .no-scrollbar {
// // // // //           -ms-overflow-style: none;
// // // // //           scrollbar-width: none;
// // // // //         }
// // // // //       `,
// // // // //         }}
// // // // //       />
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default ServiceCategories;
// // // // import React, { useState, useEffect } from "react";

// // // // const ServiceCategories = () => {
// // // //   // 1. Manage active state dynamically
// // // //   const [activeSection, setActiveSection] = useState("legal");

// // // //   const categories = [
// // // //     { name: "Legal & Compliance", id: "legal" },
// // // //     { name: "Funding & Growth", id: "funding" },
// // // //     { name: "Digital Presence", id: "digital" },
// // // //   ];

// // // //   // 2. Intersection Observer to detect scroll position
// // // //   useEffect(() => {
// // // //     const observers = [];

// // // //     const observerCallback = (entries) => {
// // // //       entries.forEach((entry) => {
// // // //         if (entry.isIntersecting) {
// // // //           setActiveSection(entry.target.id);
// // // //         }
// // // //       });
// // // //     };

// // // //     const observerOptions = {
// // // //       rootMargin: "-20% 0px -70% 0px", // Detects section when it's near the top
// // // //       threshold: 0,
// // // //     };

// // // //     const observer = new IntersectionObserver(
// // // //       observerCallback,
// // // //       observerOptions
// // // //     );

// // // //     categories.forEach((cat) => {
// // // //       const el = document.getElementById(cat.id);
// // // //       if (el) observer.observe(el);
// // // //     });

// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <div className="sticky top-[0px] md:top-[70px] z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 mb-10">
// // // //         <div className="max-w-[960px] mx-auto px-4">
// // // //           <nav
// // // //             aria-label="Service Categories"
// // // //             className="flex gap-3 overflow-x-auto py-4 no-scrollbar scroll-smooth"
// // // //           >
// // // //             {categories.map((cat) => (
// // // //               <a
// // // //                 key={cat.id}
// // // //                 href={`#${cat.id}`}
// // // //                 className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
// // // //                   activeSection === cat.id
// // // //                     ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
// // // //                     : "bg-transparent text-[#4c6c9a] dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
// // // //                 }`}
// // // //               >
// // // //                 {cat.name}
// // // //               </a>
// // // //             ))}
// // // //           </nav>
// // // //         </div>
// // // //       </div>

// // // //       <style
// // // //         dangerouslySetInnerHTML={{
// // // //           __html: `
// // // //         .no-scrollbar::-webkit-scrollbar { display: none; }
// // // //         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// // // //         /* This prevents the sticky header from covering your section titles */
// // // //         section { scroll-margin-top: 120px; }
// // // //       `,
// // // //         }}
// // // //       />
// // // //     </>
// // // //   );
// // // // };

// // // // export default ServiceCategories;
// // // // import React, { useState, useEffect } from "react";

// // // // const ServiceCategories = () => {
// // // //   const [activeSection, setActiveSection] = useState("legal");

// // // //   const categories = [
// // // //     { name: "Legal & Compliance", id: "legal" },
// // // //     { name: "Funding & Growth", id: "funding" },
// // // //     { name: "Digital Presence", id: "digital" },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const sectionIds = categories.map((cat) => cat.id);

// // // //       for (const id of sectionIds) {
// // // //         const section = document.getElementById(id);
// // // //         if (section) {
// // // //           const rect = section.getBoundingClientRect();
// // // //           // Adjust 150 offset based on your header height
// // // //           if (rect.top <= 150 && rect.bottom >= 150) {
// // // //             setActiveSection(id);
// // // //             break;
// // // //           }
// // // //         }
// // // //       }
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       {/* Ensure top-0 matches the height of your main navbar if you have one */}
// // // //       <div className="sticky top-0 md:top-[72px] z-40 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 mb-10">
// // // //         <div className="max-w-[960px] mx-auto px-4">
// // // //           <nav className="flex gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
// // // //             {categories.map((cat) => (
// // // //               <a
// // // //                 key={cat.id}
// // // //                 href={`#${cat.id}`}
// // // //                 className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-all border ${
// // // //                   activeSection === cat.id
// // // //                     ? "bg-primary text-white border-primary shadow-md"
// // // //                     : "bg-transparent text-[#4c6c9a] dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
// // // //                 }`}
// // // //               >
// // // //                 {cat.name}
// // // //               </a>
// // // //             ))}
// // // //           </nav>
// // // //         </div>
// // // //       </div>

// // // //       <style
// // // //         dangerouslySetInnerHTML={{
// // // //           __html: `
// // // //         .no-scrollbar::-webkit-scrollbar { display: none; }
// // // //         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// // // //         /* Ensures the section content isn't hidden under the sticky bar when clicking links */
// // // //         #legal, #funding, #digital { scroll-margin-top: 140px; }
// // // //       `,
// // // //         }}
// // // //       />
// // // //     </>
// // // //   );
// // // // };

// // // // export default ServiceCategories;
// // // import React, { useState, useEffect } from "react";

// // // const ServiceCategories = () => {
// // //   const [activeSection, setActiveSection] = useState("startup");

// // //   const categories = [
// // //     { name: "For Startup", id: "startup" },
// // //     { name: "Registration", id: "registration" },
// // //     { name: "Licenses", id: "licenses" },
// // //     { name: "Compliance", id: "compliance" },
// // //     { name: "Go Online", id: "go-online" },
// // //   ];

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const sectionIds = categories.map((cat) => cat.id);

// // //       for (const id of sectionIds) {
// // //         const section = document.getElementById(id);
// // //         if (section) {
// // //           const rect = section.getBoundingClientRect();
// // //           // Adjust 150 offset based on your header height + sticky nav height
// // //           if (rect.top <= 180 && rect.bottom >= 180) {
// // //             setActiveSection(id);
// // //             break;
// // //           }
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   return (
// // //     <>
// // //       {/* Adjust 'md:top-[72px]' if your main navbar height differs.
// // //         Current setting assumes a ~72px fixed header.
// // //       */}
// // //       <div className="sticky top-0 md:top-[72px] z-40 bg-white/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 mb-8">
// // //         <div className="max-w-[1080px] mx-auto px-4">
// // //           <nav className="flex gap-3 overflow-x-auto py-4 no-scrollbar scroll-smooth">
// // //             {categories.map((cat) => (
// // //               <a
// // //                 key={cat.id}
// // //                 href={`#${cat.id}`}
// // //                 onClick={(e) => {
// // //                   e.preventDefault();
// // //                   const element = document.getElementById(cat.id);
// // //                   if (element) {
// // //                     // Manual scroll calculation to handle sticky headers precisely
// // //                     const offset = 160; // Total header height (Main Nav + This Nav)
// // //                     const elementPosition = element.getBoundingClientRect().top;
// // //                     const offsetPosition =
// // //                       elementPosition + window.pageYOffset - offset;

// // //                     window.scrollTo({
// // //                       top: offsetPosition,
// // //                       behavior: "smooth",
// // //                     });
// // //                   }
// // //                 }}
// // //                 className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border ${
// // //                   activeSection === cat.id
// // //                     ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105"
// // //                     : "bg-gray-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 border-transparent hover:bg-gray-100 dark:hover:bg-white/10"
// // //                 }`}
// // //               >
// // //                 {cat.name}
// // //               </a>
// // //             ))}
// // //           </nav>
// // //         </div>
// // //       </div>

// // //       <style
// // //         dangerouslySetInnerHTML={{
// // //           __html: `
// // //         .no-scrollbar::-webkit-scrollbar { display: none; }
// // //         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// // //         /* Fallback for native scroll, though JS handler above is smoother */
// // //         #startup, #registration, #licenses, #compliance, #go-online { scroll-margin-top: 160px; }
// // //       `,
// // //         }}
// // //       />
// // //     </>
// // //   );
// // // };

// // // export default ServiceCategories;
// // import React, { useState, useEffect } from "react";

// // const ServiceCategories = () => {
// //   // Logic: Updated initial state to match the first new section ID
// //   const [activeSection, setActiveSection] = useState("startup");

// //   // Names: Updated to match the new category structure
// //   const categories = [
// //     { name: "For Startup", id: "startup" },
// //     { name: "Registration", id: "registration" },
// //     { name: "Licenses", id: "licenses" },
// //     { name: "Compliance", id: "compliance" },
// //     { name: "Go Online", id: "go-online" },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const sectionIds = categories.map((cat) => cat.id);

// //       for (const id of sectionIds) {
// //         const section = document.getElementById(id);
// //         if (section) {
// //           const rect = section.getBoundingClientRect();
// //           // Logic: Keeping your original 150 offset
// //           if (rect.top <= 150 && rect.bottom >= 150) {
// //             setActiveSection(id);
// //             break;
// //           }
// //         }
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       <div className="sticky top-0 md:top-[72px] z-40 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 mb-10">
// //         <div className="max-w-[960px] mx-auto px-4">
// //           <nav className="flex gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
// //             {categories.map((cat) => (
// //               <a
// //                 key={cat.id}
// //                 href={`#${cat.id}`}
// //                 className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-all border ${
// //                   activeSection === cat.id
// //                     ? "bg-primary text-white border-primary shadow-md"
// //                     : "bg-transparent text-[#4c6c9a] dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
// //                 }`}
// //               >
// //                 {cat.name}
// //               </a>
// //             ))}
// //           </nav>
// //         </div>
// //       </div>

// //       <style
// //         dangerouslySetInnerHTML={{
// //           __html: `
// //         .no-scrollbar::-webkit-scrollbar { display: none; }
// //         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// //         /* Logic: Updated anchor tags to match the new IDs */
// //         #startup, #registration, #licenses, #compliance, #go-online { scroll-margin-top: 140px; }
// //       `,
// //         }}
// //       />
// //     </>
// //   );
// // };

// // export default ServiceCategories;
// // import React, { useState, useEffect } from "react";

// // const ServiceCategories = () => {
// //   const [activeSection, setActiveSection] = useState("startup");

// //   const categories = [
// //     { name: "For Startup", id: "startup" },
// //     { name: "Registration", id: "registration" },
// //     { name: "Licenses", id: "licenses" },
// //     { name: "Compliance", id: "compliance" },
// //     { name: "Digital Solutions", id: "go-online" },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const sectionIds = categories.map((cat) => cat.id);

// //       for (const id of sectionIds) {
// //         const section = document.getElementById(id);
// //         if (section) {
// //           const rect = section.getBoundingClientRect();
// //           // Logic: Adjusted offset for calculation to account for double navbars
// //           if (rect.top <= 160 && rect.bottom >= 160) {
// //             setActiveSection(id);
// //             break;
// //           }
// //         }
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       {/* Logic Change:
// //           'top-[64px]' ensures it sits BELOW the mobile navbar instead of 'top-0'.
// //           'md:top-[72px]' keeps it below your desktop navbar.
// //       */}
// //       <div className="sticky top-[72px]  z-40 bg-white/80  dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 mb-10">
// //         <div className="max-w-[960px] mx-auto px-4">
// //           <nav className="flex gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
// //             {categories.map((cat) => (
// //               <a
// //                 key={cat.id}
// //                 href={`#${cat.id}`}
// //                 className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-all border ${
// //                   activeSection === cat.id
// //                     ? "bg-primary text-white border-primary shadow-md"
// //                     : "bg-transparent text-[#4c6c9a] dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
// //                 }`}
// //               >
// //                 {cat.name}
// //               </a>
// //             ))}
// //           </nav>
// //         </div>
// //       </div>

// //       <style
// //         dangerouslySetInnerHTML={{
// //           __html: `
// //         .no-scrollbar::-webkit-scrollbar { display: none; }
// //         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

// //         /* Logic: Increased scroll-margin-top from 140px to 200px
// //            to prevent the section title from hiding under the two navbars.
// //         */
// //         #startup, #registration, #licenses, #compliance, #go-online {
// //           scroll-margin-top: 130px;
// //         }

// //         @media (min-width: 768px) {
// //           #startup, #registration, #licenses, #compliance, #go-online {
// //             scroll-margin-top: 160px;
// //           }
// //         }
// //       `,
// //         }}
// //       />
// //     </>
// //   );
// // };

// // export default ServiceCategories;
// import React, { useState, useEffect } from "react"

// const ServiceCategories = () => {
//   const [activeSection, setActiveSection] = useState("startup")

//   const categories = [
//     { name: "For Startup", id: "startup" },
//     { name: "Registration", id: "registration" },
//     { name: "Licenses", id: "licenses" },
//     { name: "Compliance", id: "compliance" },
//     { name: "Digital Solutions", id: "go-online" },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       const sectionIds = categories.map((cat) => cat.id)
//       for (const id of sectionIds) {
//         const section = document.getElementById(id)
//         if (section) {
//           const rect = section.getBoundingClientRect()
//           if (rect.top <= 160 && rect.bottom >= 160) {
//             setActiveSection(id)
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <>
//       {/* 1. Changed bg-white/80 to a conditional slate background for dark mode.
//           2. Added a more distinct border-b for dark mode using border-slate-800.
//       */}
//       <div className="sticky top-[72px] z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 mb-10 transition-colors duration-300">
//         <div className="max-w-6xl mx-auto px-4">
//           <nav className="flex gap-3 overflow-x-auto py-4 no-scrollbar scroll-smooth">
//             {categories.map((cat) => (
//               <a
//                 key={cat.id}
//                 href={`#${cat.id}`}
//                 className={`whitespace-nowrap px-6 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border ${
//                   activeSection === cat.id
//                     ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20 scale-105"
//                     : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white"
//                 }`}
//               >
//                 {cat.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

//         #startup, #registration, #licenses, #compliance, #go-online {
//           scroll-margin-top: 130px;
//         }

//         @media (min-width: 768px) {
//           #startup, #registration, #licenses, #compliance, #go-online {
//             scroll-margin-top: 160px;
//           }
//         }
//       `,
//         }}
//       />
//     </>
//   )
// }

// export default ServiceCategories

import React, { useState, useEffect } from "react"

const ServiceCategories = () => {
  const [activeSection, setActiveSection] = useState("startup")

  const categories = [
    { name: "For Startup", id: "startup" },
    { name: "Registration", id: "registration" },
    { name: "Licenses", id: "licenses" },
    { name: "Compliance", id: "compliance" },
    { name: "Digital Solutions", id: "go-online" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = categories.map((cat) => cat.id)

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* FIXED: Changed bg-white/80 to use 'dark:bg-slate-900/80' 
          FIXED: Changed border-gray-200 to 'dark:border-slate-800'
      */}
      <div className="sticky top-[72px] z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800 mb-10">
        <div className="max-w-[960px] mx-auto px-4">
          <nav className="flex gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-all border ${
                  activeSection === cat.id
                    ? "bg-primary text-white dark:text-black border-primary shadow-md"
                    : // FIXED: Hover state for dark mode
                      "bg-transparent text-[#4c6c9a] dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        #startup, #registration, #licenses, #compliance, #go-online { 
          scroll-margin-top: 130px; 
        }

        @media (min-width: 768px) {
          #startup, #registration, #licenses, #compliance, #go-online { 
            scroll-margin-top: 160px; 
          }
        }
      `,
        }}
      />
    </>
  )
}

export default ServiceCategories
