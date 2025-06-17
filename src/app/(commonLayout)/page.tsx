import ContactSection from "@/components/landingPage/ContactSection";
import { FeaturesSection } from "@/components/landingPage/FeatureSection/FeaturesSection";
import { FindEvents } from "@/components/landingPage/FindEvents/FindEvents";
import HeroSect from "@/components/landingPage/HeroSect";
import PlacesSection from "@/components/landingPage/Places/PlacesSection";
import TestimonialSection from "@/components/landingPage/TestimonialSection";

const page = () => {
  
  return (
    <div>
      <HeroSect />
      <FeaturesSection />
      <PlacesSection/>
      <FindEvents/>
      <ContactSection />
      <TestimonialSection />
    </div>
  );
};

export default page;