import CtaContact from "@/Components/CommonComponents/CtaContact"
import MobileAppCTA from "@/Components/MobileAppDevelopmentPage/MobileAppCTA"
import MobileAppFeatures from "@/Components/MobileAppDevelopmentPage/MobileAppFeatures"
import MobileAppHero from "@/Components/MobileAppDevelopmentPage/MobileAppHero"
import MobileAppPortfolio from "@/Components/MobileAppDevelopmentPage/MobileAppPortfolio"
import MobileAppProcess from "@/Components/MobileAppDevelopmentPage/MobileAppProcess"
import MobileAppTechStack from "@/Components/MobileAppDevelopmentPage/MobileAppTechStack"
import React from "react"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <MobileAppHero />
      <MobileAppFeatures />
      <MobileAppTechStack />
      <MobileAppProcess />
      {/* <MobileAppPortfolio /> */}
      {/* <MobileAppCTA /> */}
      <ServiceFaq serviceTitle={"Mobile App Development"} />

      <CtaContact
        title={"Have a mobile app idea you are thinking to launch ?"}
        selectedPlan={"Mobile App Development"}
      />
    </div>
  )
}

export default MobileAppDevelopment
