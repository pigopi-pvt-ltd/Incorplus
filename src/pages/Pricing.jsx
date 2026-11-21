import React, { useState, useEffect } from "react"
import {
  Check,
  Zap,
  Rocket,
  Crown,
  ArrowRight,
  ShieldCheck,
  Lock,
  User,
  Mail,
  Phone,
  X,
  Loader2,
  CreditCard,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { initiatePayment, redirectToPayUGateway } from "../services/paymentService"

const Pricing = () => {
  const [activeSection, setActiveSection] = useState("basic")
  const [selectedTier, setSelectedTier] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const tiers = [
    {
      name: "Basic",
      id: "basic",
      icon: Zap,
      price: "25K",
      numericPrice: 25000,
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
      price: "45K",
      numericPrice: 45000,
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
      price: "95K",
      numericPrice: 95000,
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

  const handleOpenModal = (tier) => {
    setSelectedTier(tier)
    setErrorMessage("")
  }

  const handleCloseModal = () => {
    if (isSubmitting) return
    setSelectedTier(null)
    setErrorMessage("")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitPayment = async (e) => {
    e.preventDefault()
    setErrorMessage("")

    // Basic client validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.")
      return
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.")
      return
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "")
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await initiatePayment({
        amount: selectedTier.numericPrice,
        tierId: selectedTier.id,
        firstname: formData.name.trim(),
        email: formData.email.trim(),
        phone: cleanPhone.slice(-10),
        productinfo: `${selectedTier.name} Startup Package`,
      })

      // Redirect user to PayU Hosted Checkout
      redirectToPayUGateway({
        payuUrl: result.payuUrl,
        params: result.params,
      })
    } catch (err) {
      setIsSubmitting(false)
      setErrorMessage(
        err.message || "Failed to initiate payment. Please verify backend is running."
      )
    }
  }

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
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
          Choose the right plan for your startup venture. Secure payments powered by PayU.
        </p>
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
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    tier.color === "blue"
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                      : tier.color === "indigo"
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20"
                      : "bg-slate-100 text-slate-600 dark:bg-slate-800"
                  }`}
                >
                  <tier.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
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
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Included Services:
                </p>
                {tier.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-0.5 rounded-full shrink-0">
                      <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleOpenModal(tier)}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group mt-auto cursor-pointer ${
                  tier.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                Choose {tier.name}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <button
                type="button"
                onClick={handleCloseModal}
                disabled={isSubmitting}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                  <CreditCard size={14} />
                  PayU Checkout
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Checkout - {selectedTier.name} Plan
                </h2>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-blue-600 dark:text-blue-400">
                    ₹{selectedTier.numericPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">One-time package</span>
                </div>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmitPayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@startup.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Connecting to PayU...
                      </>
                    ) : (
                      <>
                        <Lock size={16} />
                        Pay ₹{selectedTier.numericPrice.toLocaleString("en-IN")} via PayU
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400 font-medium text-center">
                  <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                  <span>Supports UPI, Cards, NetBanking & Wallets. 256-Bit SSL Encrypted.</span>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Pricing
