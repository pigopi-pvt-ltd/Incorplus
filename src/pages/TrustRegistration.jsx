import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import DocumentationChecklist from "@/Components/TrustRegistrationPage/DocumentationChecklist"
import ExecutionProcess from "@/Components/TrustRegistrationPage/ExecutionProcess"
import TrustHero from "@/Components/TrustRegistrationPage/TrustHero"
import TrustProvisions from "@/Components/TrustRegistrationPage/TrustProvisions"

const TrustRegistration = () => {
  return (
    <>
      <TrustHero />
      <TrustProvisions />
      <ExecutionProcess />
      <DocumentationChecklist />
      <ServiceFaq serviceTitle={"Trust Registration"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"Trust Registration"}
      />
    </>
  )
}

export default TrustRegistration
