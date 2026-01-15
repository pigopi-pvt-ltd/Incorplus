import LLPComplianceHero from "@/Components/LLPCompliancePage/LLPComplianceHero"
import OverviewSection from "@/Components/LLPCompliancePage/OverviewSection"
import LLPCompliancesSection from "@/Components/LLPCompliancePage/LLPCompliancesSection"
import CtaContact from "@/Components/CommonComponents/CtaContact"

const LLPCompliance = () => {
  return (
    <>
      <LLPComplianceHero />
      <OverviewSection />
      <LLPCompliancesSection />
      <CtaContact
        title={"Any Other Queries?"}
        selectedPlan={"LLP Compliance"}
      />
    </>
  )
}

export default LLPCompliance
