import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import WhatsAppChat from "../CommonComponents/WhatsAppChat";

// const { default: Navbar } = require("../Navbar/Navbar");

const RootLayout = ({}) => {
  useScrollToTop();
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
  );
};

export default RootLayout;
