import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import KeyFeatures from "@/Components/PVTRegistrationPage/KeyFeatures"
import PVTHero from "@/Components/PVTRegistrationPage/PVTHero"
import RequiredDocuments from "@/Components/PVTRegistrationPage/RequiredDocuments"
import SuccessJourney from "@/Components/PVTRegistrationPage/SuccessJourney"

const PVTRegistration = () => {
  return (
    <>
      <PVTHero />
      <KeyFeatures />
      <SuccessJourney />
      <RequiredDocuments />
      <ServiceFaq serviceTitle={"Private Limited Company Registration"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"Private Limited Company Registration"}
      />
    </>
  )
}

export default PVTRegistration
