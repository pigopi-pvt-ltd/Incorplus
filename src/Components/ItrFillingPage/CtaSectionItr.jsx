import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ConsultationModal from "../CommonComponents/ConsultationModal";

const CtaSectionItr = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="py-10 px-3 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 md:p-16 relative shadow-2xl overflow-hidden"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Confused about which ITR to file?
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium"
            >
              Don't risk a notice from the IT Department. Talk to our Chartered
              Accountants today for a free assessment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => {
                  setIsModalOpen(true);
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                Book Free Consultation
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                onClick={() => {
                  navigate("/services");
                }}
                className="px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold text-lg transition-all"
              >
                View All Services
              </motion.button>
            </motion.div>

            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-blue-200 text-sm font-semibold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available Now: 12 Tax Experts Online
            </motion.div>
          </div>
        </motion.div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CtaSectionItr;
