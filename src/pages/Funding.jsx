import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import FinalFundingStep from "@/Components/FundingPage/FinalFundingStep"
import FundingHero from "@/Components/FundingPage/FundingHero"
import FundingPurpose from "@/Components/FundingPage/FundingPurpose"
import FundingStages from "@/Components/FundingPage/FundingStages"
import FundingTypes from "@/Components/FundingPage/FundingTypes"

const Funding = () => {
  return (
    <>
      <FundingHero />
      <FundingPurpose />
      <FundingTypes />
      <FundingStages />
      <FinalFundingStep />
      <ServiceFaq serviceTitle={"Funding"} />
      <CtaContact title={"Ready to get Funded ?"} selectedPlan={"Funding"} />
    </>
  )
}

export default Funding
