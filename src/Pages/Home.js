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
import Testimonials from "../Components/Home/Testimonials";
import Faq from "../Components/Home/Faq";

const Home = () => {
  return (
    <>
      <Headers />
      <HeroSection />
      <Chairman />
      <Principal />
      <WhySection />
      <CampusDescription />
      <StudySection />
      <UpcomingEvent />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
