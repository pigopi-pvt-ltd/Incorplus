import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import ProjectReportFormat from "@/Components/ProjectReport/ProjectReportFormat"
import ProjectReportHero from "@/Components/ProjectReport/ProjectReportHero"

const ProjectReport = () => {
  return (
    <>
      <ProjectReportHero />
      <ProjectReportFormat />
      <ServiceFaq serviceTitle={"Project Report"} />
      <CtaContact
        title={"Any Queries related to Project Report ?"}
        selectedPlan={"Project Report"}
      />
    </>
  )
}

export default ProjectReport
