import AccountingHero from "@/Components/AccountingPage/AccountingHero"
import AccountingOverview from "@/Components/AccountingPage/AccountingOverview"
import AccountingRequiredDocuments from "@/Components/AccountingPage/AccountingRequiredDocuments"
import AccountingBenefits from "@/Components/AccountingPage/AccountingBenefits"
import CtaContact from "@/Components/CommonComponents/CtaContact"

const Accounting = () => {
  return (
    <>
      <AccountingHero />
      <AccountingOverview />
      <AccountingRequiredDocuments />
      <AccountingBenefits />
      <CtaContact
        title={"Any Queries?"}
        selectedPlan={"Bookkeeping & Accounting"}
      />
    </>
  )
}
export default Accounting
