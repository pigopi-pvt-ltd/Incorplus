import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import OPCDocuments from "@/Components/OPCRegistration/OPCDocuments"
import OPCFeatures from "@/Components/OPCRegistration/OPCFeatures"
import OPCHero from "@/Components/OPCRegistration/OPCHero"
import OPCRegistrationFlow from "@/Components/OPCRegistration/OPCRegistrationFlow"

const OPCRegistration = () => {
  return (
    <>
      <OPCHero />
      <OPCFeatures />
      <OPCRegistrationFlow />
      <OPCDocuments />
      <ServiceFaq serviceTitle={"OPC Registration"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"OPC Registration"}
      />
    </>
  )
}

export default OPCRegistration
