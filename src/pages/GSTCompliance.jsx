import GSTComplianceHero from "@/Components/GSTCompliancePage/GSTComplianceHero"
import GSTOverview from "@/Components/GSTCompliancePage/GSTOverview"
import GSTRequiredDocuments from "@/Components/GSTCompliancePage/GSTRequiredDocuments"
import GSTBenefits from "@/Components/GSTCompliancePage/GSTBenefits"
import CtaContact from "@/Components/CommonComponents/CtaContact"

const GSTCompliance = () => {
  return (
    <>
      <GSTComplianceHero />
      <GSTOverview />
      <GSTRequiredDocuments />
      <GSTBenefits />
      <CtaContact title={"Any Queries?"} selectedPlan={"GST Compliances"} />
    </>
  )
}
export default GSTCompliance
