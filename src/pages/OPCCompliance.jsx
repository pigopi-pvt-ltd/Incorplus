import OPCComplianceHero from "@/Components/OPCCompliancePage/OPCComplianceHero"
import OPCComplianceOverview from "@/Components/OPCCompliancePage/OPCComplianceOverview"
import OPCRequiredDocuments from "@/Components/OPCCompliancePage/OPCRequiredDocuments"
import OPCBenefitsCompliances from "@/Components/OPCCompliancePage/OPCBenefitsCompliances"
import CtaContact from "@/Components/CommonComponents/CtaContact"

const OPCCompliance = () => {
  return (
    <>
      <OPCComplianceHero />
      <OPCComplianceOverview />
      <OPCRequiredDocuments />
      <OPCBenefitsCompliances />
      <CtaContact
        title={"Any OPC Compliance Queries?"}
        selectedPlan={"OPC Compliance"}
      />
    </>
  )
}

export default OPCCompliance
