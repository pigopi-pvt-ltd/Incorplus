import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WorkInProgress = ({ title = "Section" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      {/* Background Glows for Glamorphism */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-lg w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/20 dark:border-slate-800 p-10 rounded-[2.5rem] shadow-2xl text-center"
      >
        {/* Animated Construction Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <span className="material-symbols-outlined text-5xl">handyman</span>
        </motion.div>

        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
          {title} is Coming Soon
        </h1>

        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          We're currently polishing the final details of this page. Hang tight,
          something amazing is on its way!
        </p>

        {/* Animated Progress Track */}
        <div className="relative w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-10">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="group flex items-center justify-center gap-2 mx-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 dark:hover:bg-blue-50 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Go Back
        </button>
      </motion.div>
    </div>
  );
};

export default WorkInProgress;
