import HomeCtaSection from "@/Components/HomePage/HomeCtaSection";
import HomeHero from "@/Components/HomePage/HomeHero";
import HomeServiceMarquee from "@/Components/HomePage/HomeServiceMarquee";
import HomeServices from "@/Components/HomePage/HomeServices";
import Hometestimonials from "@/Components/HomePage/HomeTestimonials";
import IdeaToIpoSection from "@/Components/HomePage/IdeaToIpoSection";
import MasterySection from "@/Components/HomePage/MasterySection";

const Home = () => {
  return (
    <>
      <HomeServiceMarquee />
      <HomeHero />
      {/* <MasterySection /> */}
      <HomeServices />
      {/* <Hometestimonials /> */}
      <IdeaToIpoSection />
      <HomeCtaSection />
    </>
  );
};

export default Home;
