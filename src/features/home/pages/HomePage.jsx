import { useEffect } from "react";
// import CredibilityStrip from "../components/CredibilityStrip";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  useEffect(() => {
    document.title =
      "Global Minds Consultants | Fully Funded Scholarships and Admission Guidance";
  }, []);

  return (
    <div className="space-y-6 lg:space-y-8">
      <HeroSection />
      {/* <div id="success-stories">
        <CredibilityStrip />
      </div> */}
    </div>
  );
};

export default HomePage;
