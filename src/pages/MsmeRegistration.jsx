import CtaContact from "@/Components/CommonComponents/CtaContact"
import MsmeBenefits from "@/Components/MsmePage/MsmeBenefites"
import MsmeHero from "@/Components/MsmePage/MsmeHero"
import MsmeWorkflow from "@/Components/MsmePage/MsmeWorkflow"

const MsmeRegistration = () => {
  return (
    <>
      <MsmeHero />
      <MsmeBenefits />
      <MsmeWorkflow />
      <CtaContact
        title={"Any Questions ?"}
        selectedPlan={"MSME Registration"}
      />
    </>
  )
}

export default MsmeRegistration
