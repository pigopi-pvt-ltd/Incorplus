import React from "react"
import { Link } from "react-router-dom"
import favicon from "../../assets/incpFavicon.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 md:px-10">
      {/* 1. Main Grid - Distributed evenly into 3 columns */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <Link
            to="/"
            className="flex items-center gap-3 mb-6 text-white hover:opacity-80 transition-opacity w-fit"
          >
            <div className="size-8 rounded flex items-center justify-center shrink-0">
              <img
                src={favicon}
                alt="Incorplus Logo"
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-bold">Incorplus Venture</h2>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
            Simplifying legalities for startups in India. We are your partners
            in compliance, taxation, and growth.
          </p>

          {/* SOCIAL MEDIA ICONS ADDED HERE */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/19KnyGbBAp/"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg group"
              aria-label="Facebook"
            >
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/incorplus_venture?igsh=YTJ1ZG43a3oxenR5"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-lg group"
              aria-label="Instagram"
            >
              <svg className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company Links - Centered Column */}
        <div className="flex flex-col md:items-center w-full">
          <div className="w-fit">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    className="hover:text-blue-500 transition-colors"
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info - Right Aligned Column */}
        <div className="flex flex-col md:items-end w-full">
          <div className="w-fit">
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              {/* LOCATION LINK */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Incorplus+Venture+D-242+Noida+sector+63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-lg text-red-400 shrink-0">
                    location_on
                  </span>
                  <span>
                    D-242, Noida sector 63,
                    <br />
                    Electronic City 201301
                  </span>
                </a>
              </li>

              {/* CALL LINK */}
              <li>
                <a
                  href="tel:+919129134553"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-lg text-red-400  shrink-0">
                    call
                  </span>
                  <span>+91 91291 34553</span>
                </a>
              </li>

              {/* GMAIL STYLE MAIL LINK */}
              <li className="flex items-center gap-3">
                <a
                  href="mailto:info@incorplusventure.com"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-200 group"
                >
                  {/* Gmail-style Icon */}
                  <span className="material-symbols-outlined text-lg text-red-400  transition-colors">
                    drafts
                  </span>
                  <span className="truncate">info@incorplusventure.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Middle Bar (Copyright & Legal) */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
        <p>© {currentYear} Incorplus Venture Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <Link
            className="hover:text-blue-500 transition-colors"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link className="hover:text-blue-500 transition-colors" to="/terms">
            Terms of Service
          </Link>
        </div>
      </div>

      {/* 3. Bottom Row (Powered By) */}
      <div className="max-w-5xl mx-auto mt-8 flex justify-center items-center">
        <a
          href="https://www.pigo-pi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group transition-transform duration-300 hover:scale-105"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold bg-gradient-to-r from-yellow-400 via-rose-500 to-purple-600 bg-clip-text text-transparent opacity-90 group-hover:opacity-100">
            Powered by PigoPi
          </p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
