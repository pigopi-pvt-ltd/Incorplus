import React from "react";
import { motion } from "framer-motion";

const DocsChecklist = () => {
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const checklist = [
    {
      title: "PAN Card",
      icon: "badge",
      desc: "PAN Card of the Business or Applicant (Proprietor/Director).",
    },
    {
      title: "Identity Proof",
      icon: "fingerprint",
      desc: "Aadhar Card and Passport photos of Promoters/Directors.",
    },
    {
      title: "Address Proof",
      icon: "location_on",
      desc: "Electricity Bill, Rent Agreement, or NOC for the registered office.",
    },
    {
      title: "Bank Proof",
      icon: "account_balance",
      desc: "Cancelled Cheque or Bank Statement showing account holder name.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#101822] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Side: Animated Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply z-10"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop')`,
                }}
              />

              {/* Security Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-6 backdrop-blur-sm shadow-lg dark:bg-slate-800/95 z-20 border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#0d131b] dark:text-white">
                      100% Data Secure
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-300">
                      Your documents are encrypted and safe.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Checklist Content */}
          <div className="flex flex-col gap-8 lg:w-1/2 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#0d131b] dark:text-white">
                Documents Required
              </h2>
              <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
                Simple paperwork to get you started.
              </p>
            </motion.div>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="flex flex-col gap-4"
            >
              {checklist.map((item, index) => (
                <motion.div
                  key={index}
                  variants={listItem}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4 transition-colors hover:bg-white dark:hover:bg-slate-800 hover:shadow-md border-l-4 hover:border-l-blue-600"
                >
                  <span className="material-symbols-outlined mt-0.5 text-blue-600">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-[#0d131b] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsChecklist;
