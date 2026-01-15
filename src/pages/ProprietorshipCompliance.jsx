import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import ProprietorshipDocs from "@/Components/ProprietorshipCompliancePage/ProprietorshipDocs"
import ProprietorshipHero from "@/Components/ProprietorshipCompliancePage/ProprietorshipHero"
import ProprietorshipOverview from "@/Components/ProprietorshipCompliancePage/ProprietorshipOverview"

const ProprietorshipCompliance = () => {
  return (
    <>
      <ProprietorshipHero />
      <ProprietorshipOverview />
      <ProprietorshipDocs />
      {/* add benifts in faq */}
      <ServiceFaq serviceTitle={"Proprietorship Compliance"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"Proprietorship Compliance"}
      />
    </>
  )
}

export default ProprietorshipCompliance
