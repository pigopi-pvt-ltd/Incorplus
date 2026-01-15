import React, { useEffect, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { useRef } from "react";

const CountUp = ({ value, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      // animate() returns controls, we use onUpdate to set standard React state
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
      {displayValue}
      {suffix}
    </span>
  );
};

const StatusBar = () => {
  const stats = [
    { value: 2500, suffix: "+", label: "GST Registrations", decimals: 0 },
    {
      value: 99.8,
      suffix: "%",
      label: "Application Success Rate",
      decimals: 1,
    },
    { value: 3, suffix: " Days", label: "Average Turnaround", decimals: 0 },
    { value: 4.9, suffix: "/5", label: "Customer Rating", decimals: 1 },
  ];

  return (
    <div className="w-full border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-around gap-8 px-6 py-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center min-w-[150px]"
          >
            <span className="text-3xl font-bold text-blue-600">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </span>
            <span className="text-sm font-medium text-slate-500 mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
