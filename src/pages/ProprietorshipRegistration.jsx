import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import SoleProprietorshipDocs from "@/Components/ProprietershipRegistrationPage/SoleProprietorshipDocs"
import SoleProprietorshipFeatures from "@/Components/ProprietershipRegistrationPage/SoleProprietorshipFeatures"
import SoleProprietorshipRoadmap from "@/Components/ProprietershipRegistrationPage/SoleProprietorshipRoadmap"
import SoleProprietorshipHero from "@/Components/ProprietershipRegistrationPage/SoloProprietorshipHero"

const ProprietorshipRegistration = () => {
  return (
    <>
      <SoleProprietorshipHero />
      <SoleProprietorshipFeatures />
      <SoleProprietorshipRoadmap />
      <SoleProprietorshipDocs />
      <ServiceFaq serviceTitle={"Proprietorship Registration"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"Proprietorship Registration"}
      />
    </>
  )
}

export default ProprietorshipRegistration
