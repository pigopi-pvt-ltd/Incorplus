import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "../CommonComponents/ConsultationModal";

const HomeHero = () => {
  // Your set of 5 images
  //   const images = [
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAr0bMg-nXJsDqRUD7AKQASL3gYrw-AhsJq5-m2TqW7b7Xxy1xkJ6CY9eIAC6QMp_3b-PlyuZ4ga7lR_YTtd-Ta7ztHB1ZzLdvphLPpEt1MAV3-xJ5bmWICthGp2PyrWOlKwfKW1IJUQmK1i2zYOypvsEJu0Dyr7R2PX_Jn6_jAt-IiofqAf0zqTR4CM21Ghluc9Y-VWQ6CbOhYSW_NjSOWvHpBYo5cEmmrMgRDqrISzhP8AKPgEkE1r_HW4ZJcefnSFG85ejhcaHZe", // Original image 1
  //     "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
  //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
  //     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  //     "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070",
  //   ];

  // const images = [
  //   "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072", // Tax/ITR/GST
  //   "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070", // Incorporation/Legal/Trademark
  //   "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070", // Funding/Grants/Loans
  //   "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", // MSME/Startup India/FSSAI
  //   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015", // Website Development India
  // ];

  const images = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072", // Tax/ITR/GST (Original)
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070", // Incorporation/Legal/Trademark (Original)

    // REPLACED: Indian Funding (Rupees/Growth)
    // "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=2070&auto=format&fit=crop",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCo74iFzbNXkXozt7YzUynBk9xZOi_oK9r6agmVTY3_UsxR57IvupcuZtFdG0P4llae0BqWeI4tve74OBS7k96zraurzmRTG6wico_n2hl0uMfbmQUYzZveNvEECVZ9zvkzTA61BEYBKR8aVn3OTOKl4B62tlA0xT2ma7O7_ka__tRqo9ObADhpgWbg5fRtYiyOf9gifpPHv-958uhHMA143vyh01t-7CXT1RX3JmBnhX-r0b9llfIRB20f2oQBGt67KppJ8JhJpGT2",
    // REPLACED: Indian MSME/Warehouse (Real startup operations)
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015", // Website Development India (Original)
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-hero-pattern">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:bg-primary-900/20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:bg-indigo-900/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 text-left z-10">
              {/* Badge: Slide from Right */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 w-fit"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
                {/* <span className="text-xs font-bold uppercase tracking-wide text-primary-700 dark:text-primary-300">
                  Trusted by 500+ Founders
                </span> */}
              </motion.div>

              {/* Heading: Slide from Right */}
              <motion.h1
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-slate-900 dark:text-white text-balance"
              >
                Navigate the future of your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                  Startup
                </span>
              </motion.h1>

              {/* Paragraph: Slide from Right */}
              <motion.p
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-xl text-balance"
              >
                We transform complex legal, financial, and digital challenges
                into streamlined growth opportunities for early-stage
                visionaries.
              </motion.p>

              {/* Buttons: Drop from Above */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className="bg-primary-600 hover:bg-primary-700 text-white text-base font-semibold h-14 px-8 rounded-full shadow-xl shadow-primary-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Book Consultation
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
                    arrow_forward
                  </span>
                </button>
                {/* <button className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary-600 dark:hover:border-primary-500 text-base font-semibold h-14 px-8 rounded-full transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    play_circle
                  </span>
                  How we work
                </button> */}
              </motion.div>
              {/* 
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-semibold uppercase text-slate-400 mb-4 tracking-wider">
                  Powering next-gen companies
                </p>
                <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
                  <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-75"></div>
                  <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-150"></div>
                  <div className="h-8 w-24 hidden sm:block bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-200"></div>
                </div>
              </div> */}
            </div>

            {/* Right Side: Scaling Container + Animating Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-3/4 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/20 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${images[index]}')`,
                    }}
                  ></motion.div>
                </AnimatePresence>

                {/* <div className="absolute bottom-12 left-8 z-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-[200px] border border-white/50 dark:border-slate-700 animate-fade-in-up">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400">
                      <span className="material-symbols-outlined text-xl">
                        trending_up
                      </span>
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                      Growth Rate
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">
                      240%
                    </span>
                    <span className="text-xs text-green-600 font-semibold mb-1">
                      ↑ YOY
                    </span>
                  </div>
                </div> */}

                {/* <div className="absolute top-12 -right-4 sm:-right-12 z-20 glass-card p-4 rounded-2xl shadow-xl max-w-[180px] hidden sm:block transform translate-y-4 hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Client Satisfaction
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="material-symbols-outlined text-lg filled">
                        star
                      </span>
                      <span className="material-symbols-outlined text-lg filled">
                        star
                      </span>
                      <span className="material-symbols-outlined text-lg filled">
                        star
                      </span>
                      <span className="material-symbols-outlined text-lg filled">
                        star
                      </span>
                      <span className="material-symbols-outlined text-lg filled">
                        star
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      Based on 500+ reviews
                    </span>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HomeHero;
