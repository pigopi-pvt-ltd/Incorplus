import { memo, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const ServiceCard = memo(({ item, isSmall, onOpenConsultation }) => {
  // Added prop
  const [isMounted, setIsMounted] = useState(false)
  const [isAnimate, setIsAnimate] = useState(false)
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsMounted(true)
        if (entry.intersectionRatio > 0.1) {
          setIsAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: [0, 0.1], rootMargin: "50px" }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  // Handler for the "Learn More" click
  const handleAction = (e) => {
    if (item.title.toLowerCase().includes("talk with experts")) {
      e.preventDefault() // Stop navigation
      onOpenConsultation(item.title) // Trigger modal
    }
  }
  const CardSkeleton = ({ isSmall }) => (
    <div className="flex flex-col bg-white dark:bg-[#161b2a] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm h-full">
      <div
        className={`${
          isSmall ? "h-32" : "h-40"
        } bg-gray-200 dark:bg-gray-800 animate-pulse`}
      />
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full animate-pulse" />
      </div>
    </div>
  )
  if (!isMounted) {
    return (
      <div ref={cardRef} className="h-full">
        <CardSkeleton isSmall={isSmall} />
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col bg-white dark:bg-[#161b2a] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-700 ease-out transform-gpu h-full ${
        isAnimate && isImgLoaded
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-[0.97]"
      }`}
    >
      <div
        className={`${
          isSmall ? "h-32" : "h-40"
        } relative overflow-hidden bg-gray-100 dark:bg-gray-800`}
      >
        {!isImgLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-0" />
        )}
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          onLoad={() => setIsImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            isImgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4 text-white font-bold text-xs flex items-center gap-1.5 z-10">
          <span className="material-symbols-outlined text-sm">
            {item.catIcon}
          </span>
          <span className="uppercase tracking-wider">{item.category}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {item.desc}
        </p>

        <Link
          to={item.path || "#"}
          onClick={handleAction} // Added click interceptor
          className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold group-hover:gap-2 transition-all"
        >
          Learn more{" "}
          <span className="material-symbols-outlined text-base ml-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  )
})

export default ServiceCard
