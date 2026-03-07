import React, { useState, useMemo, useRef, useEffect } from "react"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Fuse from "fuse.js"
import ConsultationModal from "../CommonComponents/ConsultationModal"
import { SECTIONS_DATA } from "../AllServicesPage/ServicesData"

import logo from "../../assets/incpLogo.png"
import DarkModeToggle from "../CommonComponents/DarkModeToggle"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openModal, setIsOpenModal] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const searchRef = useRef(null)
    const navigate = useNavigate()

    const closeMenu = () => {
        setIsMobileMenuOpen(false)
        setQuery("")
        setResults([])
    }

    // --- Search Logic ---
    const searchList = useMemo(() => {
        const flatList = []
        if (!SECTIONS_DATA) return []
        SECTIONS_DATA.forEach((section) => {
            section.items.forEach((item) => {
                flatList.push({
                    title: item.title,
                    category: section.title,
                    path: item.path,
                })
            })
        })
        return flatList
    }, [])

    const fuse = useMemo(() => {
        return new Fuse(searchList, {
            keys: ["title", "category"],
            threshold: 0.4,
        })
    }, [searchList])

    const handleSearch = (e) => {
        const value = e.target.value
        setQuery(value)
        if (value.trim().length > 1) {
            setResults(fuse.search(value).slice(0, 6))
        } else {
            setResults([])
        }
    }

    const forceNavigate = (path) => {
        if (!path) return
        setIsMobileMenuOpen(false)
        setIsSearchOpen(false)
        setQuery("")
        setResults([])
        navigate(path)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchOpen(false)
                setResults([])
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // --- Original Styles ---
    const navLinkClasses = ({ isActive }) =>
        `px-4 py-2 text-sm font-semibold transition-all rounded-full flex items-center ${isActive
            ? "text-blue-600 bg-slate-100 dark:bg-slate-800 dark:text-blue-400"
            : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`

    const mobileLinkClasses = ({ isActive }) =>
        `w-full px-5 py-3 text-base font-bold transition-all rounded-xl flex items-center gap-3 ${isActive
            ? "text-blue-600 bg-blue-50/50 dark:bg-blue-900/20 dark:text-blue-400"
            : "text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-800"
        }`

    return (
        <header className="fixed top-0 z-70 w-full">
            {/* Background with blur */}
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-1 md:gap-2">
                        <Link
                            className="flex items-center gap-3 group"
                            to="/"
                            onClick={closeMenu}
                        >
                            <img src={logo} className="w-[6em]" alt="Logo" />
                        </Link>

                        {/* Google Maps Location Icon */}
                        {/* <a
              href="https://www.google.com/maps/search/?api=1&query=Incorplus+Ventures"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 text-slate-500 hover:text-blue-600 transition-colors"
              title="Open Location in Google Maps"
            >
              <span className="material-symbols-outlined text-red-400 text-2xl">
                location_on
              </span>
            </a> */}
                    </div>

                    {/* Desktop Nav & Search Container */}
                    <div
                        className="hidden md:flex items-center gap-4 flex-1 justify-center"
                        ref={searchRef}
                    >
                        {!isSearchOpen ? (
                            <motion.nav
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-1"
                            >
                                <NavLink to="/" className={navLinkClasses}>
                                    Home
                                </NavLink>
                                <NavLink to="/services" className={navLinkClasses}>
                                    Services
                                </NavLink>
                                <NavLink to="/contact" className={navLinkClasses}>
                                    Contact
                                </NavLink>
                                <NavLink to="/faq" className={navLinkClasses}>
                                    FAQ
                                </NavLink>
                                <NavLink to="/about" className={navLinkClasses}>
                                    About
                                </NavLink>
                                <NavLink to="/pricing" className={navLinkClasses}>
                                    Pricing
                                </NavLink>
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="ml-2 p-2 text-slate-500 hover:text-blue-600"
                                >
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                            </motion.nav>
                        ) : (
                            <div className="relative w-full max-w-md">
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "100%", opacity: 1 }}
                                    className="flex items-center"
                                >
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Search e.g. GST, Funding..."
                                        className="w-full bg-slate-100 dark:bg-slate-800 rounded-full py-2.5 pl-10 pr-10 text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                                        value={query}
                                        onChange={handleSearch}
                                    />
                                    <span className="material-symbols-outlined absolute left-3 text-slate-400">
                                        search
                                    </span>
                                    <button
                                        onClick={() => {
                                            setIsSearchOpen(false)
                                            setQuery("")
                                        }}
                                        className="absolute right-3 text-slate-400 hover:text-slate-600"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            close
                                        </span>
                                    </button>
                                </motion.div>

                                {/* Desktop Results Dropdown */}
                                <AnimatePresence>
                                    {query.length > 1 && results.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
                                        >
                                            <ul className="max-h-[300px] overflow-y-auto">
                                                {results.map((result, index) => (
                                                    <li
                                                        key={index}
                                                        onPointerDown={() =>
                                                            forceNavigate(result.item.path)
                                                        }
                                                        className="px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer flex flex-col border-b dark:border-slate-800 last:border-none text-left"
                                                    >
                                                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                                                            {result.item.title}
                                                        </span>
                                                        <span className="text-[10px] uppercase text-blue-600 font-bold">
                                                            {result.item.category}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>

                    {/* Header Action Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <DarkModeToggle />


                        <button
                            onClick={() => setIsOpenModal(true)}
                            className="hidden md:block bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-slate-200 text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
                        >
                            Get Started
                        </button>
                        {/* New HRMS Button */}
                        <a
                            href="https://hrms-incorp.pigo-pi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold px-3 py-2 transition-all"
                        >
                            <span className="material-symbols-outlined text-xl">dashboard_customize</span>
                            Login
                        </a>


                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 text-slate-700 dark:text-slate-200"
                            >
                                <span className="material-symbols-outlined text-3xl">menu</span>
                            </button>
                        </div>
                    </div>        </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-3/4 max-w-[300px] z-[70] bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl border-r border-slate-200 dark:border-slate-800 md:hidden flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                                    Navigation
                                </span>
                                <button
                                    onClick={closeMenu}
                                    className="size-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500"
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        close
                                    </span>
                                </button>
                            </div>

                            {/* Mobile Search */}
                            <div className="px-4 py-4 relative">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        className="w-full bg-slate-100 dark:bg-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm outline-none dark:text-white"
                                        value={query}
                                        onChange={handleSearch}
                                    />
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                        search
                                    </span>
                                </div>
                                {/* Mobile Search Results */}
                                {query.length > 1 && results.length > 0 && (
                                    <div className="absolute left-4 right-4 z-[80] mt-1 bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-xl shadow-xl max-h-[250px] overflow-y-auto">
                                        {results.map((result, index) => (
                                            <div
                                                key={index}
                                                onPointerDown={(e) => {
                                                    e.preventDefault()
                                                    forceNavigate(result.item.path)
                                                }}
                                                className="p-4 border-b dark:border-slate-800 last:border-none active:bg-slate-100 transition-colors flex flex-col cursor-pointer"
                                            >
                                                <div className="font-bold text-sm dark:text-white pointer-events-none">
                                                    {result.item.title}
                                                </div>
                                                <div className="text-[10px] uppercase text-blue-600 font-bold pointer-events-none">
                                                    {result.item.category}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Drawer Navigation */}
                            <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
                                <NavLink
                                    to="/"
                                    className={mobileLinkClasses}
                                    onClick={closeMenu}
                                >
                                    <span className="material-symbols-outlined text-lg opacity-70">
                                        home
                                    </span>{" "}
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={mobileLinkClasses}
                                    onClick={closeMenu}
                                >
                                    <span className="material-symbols-outlined text-lg opacity-70">
                                        category
                                    </span>{" "}
                                    Services
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={mobileLinkClasses}
                                    onClick={closeMenu}
                                >
                                    <span className="material-symbols-outlined text-lg opacity-70">
                                        account_tree
                                    </span>{" "}
                                    Contact
                                </NavLink>
                                <NavLink
                                    to="/faq"
                                    className={mobileLinkClasses}
                                    onClick={closeMenu}
                                >
                                    <span className="material-symbols-outlined text-lg opacity-70">
                                        reviews
                                    </span>{" "}
                                    FAQs
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={mobileLinkClasses}
                                    onClick={closeMenu}
                                >
                                    <span className="material-symbols-outlined text-lg opacity-70">
                                        info
                                    </span>{" "}
                                    About
                                </NavLink>
                            </nav>

                            {/* Drawer Footer */}
                            <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                                {/* Primary Action: Get Started */}
                                <button
                                    onClick={() => {
                                        closeMenu()
                                        setIsOpenModal(true)
                                    }}
                                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all"
                                >
                                    Get Started
                                </button>

                                {/* Secondary Action: HRMS (Matched Width) */}
                                <a
                                    href="https://hrms-incorp.pigo-pi.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border-2 border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-900/50 text-blue-600 dark:text-blue-400 active:scale-[0.98] active:bg-blue-100 transition-all"
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        dashboard_customize
                                    </span>
                                    <span className="text-sm font-bold">HRMS Dashboard</span>
                                </a>

                                {/* Social Icons */}
                                <div className="flex justify-center gap-6 pt-4 text-slate-400">
                                    <span className="material-symbols-outlined text-xl cursor-pointer hover:text-blue-500 transition-colors">call</span>
                                    <span className="material-symbols-outlined text-xl cursor-pointer hover:text-blue-500 transition-colors">mail</span>
                                    <span className="material-symbols-outlined text-xl cursor-pointer hover:text-blue-500 transition-colors">share</span>
                                </div>
                            </div>                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <ConsultationModal
                isOpen={openModal}
                onClose={() => setIsOpenModal(false)}
            />
        </header>
    )
}

export default Navbar
