import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import FeaturesBenefits from "@/Components/LLPRegistration/FeatureBenifites"
import HighlightedDocuments from "@/Components/LLPRegistration/HighlightedDocuments"
import LLPHero from "@/Components/LLPRegistration/LLPHero"
import LLPStages from "@/Components/LLPRegistration/LLPStages"

const LLPRegistration = () => {
  return (
    <>
      <LLPHero />
      <FeaturesBenefits />
      <LLPStages />
      <HighlightedDocuments />
      <ServiceFaq serviceTitle={"LLP Registration"} />
      <CtaContact
        title={"Any Other Questions ?"}
        selectedPlan={"LLP Registration"}
      />
    </>
  )
}

export default LLPRegistration
