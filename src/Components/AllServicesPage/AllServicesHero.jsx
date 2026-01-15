import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { SECTIONS_DATA } from "./ServicesData";

const AllServicesHero = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const searchList = useMemo(() => {
    const flatList = [];
    if (!SECTIONS_DATA) return [];
    SECTIONS_DATA.forEach((section) => {
      section.items.forEach((item) => {
        flatList.push({
          title: item.title,
          category: section.title,
          path: item.path,
        });
      });
    });
    return flatList;
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(searchList, {
      keys: ["title", "category"],
      threshold: 0.4,
    });
  }, [searchList]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length > 1) {
      setResults(fuse.search(value).slice(0, 6));
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  const handleItemClick = (path) => {
    if (path) {
      navigate(path);
      setQuery("");
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // FIX: Added z-[60] and removed overflow-hidden from the section wrapper
    <section className="relative z-[60] bg-background-light dark:bg-background-dark overflow-visible">
      <div className="layout-container max-w-6xl mx-auto px-4 sm:px-10 pt-10 pb-16">
        <div className="@container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // FIX: Changed overflow-hidden to overflow-visible so suggestions aren't cut off
            className="rounded-xl relative min-h-[400px] flex items-center justify-center p-8 bg-cover bg-center shadow-2xl overflow-visible"
            style={{
              backgroundImage: `linear-gradient(
                  rgba(19, 109, 236, 0.85),
                  rgba(16, 24, 34, 0.9)
                ),
                url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')`,
            }}
          >
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              // FIX: Ensure background div stays behind text but maintains rounded corners
              className="absolute inset-0 z-0 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: "inherit", filter: "brightness(0.7)" }}
            />

            <div className="flex flex-col gap-6 text-center max-w-[800px] z-10 w-full overflow-visible">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
              >
                Expertise for Every Stage of Your Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
              >
                Explore our comprehensive suite of legal, financial, and digital
                services designed to propel Indian startups and MSMEs forward.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex justify-center mt-4 w-full relative z-20"
                ref={searchRef}
              >
                <div className="relative w-full max-w-lg overflow-visible">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-4 rounded-full border-none focus:ring-2 focus:ring-primary shadow-xl text-gray-900 bg-white outline-none"
                    placeholder="Search e.g. GST, Funding, MSME..."
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    onFocus={() => query.length > 1 && setShowDropdown(true)}
                  />

                  <AnimatePresence>
                    {showDropdown && results.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        // Dropdown style matched to your theme
                        className="absolute z-[100] left-0 right-0 top-full mt-3 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                      >
                        <ul className="max-h-[300px] overflow-y-auto no-scrollbar">
                          {results.map((result, index) => (
                            <li
                              key={index}
                              onClick={() => handleItemClick(result.item.path)}
                              className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer flex items-center justify-between border-b border-gray-50 dark:border-gray-700 last:border-none transition-colors"
                            >
                              <div className="flex flex-col items-start text-left">
                                <span className="font-bold text-slate-900 dark:text-white text-sm">
                                  {result.item.title}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                                  {result.item.category}
                                </span>
                              </div>
                              <span className="material-symbols-outlined text-gray-300 text-sm">
                                open_in_new
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AllServicesHero;
