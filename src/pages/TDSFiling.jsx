import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import TDSFilingHero from "@/Components/TDSFilingPage/TDSFilingHero"
import TDSOverview from "@/Components/TDSFilingPage/TDSOverview"

const TDSFiling = () => {
  return (
    <>
      <TDSFilingHero />
      <TDSOverview />
      <ServiceFaq serviceTitle={"TDS Return Filing"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"TDS Return Filing"}
      />
    </>
  )
}
export default TDSFiling
