import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import PublicLimitedFeatures from "@/Components/PublicLimitedRegistration/PublicLimitedFeatures"
import PublicLimitedHero from "@/Components/PublicLimitedRegistration/PublicLimitedHero"
import RegistrationProcess from "@/Components/PublicLimitedRegistration/RegistrationProcess"
import RequiredDocuments from "@/Components/PublicLimitedRegistration/RequiredDocuments"

const PublicLimitedRegistration = () => {
  return (
    <>
      <PublicLimitedHero />
      <PublicLimitedFeatures />
      <RegistrationProcess />
      <RequiredDocuments />
      <ServiceFaq serviceTitle={"Public Limited Company Registration"} />
      <CtaContact
        title={"Any other Questions ?"}
        selectedPlan={"Public Limited Company Registration"}
      />
    </>
  )
}

export default PublicLimitedRegistration
