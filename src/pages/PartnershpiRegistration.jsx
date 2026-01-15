// const { default: HeroSection } = require("@/Components/PartnershipRegistrationPage/HeroSection")

import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import DocumentsRequired from "@/Components/PartnershipRegistrationPage/DocumentsRequired"
import FeaturesSection from "@/Components/PartnershipRegistrationPage/FeaturesSection"
import HeroSection from "@/Components/PartnershipRegistrationPage/HeroSection"
import RegistrationProcess from "@/Components/PartnershipRegistrationPage/RegistrationProcess"

const PartnershipRegistration = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RegistrationProcess />
      <DocumentsRequired />
      <ServiceFaq serviceTitle={"Partnership Registration"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"Partnership Registration"}
      />
    </>
  )
}

export default PartnershipRegistration
