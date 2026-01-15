import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import ISODocuments from "@/Components/ISORegistrationPage/ISODocumnets"
import ISOHero from "@/Components/ISORegistrationPage/ISOHero"
import ISOTypes from "@/Components/ISORegistrationPage/ISOTypes"

const ISORegistration = () => {
  return (
    <>
      <ISOHero />
      <ISOTypes />
      <ISODocuments />
      <ServiceFaq serviceTitle={"ISO Certification"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"ISO Certification"}
      />
    </>
  )
}

export default ISORegistration
