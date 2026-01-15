import CtaContact from "@/Components/CommonComponents/CtaContact"
import PVTComplianceHero from "@/Components/PVTCompliancePage/PVTComplianceHero"
import PVTComplianceOverview from "@/Components/PVTCompliancePage/PVTComplianceOverview"
import WhyPVTCompliance from "@/Components/PVTCompliancePage/WhyPVTCompliance"
import PVTComplianceRequirements from "@/Components/PVTCompliancePage/PVTComplianceRequirements"
import PVTComplianceBenefits from "@/Components/PVTCompliancePage/PVTComplianceBenefits"

const PvtLtdCompliance = () => {
  return (
    <>
      <PVTComplianceHero />
      <PVTComplianceOverview />
      <WhyPVTCompliance />
      <PVTComplianceRequirements />
      <PVTComplianceBenefits />
      {/* <PvtLtdComplianceOverview />/ */}
      {/* <PvtLtdRequiredDocuments />
      <PvtLtdBenefitsCompliances /> */}
      <CtaContact
        title={"Any Pvt Ltd Compliance Queries?"}
        selectedPlan={"Private Limited Compliance"}
      />
    </>
  )
}
export default PvtLtdCompliance
