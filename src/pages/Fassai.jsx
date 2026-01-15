// const { default: FassaiHero } = require("@/Components/FssaiPage/FassaiHero")

import CtaContact from "@/Components/CommonComponents/CtaContact"
import ServiceFaq from "@/Components/CommonComponents/ServiceFaq"
import FassaiHero from "@/Components/FssaiPage/FassaiHero"
import FoodChains from "@/Components/FssaiPage/FoodChains"
import FssaiPlans from "@/Components/FssaiPage/FssaiPlans"
import FssaiProcess from "@/Components/FssaiPage/FssaiProcess"

const Fassai = () => {
  return (
    <>
      <FassaiHero />
      <FoodChains />
      <FssaiPlans />
      <FssaiProcess />
      <ServiceFaq serviceTitle={"FSSAI Registration"} />
      <CtaContact
        title={"Need Help, Feel free to contact"}
        selectedPlan={"FSSAI Registration"}
      />
    </>
  )
}

export default Fassai
