import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] opacity-40 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl dark:opacity-20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl dark:opacity-20"></div>
      </div>

      <section className="relative z-10 px-6 pt-8 pb-12  md:pb-20 lg:px-40 flex justify-center">
        <div className="max-w-4xl text-center flex flex-col gap-6">
          {/* Tagline Animation */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            Contact Us
          </motion.span>

          {/* Title Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-tight"
          >
            Let’s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
              Great Together
            </span>
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            We're here to help your startup scale. Reach out for expert legal,
            financial, and digital guidance tailored to your vision.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default ContactHero;
