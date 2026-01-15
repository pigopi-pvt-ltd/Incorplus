import React from "react";
import { motion } from "framer-motion";

const DocumentsRequired = () => {
  const entityDocs = [
    "Certificate of Incorporation or registration certificate",
    "PAN card of the company",
    "MOA & AOA in case of company and Partnership deed for LLP",
    "List of all directors/members along with their email ID and photograph",
    "URL link of a website and social profile of the entity",
  ];

  const projectDocs = [
    "URL link of social profile of directors/members/partners",
    "Information related to IPR in the name of the entity if it has registered any",
    "Information related to funds if the entity has availed any fund from investors",
    "Innovation statement explaining how your business is unique and scalable",
    "Details of any awards or recognition certificates received by the entity",
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Documents Required for DPIIT Registration
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Increase credibility with more flexibility. Have these ready for a
            smooth filing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Entity Documentation - Slides from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200/60 dark:border-slate-800"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white">
                Entity Documentation
              </h3>
            </div>
            <ul className="space-y-4">
              {entityDocs.map((doc, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="material-symbols-outlined text-blue-600 mt-0.5 group-hover:scale-110 transition-transform">
                    check_circle
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 font-medium">
                    {doc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Project Information - Slides from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200/60 dark:border-slate-800"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white">
                Project Information
              </h3>
            </div>
            <ul className="space-y-4">
              {projectDocs.map((doc, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="material-symbols-outlined text-purple-600 mt-0.5 group-hover:scale-110 transition-transform">
                    check_circle
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 font-medium">
                    {doc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
