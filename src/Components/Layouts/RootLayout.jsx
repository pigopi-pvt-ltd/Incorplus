import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import WhatsAppChat from "../CommonComponents/WhatsAppChat"
import ReactPixel from "react-facebook-pixel"
import { useEffect } from "react"
// const { default: Navbar } = require("../Navbar/Navbar");

const RootLayout = ({}) => {
  const location = useLocation()

  // Initialize Pixel only once when the app loads
  useEffect(() => {
    const options = {
      autoConfig: true,
      debug: false,
    }
    ReactPixel.init("827976683581212", options)
  }, [])

  // Fire a "PageView" event every time the location changes
  useEffect(() => {
    ReactPixel.pageView()
    // console.log('Tracking page view:', location.pathname); // Uncomment to debug
  }, [location])
  useScrollToTop()
  return (
    <>
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased max-w-full overflow-x-clip selection:bg-primary-500 selection:text-white">
        <Navbar />
        <div className="h-20" />
        <main className="flex flex-col w-full ">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppChat />
      </div>
    </>
  )
}

export default RootLayout
