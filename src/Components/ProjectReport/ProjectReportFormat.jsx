import React from "react";
import { motion } from "framer-motion";

const ProjectReportFormat = () => {
  const formatItems = [
    {
      icon: "description",
      title: "Introductory Page",
      desc: "Introduction of your business, its aim, and the fundamental purpose behind choosing the venture.",
    },
    {
      icon: "summarize",
      title: "Summary of the Project",
      desc: "Overall status, operational timelines, budget overview, scope, and strategic highlights.",
    },
    {
      icon: "workspace_premium",
      title: "Details of Promoters",
      desc: "Deep dive into promoters' backgrounds, educational qualifications, and industry experience.",
    },
    {
      icon: "diversity_3",
      title: "Details of Employees",
      desc: "Structure of management and staff, roles, responsibilities, and team composition.",
    },
    {
      icon: "corporate_fare",
      title: "Infrastructure Facilities",
      desc: "Details about premises, tools deployed, operational machinery, and facility types used.",
    },
    {
      icon: "person_search",
      title: "Customer Details",
      desc: "Target audience analysis, market demographics, and projected customer capacity.",
    },
    {
      icon: "public",
      title: "Regional Operations",
      desc: "Operational reach including national presence and international branch locations.",
    },
    {
      icon: "handshake",
      title: "Fiscal Acquisitions",
      desc: "Strategic tie-ups, partnerships, and details on any fiscal acquisitions made.",
    },
    {
      icon: "paid",
      title: "Means of Financing",
      desc: "Detailed analysis of funding sources, whether via corporations, partners, or loans.",
    },
    {
      icon: "account_balance_wallet",
      title: "Balance Sheets",
      desc: "Projected balance sheets detailing assets, liabilities, and spending structure.",
    },
    {
      icon: "monitoring",
      title: "Profit & Loss Statements",
      desc: "Comprehensive P&L projections estimating revenue, expenses, and net profits.",
    },
    {
      icon: "compare_arrows",
      title: "Fund Flow Statement",
      desc: "Analysis of corporate or government funding usage and flow within the entity.",
    },
    {
      icon: "balance",
      title: "Break Even Points",
      desc: "Critical evaluations to determine when your business will start generating profit.",
    },
    {
      icon: "verified",
      title: "Conclusion",
      desc: "Final assessment summarizing the feasibility and success potential of the project.",
    },
  ];

  // Animation variants for the container
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  // Animation variants for individual items
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-18 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-black mb-4  tracking-normal text-slate-900 dark:text-white">
            Format of Project Report
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg">
            Every detail matters when it comes to securing funding. Here's
            everything included in our comprehensive professional reports.
          </p>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {formatItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVars}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-blue-600/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl cursor-default"
            >
              {/* Icon with morphing effect */}
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectReportFormat;
