import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import BenefitsSection from "@/Components/DpiitRegistrationPage/BenifitsSection"
import DocumentsRequired from "@/Components/DpiitRegistrationPage/DocumentsRequired"
import DpiitHero from "@/Components/DpiitRegistrationPage/DpiitHero"

const DpiitRegistration = () => {
  return (
    <>
      <DpiitHero />
      <BenefitsSection />
      <DocumentsRequired />
      <ServiceFaq serviceTitle={"DPIIT Registration"} />
      <CtaContact
        title={"Any Queries Regarding DPIIT Registration ?"}
        selectedPlan={"DPIIT Registration"}
      />
    </>
  )
}

export default DpiitRegistration
