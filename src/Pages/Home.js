// import Header from "../Components/Header";
import Headers from "./Headers";
import HeroSection from "../Components/HeroSection";
import WhySection from "../Components/WhySection";
import CampusDescription from "../Components/CampusDescription";
import StudySection from "../Components/StudySection";
import UpcomingEvent from "../Components/UpcomingEvent";
import Footer from "../Components/Footer";
import Principal from "../Components/Principal";
import Chairman from "../Components/Chairman";

const Home = () => {
  return (
    <>
      <Headers />
      <HeroSection />
      <Principal />
      <Chairman />
      <WhySection />
      <CampusDescription />
      <StudySection />
      <UpcomingEvent />
      <Footer />
    </>
  );
};

export default Home;
