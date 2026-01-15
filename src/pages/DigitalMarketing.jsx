import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import DigitalMarketingFeatures from "@/Components/DigitalMarketingPage/DigitalMarketingFeatures"
import DigitalMarketingHero from "@/Components/DigitalMarketingPage/DigitalMarketingHero"
import DigitalMarketingProcess from "@/Components/DigitalMarketingPage/DigitalMarketingProcess"
import DigitalMarketingTechStack from "@/Components/DigitalMarketingPage/DigitalMarketingTechStack"
import React from "react"

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <DigitalMarketingHero />
      <DigitalMarketingFeatures />
      <DigitalMarketingTechStack />
      <DigitalMarketingProcess />
      <ServiceFaq serviceTitle={"Digital Marketing"} />

      <CtaContact title={"Any Queries ?"} selectedPlan={"Digital Marketing"} />
    </div>
  )
}

export default DigitalMarketing
