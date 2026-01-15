import CtaContact from "@/Components/CommonComponents/CtaContact"
import Benefits from "@/Components/CompanyIncorporationPage/Benefits"
import CompanyIncorporationHero from "@/Components/CompanyIncorporationPage/CompanyIncorporationHero"
import ProcessTimeline from "@/Components/CompanyIncorporationPage/ProcessTimeline"
import ReviewsSection from "@/Components/CompanyIncorporationPage/ReviewsSection"
import Structures from "@/Components/CompanyIncorporationPage/Structures"

const CompanyIncorporation = () => {
  return (
    <>
      <CompanyIncorporationHero />
      <Structures />
      <Benefits />
      <ProcessTimeline />
      {/* <ReviewsSection /> */}
      <CtaContact
        title={"Don't know which is right legal structure for you ?"}
        selectedPlan={"Company Incorporation"}
      />
    </>
  )
}
export default CompanyIncorporation
