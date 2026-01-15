import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import SocietyDocumentation from "@/Components/SocietyRegistrationPage/SocietyDocumentation"
import SocietyFeatures from "@/Components/SocietyRegistrationPage/SocietyFeatures"
import SocietyHero from "@/Components/SocietyRegistrationPage/SocietyHero"
import SocietyRoadmap from "@/Components/SocietyRegistrationPage/SocietyRoadmap"

const SocietyRegistration = () => {
  return (
    <>
      <SocietyHero />
      <SocietyFeatures />
      <SocietyRoadmap />
      <SocietyDocumentation />
      <ServiceFaq serviceTitle={"Society Registration"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"Society Registration"}
      />
    </>
  )
}

export default SocietyRegistration
