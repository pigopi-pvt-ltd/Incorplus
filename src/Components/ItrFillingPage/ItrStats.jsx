import React, { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

const CountUp = ({ value, suffix = "", prefix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Removed once: true
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(latest.toFixed(decimals)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

const ItrStats = () => {
  const stats = [
    {
      value: 100,
      suffix: "%",
      label: "On Time Delivery",
      prefix: "",
      decimals: 0,
    },
    {
      value: 98,
      suffix: "%",
      label: "Satisfied Clients",
      prefix: "",
      decimals: 0,
    },
    {
      value: 45,
      suffix: "+",
      label: "Quality Checkpoints",
      prefix: "",
      decimals: 0,
    },
    {
      value: 100,
      suffix: "%",
      label: "Support Provided",
      prefix: "",
      decimals: 0,
    },
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItrStats;
