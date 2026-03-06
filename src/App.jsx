import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./Components/Layouts/RootLayout"
import Home from "./pages/Home"
import AllServices from "./pages/AllServices"
import GovernmentGrants from "./pages/GovernmentGrants"
import CompanyIncorporation from "./pages/CompanyIncorporation"
import Gstregistration from "./pages/GstRegistration"
import ItrFilling from "./pages/ItrFilling"
import Fassai from "./pages/Fassai"
import Trademark from "./pages/Trademark"
import MsmeRegistration from "./pages/MsmeRegistration"
import Contact from "./pages/Contact"
import About from "./pages/About"
import WorkInProgress from "./pages/WorkInProgress"
import DpiitRegistration from "./pages/DpiitRegistration"
import ProjectReport from "./pages/ProjectReport"
import FAQ from "./pages/FAQ"
import Funding from "./pages/Funding"
import PartnershipRegistration from "./pages/PartnershpiRegistration"
import LLPRegistration from "./pages/LLPRegistration"
import OPCRegistration from "./pages/OPCRegistration"
import PVTRegistration from "./pages/PVTRegistration"
import PublicLimitedRegistration from "./pages/PublicLimitedRegistration"
import Section8Registration from "./pages/Section8Registration"
import TrustRegistration from "./pages/TrustRegistration"
import SocietyRegistration from "./pages/SocietyRegistration"
import ProprietorshipRegistration from "./pages/ProprietorshipRegistration"
import IECLicence from "./pages/IECLicense"
import ISORegistration from "./pages/ISORegistration"
import StartupCompliance from "./pages/StartupCompliance"
import ProprietorshipCompliance from "./pages/ProprietorshipCompliance"
import LLPCompliance from "./pages/LLPCompliance"
import OPCCompliance from "./pages/OPCCompliance"
import PvtLtdCompliance from "./pages/PvtLtdCompliance"
import ROCCompliance from "./pages/ROCCompliance"
import TDSFiling from "./pages/TDSFiling"
import Section8Compliance from "./pages/Section8Compliance"
import GSTCompliance from "./pages/GSTCompliance"
import Accounting from "./pages/Accounting"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import WebDevelopment from "./pages/WebDevelopement"
import MobileAppDevelopment from "./pages/MobileAppDevelopment"
import DigitalMarketing from "./pages/DigitalMarketing"
import LogoDesign from "./pages/LogoDesign"
import GraphicDesign from "./pages/GraphicDesign"
import TermsAndConditions from "./Components/TermsAndConditionsPage/TermsAndConditions"
import Pricing from "./pages/Pricing"
// import { Home } from "lucide-react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/services",
          element: <AllServices />,
        },
        {
          path: "/funding",
          element: <Funding />,
        },
        {
          path: "/company-incorporation",
          element: <CompanyIncorporation />,
        },
        {
          path: "/gst-registration",
          element: <Gstregistration />,
        },
        {
          path: "/itr-filing",
          element: <ItrFilling />,
        },
        {
          path: "/fssai-registration",
          element: <Fassai />,
        },
        {
          path: "/trademark-registration",
          element: <Trademark />,
        },
        {
          path: "/msme-registration",
          element: <MsmeRegistration />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/dpiit-registration",
          element: <DpiitRegistration />,
        },
        {
          path: "/project-report",
          element: <ProjectReport />,
        },
        {
          path: "/partnership-registration",
          element: <PartnershipRegistration />,
        },
        {
          path: "/llp-registration",
          element: <LLPRegistration />,
        },
        {
          path: "/opc-registration",
          element: <OPCRegistration />,
        },
        {
          path: "/pvt-ltd-registration",
          element: <PVTRegistration />,
        },
        {
          path: "/public-limited-registration",
          element: <PublicLimitedRegistration />,
        },
        {
          path: "/section-8-registration",
          element: <Section8Registration />,
        },
        {
          path: "/trust-registration",
          element: <TrustRegistration />,
        },
        {
          path: "/society-registration",
          element: <SocietyRegistration />,
        },
        {
          path: "/proprietorship-registration",
          element: <ProprietorshipRegistration />,
        },
        {
          path: "/import-export-registration",
          element: <IECLicence />,
        },
        {
          path: "/iso-registration",
          element: <ISORegistration />,
        },
        {
          path: "/startup-compliance",
          element: <StartupCompliance />,
        },
        {
          path: "/proprietorship-compliance",
          element: <ProprietorshipCompliance />,
        },
        {
          path: "/opc-compliance",
          element: <OPCCompliance />,
        },
        {
          path: "/llp-compliance",
          element: <LLPCompliance />,
        },
        {
          path: "/pvt-ltd-compliance",
          element: <PvtLtdCompliance />,
        },
        {
          path: "/roc-compliance",
          element: <ROCCompliance />,
        },
        {
          path: "/tds-filing-compliance",
          element: <TDSFiling />,
        },
        {
          path: "/section-8-compliance",
          element: <Section8Compliance />,
        },
        {
          path: "/gst-compliance",
          element: <GSTCompliance />,
        },
        {
          path: "/accounting-compliance",
          element: <Accounting />,
        },
        {
          path: "/web-development",
          element: <WebDevelopment />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/mobile-app-development",
          element: <MobileAppDevelopment />,
        },
        {
          path: "/digital-marketing",
          element: <DigitalMarketing />,
        },
        {
          path: "/logo-design",
          element: <LogoDesign />,
        },
        {
          path: "/graphic-design",
          element: <GraphicDesign />,
        },
        {
          path: "/terms",
          element: <TermsAndConditions />,
        },
        {
          path: "*",
          element: <WorkInProgress title="Content" />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
