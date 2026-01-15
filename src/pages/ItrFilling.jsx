import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import CtaSectionItr from "@/Components/ItrFillingPage/CtaSectionItr"
import HowItWorksItr from "@/Components/ItrFillingPage/HowItWorksItr"
import ItrCategories from "@/Components/ItrFillingPage/ItrCategories"
import ItrFillingHero from "@/Components/ItrFillingPage/ItrFillingHero"
import ItrStats from "@/Components/ItrFillingPage/ItrStats"
import WhyItr from "@/Components/ItrFillingPage/WhyItr"

const ItrFilling = () => {
  return (
    <>
      <ItrFillingHero />
      {/* <ItrStats /> */}
      <WhyItr />
      <HowItWorksItr />
      <ItrCategories />
      <ServiceFaq serviceTitle={"Income Tax Filing"} />
      <CtaSectionItr selectedPlan={"Income Tax Filing"} />
    </>
  )
}

export default ItrFilling
