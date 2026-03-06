import React, { useState, useEffect } from "react"
import { Check, Zap, Building2, Crown, ArrowRight, ShieldCheck, PieChart, Globe, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const Pricing = () => {
  const [activeSection, setActiveSection] = useState("basic")

  const tiers = [
    {
      name: "Basic",
      id: "basic",
      icon: Zap,
      price: "25K",
      description: "Foundational registration for new startups.",
      color: "blue",
      benefits: [
        "Company Registration",
        "DPIIT Certificate",
        "Funding Consultation",
        "Report Preparation",
        "Application Process Support",
      ],
    },
    {
      name: "Growth",
      id: "growth",
      icon: Rocket,
      price: "40K",
      description: "Comprehensive support for expanding businesses.",
      color: "indigo",
      popular: true,
      benefits: [
        "Company Registration",
        "DPIIT Certificate",
        "Funding Consultation",
        "Report Preparation",
        "Application Process Support",
        "Full Business Compliance",
      ],
    },
    {
      name: "Premium",
      id: "premium",
      icon: Crown,
      price: "1.2L",
      description: "All-in-one elite startup ecosystem setup.",
      color: "slate",
      benefits: [
        "Company Registration",
        "DPIIT Certificate",
        "Funding Consultation",
        "Report Preparation",
        "Application Process Support",
        "Full Business Compliance",
        "Professional Website",
        "3 Month Marketing Setup",
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = tiers.map((t) => t.id)
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-5 text-center">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-blue-600 font-black uppercase text-xs tracking-[0.2em]"
        >
          Pricing Plans
        </motion.span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
          Ready to grow?
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <section key={tier.id} id={tier.id} className="flex flex-col scroll-mt-48">
            <motion.div
              whileHover={{ y: -5 }}
              className={`relative flex flex-col w-full h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border-2 transition-all duration-300 ${
                tier.popular 
                ? "border-blue-500 shadow-xl shadow-blue-500/10 z-10" 
                : "border-slate-100 dark:border-slate-800"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  tier.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' : 
                  tier.color === 'indigo' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20' : 
                  'bg-slate-100 text-slate-600 dark:bg-slate-800'
                }`}>
                  <tier.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">
                    ₹{tier.price}
                  </span>
                  <span className="text-slate-400 font-bold text-sm">/package</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Included Services:</p>
                {tier.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-0.5 rounded-full shrink-0">
                      <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group mt-auto ${
                tier.popular 
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20" 
                : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}>
                Choose {tier.name}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Pricing
