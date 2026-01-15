import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import DocsChecklist from "@/Components/GstRegistrationPage/DocsChecklist"
import GstEligibility from "@/Components/GstRegistrationPage/GstElligibility"
import GstHero from "@/Components/GstRegistrationPage/GstHero"
import ProcessTimeline from "@/Components/GstRegistrationPage/ProcessTimeline"
import StatusBar from "@/Components/GstRegistrationPage/StatusBar"

const Gstregistration = () => {
  return (
    <>
      <GstHero />
      {/* <StatusBar /> */}
      <GstEligibility />
      <ProcessTimeline />
      <DocsChecklist />
      <ServiceFaq serviceTitle={"GST Registration"} />
      <CtaContact
        title={"Any Questions, Feeling Confused ?"}
        selectedPlan={"GST Registration"}
      />
    </>
  )
}

export default Gstregistration
