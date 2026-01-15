import React from "react"

import CtaContact from "@/Components/CommonComponents/CtaContact"
import GraphicDesignHero from "@/Components/GraphicDesignPage/GraphicDesignHero"
import GraphicDesignFeatures from "@/Components/GraphicDesignPage/GraphicDesignFeatures"
import GraphicDesignTools from "@/Components/GraphicDesignPage/GraphicDesignTools"
import GraphicDesignProcess from "@/Components/GraphicDesignPage/GraphicDesignProcess"

const GraphicDesign = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <GraphicDesignHero />
      <GraphicDesignFeatures />
      <GraphicDesignTools />
      <GraphicDesignProcess />
      <CtaContact
        title={"Ready to bring your vision to life with stunning graphics ?"}
        selectedPlan={"Graphic Designing"}
      />
    </div>
  )
}

export default GraphicDesign
