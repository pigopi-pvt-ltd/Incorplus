import CtaContact from "@/Components/CommonComponents/CtaContact"
import Section8Benefits from "@/Components/Section8CompliancePage/Section8Benefits"
import Section8ComplianceHero from "@/Components/Section8CompliancePage/Section8ComplianceHero"
import Section8RequiredDocuments from "@/Components/Section8CompliancePage/Section8RequiredDocuments"

const Section8Compliance = () => {
  return (
    <>
      <Section8ComplianceHero />
      <Section8RequiredDocuments />
      <Section8Benefits />
      <CtaContact
        title={"Any Questions ?"}
        selectedPlan={"Section 8 Compliance"}
      />
    </>
  )
}
export default Section8Compliance
