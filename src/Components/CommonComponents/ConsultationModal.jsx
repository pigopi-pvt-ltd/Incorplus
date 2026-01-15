// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { SECTIONS_DATA } from "../AllServicesPage/ServicesData"

// const ConsultationModal = ({ isOpen, onClose, selectedPlan }) => {
//   // --- INJECTED CSS ---
//   const customStyles = `
//     .custom-v-scrollbar::-webkit-scrollbar { width: 5px; }
//     .custom-v-scrollbar::-webkit-scrollbar-button { display: none; }
//     .custom-v-scrollbar::-webkit-scrollbar-track { background: transparent; }
//     .custom-v-scrollbar::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 10px; }
//     .custom-h-scrollbar::-webkit-scrollbar { height: 4px; }
//     .custom-h-scrollbar::-webkit-scrollbar-button { display: none; }
//     .custom-h-scrollbar::-webkit-scrollbar-track { background: rgba(37, 99, 235, 0.05); border-radius: 10px; }
//     .custom-h-scrollbar::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 10px; }
//     .custom-v-scrollbar, .custom-h-scrollbar { scrollbar-width: thin; scrollbar-color: #2563eb transparent; }
//   `

//   const initialCategory =
//     SECTIONS_DATA.find((section) =>
//       section.items.some((item) => item.title === selectedPlan)
//     )?.id || SECTIONS_DATA[0].id

//   // --- FORM STATE ---
//   const [activeTab, setActiveTab] = useState(initialCategory)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     selectedService: selectedPlan || "",
//     message: "",
//   })

//   // --- UI STATE ---
//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSent, setIsSent] = useState(false)
//   const [status, setStatus] = useState("")

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//       if (selectedPlan) {
//         const cat = SECTIONS_DATA.find((s) =>
//           s.items.some((i) => i.title === selectedPlan)
//         )
//         if (cat) setActiveTab(cat.id)
//         setFormData((prev) => ({ ...prev, selectedService: selectedPlan }))
//       }
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isOpen, selectedPlan])

//   const currentSection = SECTIONS_DATA.find((s) => s.id === activeTab)

//   // --- HANDLERS ---
//   const handleChange = (e) => {
//     const { id, value } = e.target
//     setFormData((prev) => ({ ...prev, [id]: value }))
//     if (errors[id])
//       setErrors((prev) => {
//         const newErrs = { ...prev }
//         delete newErrs[id]
//         return newErrs
//       })
//   }

//   const setSelectedService = (title) => {
//     setFormData((prev) => ({ ...prev, selectedService: title }))
//   }

//   const validate = () => {
//     let tempErrors = {}
//     if (!formData.name.trim()) tempErrors.name = "Full name is required"

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!formData.email.trim()) {
//       tempErrors.email = "Email is required"
//     } else if (!emailRegex.test(formData.email)) {
//       tempErrors.email = "Invalid email format"
//     }

//     if (!formData.number.trim()) {
//       tempErrors.number = "Phone is required"
//     } else if (!/^\d{10}$/.test(formData.number)) {
//       tempErrors.number = "Enter a 10-digit number"
//     }

//     if (!formData.message.trim())
//       tempErrors.message = "Please describe your needs"

//     setErrors(tempErrors)
//     return Object.keys(tempErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validate()) return

//     setIsSubmitting(true)
//     setStatus("")

//     try {
//       const GOOGLE_SCRIPT_URL =
//         "https://script.google.com/macros/s/AKfycbwFK4NqnwfAO6MrzNxZvRR6Lkrc9UIe4Kt_4zsCMtijBssF6iD-qCYSF0guGXSFbmPP/exec"

//       const response = await fetch(GOOGLE_SCRIPT_URL, {
//         method: "POST",
//         headers: { "Content-Type": "text/plain;charset=utf-8" },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         setIsSent(true)
//         setStatus("Booking Successful!")
//         setTimeout(() => {
//           onClose()
//           setIsSent(false)
//           setFormData({
//             name: "",
//             email: "",
//             number: "",
//             selectedService: "",
//             message: "",
//           })
//           setErrors({})
//         }, 2000)
//       } else {
//         setStatus("Submission failed.")
//       }
//     } catch (error) {
//       setStatus("Network error.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//           <style>{customStyles}</style>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden border border-slate-200 dark:border-slate-800"
//           >
//             {/* 1. HEADER */}
//             <div className="px-6 pt-5 pb-2 shrink-0">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
//                     Consultation
//                   </h2>
//                   <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
//                     Pick a service to talk with our experts.
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
//                 >
//                   <span className="material-symbols-outlined text-xl dark:text-slate-300">
//                     close
//                   </span>
//                 </button>
//               </div>

//               {/* 2. CATEGORY TABS */}
//               <div className="flex gap-1.5 mt-4 overflow-x-auto pb-3 custom-h-scrollbar">
//                 {SECTIONS_DATA.map((section) => (
//                   <button
//                     key={section.id}
//                     type="button"
//                     onClick={() => setActiveTab(section.id)}
//                     className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap border transition-all font-bold text-[10px] uppercase tracking-wider ${
//                       activeTab === section.id
//                         ? "border-blue-600 bg-blue-600 text-white"
//                         : "border-slate-100 bg-slate-50 text-slate-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
//                     }`}
//                   >
//                     <span className="material-symbols-outlined text-sm">
//                       {section.icon}
//                     </span>
//                     {section.title}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* 3. MAIN BODY */}
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col flex-1 overflow-hidden"
//             >
//               <div className="px-6 py-4 overflow-y-auto flex-1 custom-v-scrollbar">
//                 {/* SERVICE GRID */}
//                 <div className="grid grid-cols-2 gap-2 p-1">
//                   {currentSection.items.map((item) => (
//                     <button
//                       key={item.title}
//                       type="button"
//                       onClick={() => setSelectedService(item.title)}
//                       className={`p-2.5 rounded-xl border transition-all flex items-center gap-2.5 relative ${
//                         formData.selectedService === item.title
//                           ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/30 shadow-sm"
//                           : "border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 bg-slate-50/30"
//                       }`}
//                     >
//                       <span
//                         className={`material-symbols-outlined text-lg ${
//                           formData.selectedService === item.title
//                             ? "text-blue-600 dark:text-blue-400"
//                             : "text-slate-400 dark:text-slate-500"
//                         }`}
//                       >
//                         {item.catIcon}
//                       </span>
//                       <span
//                         className={`text-[11px] font-semibold leading-tight flex-1 text-left ${
//                           formData.selectedService === item.title
//                             ? "text-blue-700 dark:text-blue-300"
//                             : "text-slate-600 dark:text-slate-200"
//                         }`}
//                       >
//                         {item.title}
//                       </span>
//                       {formData.selectedService === item.title && (
//                         <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
//                       )}
//                     </button>
//                   ))}
//                 </div>

//                 {/* FORM FIELDS */}
//                 <div className="mt-6 space-y-4 pb-2">
//                   <div className="h-px bg-slate-100 dark:bg-slate-800 w-full mb-4" />

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="flex flex-col gap-1">
//                       <div className="relative group">
//                         <span
//                           className={`absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-lg transition-colors ${
//                             errors.name
//                               ? "text-red-500"
//                               : "text-slate-400 group-focus-within:text-blue-500"
//                           }`}
//                         >
//                           person
//                         </span>
//                         <input
//                           id="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white ${
//                             errors.name
//                               ? "border-red-500 ring-1 ring-red-500/20"
//                               : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
//                           }`}
//                           placeholder="Full Name"
//                         />
//                       </div>
//                       {errors.name && (
//                         <p className="text-[10px] text-red-500 font-bold ml-1">
//                           {errors.name}
//                         </p>
//                       )}
//                     </div>

//                     <div className="flex flex-col gap-1">
//                       <div className="relative group">
//                         <span
//                           className={`absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-lg transition-colors ${
//                             errors.number
//                               ? "text-red-500"
//                               : "text-slate-400 group-focus-within:text-blue-500"
//                           }`}
//                         >
//                           call
//                         </span>
//                         <input
//                           id="number"
//                           type="tel"
//                           value={formData.number}
//                           onChange={handleChange}
//                           className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white ${
//                             errors.number
//                               ? "border-red-500 ring-1 ring-red-500/20"
//                               : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
//                           }`}
//                           placeholder="Phone Number"
//                         />
//                       </div>
//                       {errors.number && (
//                         <p className="text-[10px] text-red-500 font-bold ml-1">
//                           {errors.number}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-1">
//                     <div className="relative group">
//                       <span
//                         className={`absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-lg transition-colors ${
//                           errors.email
//                             ? "text-red-500"
//                             : "text-slate-400 group-focus-within:text-blue-500"
//                         }`}
//                       >
//                         alternate_email
//                       </span>
//                       <input
//                         id="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white ${
//                           errors.email
//                             ? "border-red-500 ring-1 ring-red-500/20"
//                             : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
//                         }`}
//                         placeholder="Email Address"
//                       />
//                     </div>
//                     {errors.email && (
//                       <p className="text-[10px] text-red-500 font-bold ml-1">
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>

//                   <div className="flex flex-col gap-1">
//                     <div className="relative group">
//                       <span
//                         className={`absolute left-3 top-3 material-symbols-outlined text-lg transition-colors ${
//                           errors.message
//                             ? "text-red-500"
//                             : "text-slate-400 group-focus-within:text-blue-500"
//                         }`}
//                       >
//                         edit_note
//                       </span>
//                       <textarea
//                         id="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white min-h-[70px] resize-none ${
//                           errors.message
//                             ? "border-red-500 ring-1 ring-red-500/20"
//                             : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
//                         }`}
//                         placeholder="Briefly describe your requirements..."
//                       />
//                     </div>
//                     {errors.message && (
//                       <p className="text-[10px] text-red-500 font-bold ml-1">
//                         {errors.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* 4. FOOTER */}
//               <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
//                 <div className="hidden sm:block">
//                   <p className="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-black">
//                     {status ? "Status" : "Selected"}
//                   </p>
//                   <p
//                     className={`text-[11px] font-bold truncate max-w-[150px] ${
//                       status === "Booking Successful!"
//                         ? "text-green-600"
//                         : status
//                         ? "text-red-500"
//                         : "text-blue-600 dark:text-blue-400"
//                     }`}
//                   >
//                     {status || formData.selectedService || "None Selected"}
//                   </p>
//                 </div>
//                 <div className="flex gap-2 w-full sm:w-auto">
//                   <button
//                     type="button"
//                     onClick={onClose}
//                     className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     // DISABLED IF NO SERVICE IS SELECTED, OR IF SUBMITTING/SENT
//                     disabled={
//                       !formData.selectedService || isSubmitting || isSent
//                     }
//                     className="flex-1 sm:flex-none px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center min-w-[120px]"
//                   >
//                     {isSubmitting ? (
//                       <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                     ) : isSent ? (
//                       "Success!"
//                     ) : (
//                       "Confirm Booking"
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default ConsultationModal
import React, { useState, useEffect, useRef } from "react" // 1. Added useRef
import { motion, AnimatePresence } from "framer-motion"
import { SECTIONS_DATA } from "../AllServicesPage/ServicesData"

const ConsultationModal = ({ isOpen, onClose, selectedPlan }) => {
  // --- REFS ---
  const scrollContainerRef = useRef(null) // 2. Ref for the scrollable body

  // --- INJECTED CSS ---
  const customStyles = `
    .custom-v-scrollbar::-webkit-scrollbar { width: 5px; }
    .custom-v-scrollbar::-webkit-scrollbar-button { display: none; }
    .custom-v-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-v-scrollbar::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 10px; }
    .custom-h-scrollbar::-webkit-scrollbar { height: 4px; }
    .custom-h-scrollbar::-webkit-scrollbar-button { display: none; }
    .custom-h-scrollbar::-webkit-scrollbar-track { background: rgba(37, 99, 235, 0.05); border-radius: 10px; }
    .custom-h-scrollbar::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 10px; }
    .custom-v-scrollbar, .custom-h-scrollbar { scrollbar-width: thin; scrollbar-color: #2563eb transparent; }
  `

  const initialCategory =
    SECTIONS_DATA.find((section) =>
      section.items.some((item) => item.title === selectedPlan)
    )?.id || SECTIONS_DATA[0].id

  // --- FORM STATE ---
  const [activeTab, setActiveTab] = useState(initialCategory)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    selectedService: selectedPlan || "",
    message: "",
  })

  // --- UI STATE ---
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [status, setStatus] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      if (selectedPlan) {
        const cat = SECTIONS_DATA.find((s) =>
          s.items.some((i) => i.title === selectedPlan)
        )
        if (cat) setActiveTab(cat.id)
        setFormData((prev) => ({ ...prev, selectedService: selectedPlan }))
      }
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, selectedPlan])

  const currentSection = SECTIONS_DATA.find((s) => s.id === activeTab)

  // --- HANDLERS ---
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (errors[id])
      setErrors((prev) => {
        const newErrs = { ...prev }
        delete newErrs[id]
        return newErrs
      })
  }

  const setSelectedService = (title) => {
    setFormData((prev) => ({ ...prev, selectedService: title }))
  }

  // 3. SCROLL LOGIC
  const scrollToError = () => {
    // Small delay to ensure React has rendered the error messages in the DOM
    setTimeout(() => {
      if (scrollContainerRef.current) {
        const firstError =
          scrollContainerRef.current.querySelector(".error-message")
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }
    }, 50)
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = "Full name is required"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format"
    }

    if (!formData.number.trim()) {
      tempErrors.number = "Phone is required"
    } else if (!/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Enter a 10-digit number"
    }

    if (!formData.message.trim())
      tempErrors.message = "Please describe your needs"

    setErrors(tempErrors)

    const hasErrors = Object.keys(tempErrors).length > 0
    if (hasErrors) scrollToError() // 4. Trigger scroll if invalid

    return !hasErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setStatus("")

    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwFK4NqnwfAO6MrzNxZvRR6Lkrc9UIe4Kt_4zsCMtijBssF6iD-qCYSF0guGXSFbmPP/exec"
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSent(true)
        setStatus("Booking Successful!")
        setTimeout(() => {
          onClose()
          setIsSent(false)
          setFormData({
            name: "",
            email: "",
            number: "",
            selectedService: "",
            message: "",
          })
          setErrors({})
        }, 2000)
      } else {
        setStatus("Submission failed.")
      }
    } catch (error) {
      setStatus("Network error.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <style>{customStyles}</style>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            {/* 1. HEADER */}
            <div className="px-6 pt-5 pb-2 shrink-0">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                    Consultation
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                    Pick a service to talk with our experts.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-xl dark:text-slate-300">
                    close
                  </span>
                </button>
              </div>

              {/* 2. CATEGORY TABS */}
              <div className="flex gap-1.5 mt-4 overflow-x-auto pb-3 custom-h-scrollbar">
                {SECTIONS_DATA.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveTab(section.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap border transition-all font-bold text-[10px] uppercase tracking-wider ${
                      activeTab === section.id
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-100 bg-slate-50 text-slate-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {section.icon}
                    </span>
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. MAIN BODY */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-1 overflow-hidden"
            >
              {/* 5. ATTACHED REF HERE */}
              <div
                ref={scrollContainerRef}
                className="px-6 py-4 overflow-y-auto flex-1 custom-v-scrollbar"
              >
                {/* SERVICE GRID */}
                <div className="grid grid-cols-2 gap-2 p-1">
                  {currentSection.items.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setSelectedService(item.title)}
                      className={`p-2.5 rounded-xl border transition-all flex items-center gap-2.5 relative ${
                        formData.selectedService === item.title
                          ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/30 shadow-sm"
                          : "border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 bg-slate-50/30"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-lg ${
                          formData.selectedService === item.title
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-400 dark:text-slate-500"
                        }`}
                      >
                        {item.catIcon}
                      </span>
                      <span
                        className={`text-[11px] font-semibold leading-tight flex-1 text-left ${
                          formData.selectedService === item.title
                            ? "text-blue-700 dark:text-blue-300"
                            : "text-slate-600 dark:text-slate-200"
                        }`}
                      >
                        {item.title}
                      </span>
                      {formData.selectedService === item.title && (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </button>
                  ))}
                </div>

                {/* FORM FIELDS */}
                <div className="mt-6 space-y-4 pb-2">
                  <div className="h-px bg-slate-100 dark:bg-slate-800 w-full mb-4" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-1">
                      <div className="relative group">
                        <span
                          className={`absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-lg transition-colors ${
                            errors.name
                              ? "text-red-500"
                              : "text-slate-400 group-focus-within:text-blue-500"
                          }`}
                        >
                          person
                        </span>
                        <input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white ${
                            errors.name
                              ? "border-red-500 ring-1 ring-red-500/20"
                              : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
                          }`}
                          placeholder="Full Name"
                        />
                      </div>
                      {/* Added 'error-message' class for selector */}
                      {errors.name && (
                        <p className="error-message text-[10px] text-red-500 font-bold ml-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="flex flex-col gap-1">
                      <div className="relative group">
                        <span
                          className={`absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-lg transition-colors ${
                            errors.number
                              ? "text-red-500"
                              : "text-slate-400 group-focus-within:text-blue-500"
                          }`}
                        >
                          call
                        </span>
                        <input
                          id="number"
                          type="tel"
                          value={formData.number}
                          onChange={handleChange}
                          className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white ${
                            errors.number
                              ? "border-red-500 ring-1 ring-red-500/20"
                              : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
                          }`}
                          placeholder="Phone Number"
                        />
                      </div>
                      {errors.number && (
                        <p className="error-message text-[10px] text-red-500 font-bold ml-1">
                          {errors.number}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1">
                    <div className="relative group">
                      <span
                        className={`absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-lg transition-colors ${
                          errors.email
                            ? "text-red-500"
                            : "text-slate-400 group-focus-within:text-blue-500"
                        }`}
                      >
                        alternate_email
                      </span>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white ${
                          errors.email
                            ? "border-red-500 ring-1 ring-red-500/20"
                            : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
                        }`}
                        placeholder="Email Address"
                      />
                    </div>
                    {errors.email && (
                      <p className="error-message text-[10px] text-red-500 font-bold ml-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1">
                    <div className="relative group">
                      <span
                        className={`absolute left-3 top-3 material-symbols-outlined text-lg transition-colors ${
                          errors.message
                            ? "text-red-500"
                            : "text-slate-400 group-focus-within:text-blue-500"
                        }`}
                      >
                        edit_note
                      </span>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg pl-10 pr-3 py-2 text-xs outline-none transition-all dark:text-white min-h-[70px] resize-none ${
                          errors.message
                            ? "border-red-500 ring-1 ring-red-500/20"
                            : "border-slate-200 dark:border-slate-700 focus:border-blue-400"
                        }`}
                        placeholder="Briefly describe your requirements..."
                      />
                    </div>
                    {errors.message && (
                      <p className="error-message text-[10px] text-red-500 font-bold ml-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 4. FOOTER */}
              <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
                <div className="hidden sm:block">
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-black">
                    {status ? "Status" : "Selected"}
                  </p>
                  <p
                    className={`text-[11px] font-bold truncate max-w-[150px] ${
                      status === "Booking Successful!"
                        ? "text-green-600"
                        : status
                        ? "text-red-500"
                        : "text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {status || formData.selectedService || "None Selected"}
                  </p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={
                      !formData.selectedService || isSubmitting || isSent
                    }
                    className="flex-1 sm:flex-none px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isSent ? (
                      "Success!"
                    ) : (
                      "Confirm Booking"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ConsultationModal
