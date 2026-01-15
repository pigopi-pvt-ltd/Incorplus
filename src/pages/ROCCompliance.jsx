import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import ROCComplianceHero from "@/Components/ROCCompliancePage/ROCComplianceHero"
import ROCOverview from "@/Components/ROCCompliancePage/ROCOverview"
import ROCRequiredDocuments from "@/Components/ROCCompliancePage/ROCRequiredDocuments"
const ROCCompliance = () => {
  return (
    <>
      <ROCComplianceHero />
      <ROCOverview />
      <ROCRequiredDocuments />
      <ServiceFaq serviceTitle={"ROC Annual Compliances"} />
      <CtaContact
        title={"Any Other Queries?"}
        selectedPlan={"ROC Annual Compliances"}
      />
    </>
  )
}
export default ROCCompliance
