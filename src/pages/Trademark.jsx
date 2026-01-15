import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import TrademarkBenefits from "@/Components/TrademarkPage/TrademarkBenifits"
import TrademarkDocuments from "@/Components/TrademarkPage/TrademarkDocuments"
import TrademarkHero from "@/Components/TrademarkPage/TrademarkHero"
import TrademarkProcess from "@/Components/TrademarkPage/TrademarkProcess"
import TrademarkStats from "@/Components/TrademarkPage/TradmarkStats"

const Trademark = () => {
  return (
    <>
      <TrademarkHero />
      {/* <TrademarkStats /> */}
      <TrademarkBenefits />
      <TrademarkProcess />
      <TrademarkDocuments />
      <ServiceFaq serviceTitle={"Trademark Registration"} />
      <CtaContact
        title={"Any Questions ?"}
        selectedPlan={"Trademark Registration"}
      />
    </>
  )
}

export default Trademark
