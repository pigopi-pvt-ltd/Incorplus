import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import IECBenefits from "@/Components/IECLicensePage/IECBenifits"
import IECHero from "@/Components/IECLicensePage/IECHero"

const IECLicence = () => {
  return (
    <>
      <IECHero />
      <IECBenefits />
      <ServiceFaq serviceTitle={"IEC Code Registration"} />
      <CtaContact
        title={"Any more Questions ?"}
        selectedPlan={"IEC Code Registration"}
      />
    </>
  )
}

export default IECLicence
