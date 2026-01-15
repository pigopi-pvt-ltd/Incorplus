// import React, { useState, useMemo, useRef, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Fuse from "fuse.js"
// import { SECTIONS_DATA } from "../AllServicesPage/ServicesData"
// import GoogleMapsImage from "../../assets/GoogleMaps.png"

// const ContactFormSection = () => {
//   // 1. Flatten services for Fuse.js
//   const allServices = useMemo(() => {
//     return SECTIONS_DATA.flatMap((section) =>
//       section.items.map((item) => ({
//         title: item.title,
//         category: section.title,
//         icon: item.catIcon,
//       }))
//     )
//   }, [])

//   // 2. Initialize Fuse.js
//   const fuse = useMemo(
//     () =>
//       new Fuse(allServices, {
//         keys: ["title", "category"],
//         threshold: 0.4,
//       }),
//     [allServices]
//   )

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     selectedService: "",
//     message: "",
//   })

//   const [searchQuery, setSearchQuery] = useState("")
//   const [suggestions, setSuggestions] = useState([])
//   const [showSuggestions, setShowSuggestions] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSent, setIsSent] = useState(false)
//   const [status, setStatus] = useState("")
//   const suggestionRef = useRef(null)

//   // Close suggestions on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
//         setShowSuggestions(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   const handleSearchChange = (e) => {
//     const val = e.target.value
//     setSearchQuery(val)
//     setFormData((prev) => ({ ...prev, selectedService: val }))

//     if (val.length > 0) {
//       const results = fuse.search(val).map((r) => r.item)
//       setSuggestions(results.slice(0, 5))
//       setShowSuggestions(true)
//     } else {
//       setSuggestions([])
//       setShowSuggestions(false)
//     }
//   }

//   const selectSuggestion = (service) => {
//     setSearchQuery(service.title)
//     setFormData((prev) => ({ ...prev, selectedService: service.title }))
//     setShowSuggestions(false)
//   }

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     try {
//       // const GOOGLE_SCRIPT_URL =
//       //   "https://script.google.com/macros/s/AKfycbzt8wTej5fJm_5YNaaPG_a7eqWPF96gXl7psWkFkw3v3xQL76KYOsUeEkTgIfQcjY5c/exec";
//       const GOOGLE_SCRIPT_URL =
//         "https://script.google.com/macros/s/AKfycbwFK4NqnwfAO6MrzNxZvRR6Lkrc9UIe4Kt_4zsCMtijBssF6iD-qCYSF0guGXSFbmPP/exec"
//       const response = await fetch(GOOGLE_SCRIPT_URL, {
//         method: "POST",
//         headers: { "Content-Type": "text/plain;charset=utf-8" },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         setFormData({
//           name: "",
//           email: "",
//           number: "",
//           selectedService: "",
//           message: "",
//         })
//         setSearchQuery("")
//         setStatus("Submitted successfully!")
//         setIsSent(true)
//       } else {
//         setStatus("Failed to submit.")
//       }
//     } catch (error) {
//       console.error("Error:", error)
//       setStatus("Error submitting form.")
//     }
//     setIsSubmitting(false)
//   }

//   return (
//     <section className="relative mt-8 z-10 px-6 lg:px-40 pb-20 flex justify-center bg-background-light dark:bg-background-dark">
//       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
//         {/* Left Column: Contact Details (Restored Original) */}
//         <div className="lg:col-span-5 flex flex-col gap-10 py-10">
//           <div className="grid grid-cols-1 gap-4">
//             <a
//               className="group flex items-start gap-5 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
//               href="https://www.google.com/maps/search/?api=1&query=Incorplus+Ventures"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
//                 <span className="material-symbols-outlined text-red-400">
//                   location_on
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">
//                   Our Office
//                 </h3>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
//                   D-242, Noida sector 63,
//                   <br />
//                   Electronic City 201301
//                 </p>
//               </div>
//             </a>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <a
//                 className="group flex flex-col p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
//                 href="tel:+919129134553"
//               >
//                 <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <span className="material-symbols-outlined text-red-400">
//                     call
//                   </span>
//                 </div>
//                 <h3 className="text-slate-900 dark:text-white font-bold text-base">
//                   Phone
//                 </h3>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm">
//                   +91 (912) 913-4553
//                 </p>
//               </a>

//               <a
//                 className="group flex flex-col p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
//                 href="mailto:info@incorplusventure.com"
//               >
//                 <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <span className="material-symbols-outlined text-lg text-red-400 transition-colors">
//                     drafts
//                   </span>
//                 </div>
//                 <h3 className="text-slate-900 dark:text-white font-bold text-base">
//                   Email
//                 </h3>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm truncate">
//                   info@incorplusventure.com
//                 </p>
//               </a>
//             </div>
//           </div>

//           <div
//             onClick={() =>
//               window.open(
//                 "https://www.google.com/maps/search/?api=1&query=Incorplus+Ventures",
//                 "_blank"
//               )
//             }
//             className="w-full h-64 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer"
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//               style={{ backgroundImage: `url(${GoogleMapsImage})` }}
//             ></div>
//             <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300"></div>
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//               <div className="bg-white p-3 rounded-full shadow-lg animate-bounce">
//                 <span className="material-symbols-outlined text-primary text-2xl">
//                   location_on
//                 </span>
//               </div>
//             </div>
//             <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
//               View on Google Maps
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Contact Form */}
//         <div className="lg:col-span-7 py-10">
//           <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 md:p-12 h-full w-full">
//             <div className="mb-10">
//               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
//                 Send us a Message
//               </h2>
//               <p className="text-slate-500 dark:text-slate-400 text-base">
//                 We usually respond within 24 hours. No spam, promised.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-6 w-full"
//             >
//               <FormInput
//                 label="Full Name"
//                 id="name"
//                 icon="person"
//                 placeholder="e.g. Sonu Nigam"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormInput
//                   label="Email Address"
//                   id="email"
//                   icon="mail"
//                   type="email"
//                   placeholder="sonu@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <FormInput
//                   label="Phone Number"
//                   id="number"
//                   icon="call"
//                   type="tel"
//                   placeholder="9994578434"
//                   value={formData.number}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* REPLACED SELECT WITH SEARCH + SUGGESTIONS */}
//               <div className="group relative" ref={suggestionRef}>
//                 <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors">
//                   Topic of Interest
//                 </label>
//                 <div className="relative">
//                   <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
//                     category
//                   </span>
//                   <input
//                     type="text"
//                     autoComplete="off"
//                     className="w-full h-14 rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white pl-12 pr-5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
//                     placeholder="Search e.g. GST, Logo, Registration..."
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     onFocus={() =>
//                       searchQuery.length > 0 && setShowSuggestions(true)
//                     }
//                     required
//                   />

//                   <AnimatePresence>
//                     {showSuggestions && suggestions.length > 0 && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
//                       >
//                         {suggestions.map((s, i) => (
//                           <div
//                             key={i}
//                             onClick={() => selectSuggestion(s)}
//                             className="px-5 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer flex justify-between items-center transition-colors border-b last:border-0 border-slate-50 dark:border-slate-800"
//                           >
//                             <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
//                               {s.title}
//                             </span>
//                             <span className="text-[10px] font-bold text-primary uppercase tracking-tighter bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded-md">
//                               {s.category}
//                             </span>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>

//               <div className="group">
//                 <label
//                   className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors"
//                   htmlFor="message"
//                 >
//                   How can we help?
//                 </label>
//                 <div className="relative">
//                   <span className="material-symbols-outlined absolute left-5 top-6 text-slate-400 group-focus-within:text-primary transition-colors">
//                     chat_bubble
//                   </span>
//                   <textarea
//                     className="w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white p-5 pl-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
//                     id="message"
//                     placeholder="Tell us about your project..."
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="pt-4">
//                 <button
//                   disabled={isSubmitting || isSent}
//                   className={`w-full h-14 font-bold text-lg rounded-xl shadow-lg transition-all duration-300 transform flex items-center justify-center gap-3 group ${
//                     isSent
//                       ? "bg-green-500 text-white"
//                       : "bg-primary hover:bg-primary-dark text-white hover:-translate-y-1"
//                   }`}
//                   type="submit"
//                 >
//                   {isSubmitting ? (
//                     <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   ) : isSent ? (
//                     <>
//                       <span>Message Sent!</span>
//                       <span className="material-symbols-outlined">
//                         check_circle
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       <span>Send Message</span>
//                       <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
//                         send
//                       </span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const FormInput = ({ label, id, icon, ...props }) => (
//   <div className="group">
//     <label
//       className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 transition-colors group-focus-within:text-primary"
//       htmlFor={id}
//     >
//       {label}
//     </label>
//     <div className="relative">
//       {icon && (
//         <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
//           {icon}
//         </span>
//       )}
//       <input
//         className={`w-full h-14 rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white ${
//           icon ? "pl-12" : "px-5"
//         } pr-5 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-slate-900 focus:-translate-y-1 focus:shadow-lg placeholder:text-slate-400`}
//         id={id}
//         {...props}
//       />
//     </div>
//   </div>
// )

// export default ContactFormSection
import React, { useState, useMemo, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Fuse from "fuse.js"
import { SECTIONS_DATA } from "../AllServicesPage/ServicesData"
import GoogleMapsImage from "../../assets/GoogleMaps.png"

const ContactFormSection = () => {
  // 1. Flatten services for Fuse.js
  const allServices = useMemo(() => {
    return SECTIONS_DATA.flatMap((section) =>
      section.items.map((item) => ({
        title: item.title,
        category: section.title,
        icon: item.catIcon,
      }))
    )
  }, [])

  // 2. Initialize Fuse.js
  const fuse = useMemo(
    () =>
      new Fuse(allServices, {
        keys: ["title", "category"],
        threshold: 0.4,
      }),
    [allServices]
  )

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    selectedService: "",
    message: "",
  })

  // --- NEW: Error State ---
  const [errors, setErrors] = useState({})
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [status, setStatus] = useState("")
  const suggestionRef = useRef(null)

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // --- NEW: Validation Logic ---
  const validate = () => {
    let tempErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required"
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name is too short"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      tempErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address"
    }

    // Phone validation (Optional but must be 10 digits if provided)
    if (formData.number && !/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Please enter a valid 10-digit phone number"
    }

    // Service validation
    if (!formData.selectedService) {
      tempErrors.selectedService = "Please select a topic of interest"
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = "Please enter your message"
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSearchChange = (e) => {
    const val = e.target.value
    setSearchQuery(val)
    setFormData((prev) => ({ ...prev, selectedService: val }))

    // Clear error for this field when user types
    if (errors.selectedService)
      setErrors((prev) => ({ ...prev, selectedService: null }))

    if (val.length > 0) {
      const results = fuse.search(val).map((r) => r.item)
      setSuggestions(results.slice(0, 5))
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const selectSuggestion = (service) => {
    setSearchQuery(service.title)
    setFormData((prev) => ({ ...prev, selectedService: service.title }))
    setShowSuggestions(false)
    if (errors.selectedService)
      setErrors((prev) => ({ ...prev, selectedService: null }))
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
    // Clear error for this field when user types
    if (errors[e.target.id]) {
      setErrors((prev) => ({ ...prev, [e.target.id]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Trigger Validation
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwFK4NqnwfAO6MrzNxZvRR6Lkrc9UIe4Kt_4zsCMtijBssF6iD-qCYSF0guGXSFbmPP/exec"
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          number: "",
          selectedService: "",
          message: "",
        })
        setSearchQuery("")
        setErrors({})
        setStatus("Submitted successfully!")
        setIsSent(true)
      } else {
        setStatus("Failed to submit.")
      }
    } catch (error) {
      console.error("Error:", error)
      setStatus("Error submitting form.")
    }
    setIsSubmitting(false)
  }

  return (
    <section className="relative mt-8 z-10 px-6 lg:px-40 pb-20 flex justify-center bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-5 flex flex-col gap-10 py-10">
          <div className="grid grid-cols-1 gap-4">
            <a
              className="group flex items-start gap-5 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              href="https://www.google.com/maps/search/?api=1&query=Incorplus+Ventures"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-red-400">
                  location_on
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">
                  Our Office
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  D-242, Noida sector 63,
                  <br />
                  Electronic City 201301
                </p>
              </div>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                className="group flex flex-col p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                href="tel:+919129134553"
              >
                <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-red-400">
                    call
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-base">
                  Phone
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  +91 (912) 913-4553
                </p>
              </a>

              <a
                className="group flex flex-col p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                href="mailto:info@incorplusventure.com"
              >
                <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-lg text-red-400 transition-colors">
                    drafts
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-base">
                  Email
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm truncate">
                  info@incorplusventure.com
                </p>
              </a>
            </div>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Incorplus+Ventures",
                "_blank"
              )
            }
            className="w-full h-64 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${GoogleMapsImage})` }}
            ></div>
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="material-symbols-outlined text-primary text-2xl">
                  location_on
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
              View on Google Maps
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 py-10">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 md:p-12 h-full w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Send us a Message
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                We usually respond within 24 hours. No spam, promised.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
              noValidate
            >
              <FormInput
                label="Full Name"
                id="name"
                icon="person"
                placeholder="e.g. Sonu Nigam"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Email Address"
                  id="email"
                  icon="mail"
                  type="email"
                  placeholder="sonu@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormInput
                  label="Phone Number"
                  id="number"
                  icon="call"
                  type="tel"
                  placeholder="9994578434"
                  value={formData.number}
                  onChange={handleChange}
                  error={errors.number}
                />
              </div>

              {/* SERVICE SEARCH WITH SUGGESTIONS */}
              <div className="group relative" ref={suggestionRef}>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors">
                  Topic of Interest
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    category
                  </span>
                  <input
                    type="text"
                    autoComplete="off"
                    className={`w-full h-14 rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white pl-12 pr-5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      errors.selectedService
                        ? "border-red-500 ring-1 ring-red-500"
                        : ""
                    }`}
                    placeholder="Search e.g. GST, Logo, Registration..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() =>
                      searchQuery.length > 0 && setShowSuggestions(true)
                    }
                  />

                  <AnimatePresence>
                    {showSuggestions && suggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
                      >
                        {suggestions.map((s, i) => (
                          <div
                            key={i}
                            onClick={() => selectSuggestion(s)}
                            className="px-5 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer flex justify-between items-center transition-colors border-b last:border-0 border-slate-50 dark:border-slate-800"
                          >
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                              {s.title}
                            </span>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded-md">
                              {s.category}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.selectedService && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.selectedService}
                  </p>
                )}
              </div>

              <div className="group">
                <label
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors"
                  htmlFor="message"
                >
                  How can we help?
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-5 top-6 text-slate-400 group-focus-within:text-primary transition-colors">
                    chat_bubble
                  </span>
                  <textarea
                    className={`w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white p-5 pl-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${
                      errors.message ? "border-red-500 ring-1 ring-red-500" : ""
                    }`}
                    id="message"
                    placeholder="Tell us about your project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  disabled={isSubmitting || isSent}
                  className={`w-full h-14 font-bold text-lg rounded-xl shadow-lg transition-all duration-300 transform flex items-center justify-center gap-3 group ${
                    isSent
                      ? "bg-green-500 text-white "
                      : "bg-primary hover:bg-primary-dark text-white dark:text-black hover:-translate-y-1"
                  }`}
                  type="submit"
                >
                  {isSubmitting ? (
                    <div className="size-6 border-2 border-white/30 border-t-white  dark:text-black rounded-full animate-spin"></div>
                  ) : isSent ? (
                    <>
                      <span>Message Sent!</span>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                        send
                      </span>
                    </>
                  )}
                </button>
                {status && !isSent && (
                  <p
                    className={`text-center mt-3 text-sm font-medium ${
                      status.includes("successfully")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const FormInput = ({ label, id, icon, error, ...props }) => (
  <div className="group">
    <label
      className={`block text-sm font-semibold mb-2 transition-colors ${
        error
          ? "text-red-500"
          : "text-slate-700 dark:text-slate-300 group-focus-within:text-primary"
      }`}
      htmlFor={id}
    >
      {label}
    </label>
    <div className="relative">
      {icon && (
        <span
          className={`material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${
            error
              ? "text-red-400"
              : "text-slate-400 group-focus-within:text-primary"
          }`}
        >
          {icon}
        </span>
      )}
      <input
        className={`w-full h-14 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white ${
          icon ? "pl-12" : "px-5"
        } pr-5 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white dark:focus:bg-slate-900 focus:-translate-y-1 focus:shadow-lg placeholder:text-slate-400 ${
          error
            ? "border-red-500 ring-1 ring-red-500"
            : "border-slate-200 dark:border-slate-600"
        }`}
        id={id}
        {...props}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
  </div>
)

export default ContactFormSection
