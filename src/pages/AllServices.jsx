import AllServicesHero from "@/Components/AllServicesPage/AllServicesHero";
import CallToActionFooter from "@/Components/AllServicesPage/CallToActionFooter";
import MainSection from "@/Components/AllServicesPage/MainSection";
import ServiceCategories from "@/Components/AllServicesPage/ServiceCategories";
const AllServices = () => {
  return (
    <>
      <AllServicesHero />
      <ServiceCategories />
      <MainSection />
      <CallToActionFooter />
    </>
  );
};

export default AllServices;
