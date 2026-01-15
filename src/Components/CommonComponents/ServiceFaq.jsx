// const ReusableFAQ = ({ faqs }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div className="space-y-3">
//       {faqs.map((faq, idx) => (
//         <div
//           key={idx}
//           className="border-b border-slate-200 dark:border-slate-800"
//         >
//           <button
//             onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//             className="w-full py-4 flex justify-between items-center text-left font-bold text-slate-800 dark:text-slate-200"
//           >
//             <span>{faq.q}</span>
//             <span className="material-symbols-outlined">
//               {openIndex === idx ? "remove" : "add"}
//             </span>
//           </button>
//           {openIndex === idx && (
//             <div className="pb-4 text-slate-500 text-sm animate-in fade-in slide-in-from-top-2">
//               {faq.a}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS_DATA } from "../AllServicesPage/ServicesData"; // Adjust path as needed

const ServiceFaq = ({ serviceTitle }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Find the specific service data from your big SECTIONS_DATA array
  const currentService = SECTIONS_DATA.flatMap((section) => section.items).find(
    (item) => item.title === serviceTitle
  );

  if (!currentService || !currentService.faqs) return null;

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Common Questions
          </h2>
          <p className="text-slate-500 mt-2">
            Everything you need to know about {serviceTitle}
          </p>
        </div>

        <div className="space-y-4">
          {currentService.faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-bold transition-colors ${
                    openIndex === idx
                      ? "text-blue-600"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="material-symbols-outlined text-slate-400"
                >
                  expand_more
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-4 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
