import React from "react"

import CtaContact from "@/Components/CommonComponents/CtaContact"
import LogoDesignHero from "@/Components/LogoDesignPage/LogoDesignHero"
import LogoDesignFeatures from "@/Components/LogoDesignPage/LogoDesignFeatures"
import LogoDesignTools from "@/Components/LogoDesignPage/LogoDesignTools"
import LogoDesignProcess from "@/Components/LogoDesignPage/LogoDesignProcess"

const LogoDesign = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <LogoDesignHero />
      <LogoDesignFeatures />
      <LogoDesignTools />
      <LogoDesignProcess />
      <CtaContact
        title={"Ready to create a memorable brand identity ?"}
        selectedPlan={"Logo Designing"}
      />
    </div>
  )
}

export default LogoDesign
