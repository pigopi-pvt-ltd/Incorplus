import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import ComplianceImportance from "@/Components/StartupCompliancePage/ComplianceImportance"
import KeyCompliances from "@/Components/StartupCompliancePage/KeyCompliances"
import StartupHero from "@/Components/StartupCompliancePage/StartupHero"

const StartupCompliance = () => {
  return (
    <>
      <StartupHero />
      <ComplianceImportance />
      <KeyCompliances />
      {/* add faqs */}
      <ServiceFaq serviceTitle={"Startup Compliance"} />
      <CtaContact
        title={"Any other Questions ?"}
        selectedPlan={"Startup Compliance"}
      />
    </>
  )
}

export default StartupCompliance
