import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import RegistrationProcess from "@/Components/Section8RegistrationPage/RegistrationProcess"
import Section8Documents from "@/Components/Section8RegistrationPage/Section8Documnets"
import Section8Features from "@/Components/Section8RegistrationPage/Section8Features"
import Section8Hero from "@/Components/Section8RegistrationPage/Section8Hero"

const Section8Registration = () => {
  return (
    <>
      <Section8Hero />
      <Section8Features />
      <RegistrationProcess />
      <Section8Documents />
      <ServiceFaq serviceTitle={"Section-8 Company (NGO) Registration"} />
      <CtaContact
        title={"Any other Questions ?"}
        selectedPlan={"Section-8 Company (NGO) Registration"}
      />
    </>
  )
}

export default Section8Registration
