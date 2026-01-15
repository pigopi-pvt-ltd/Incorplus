import WebDevHero from "@/Components/WebDevelopmentPage/WebDevHero"
import WebDevFeatures from "@/Components/WebDevelopmentPage/WebDevFeatures"
import WebDevProcess from "@/Components/WebDevelopmentPage/WebDevProcess"
import WebDevTechStack from "@/Components/WebDevelopmentPage/WebDevTechStack"
import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"

const WebDevelopment = () => {
  return (
    <>
      <WebDevHero />
      <WebDevFeatures />
      <WebDevProcess />
      <WebDevTechStack />
      <ServiceFaq serviceTitle={"Web Development"} />
      <CtaContact
        title={"Have a project in mind ?"}
        selectedPlan={"Web Development"}
      />
    </>
  )
}
export default WebDevelopment
